---
layout: post
status: publish
published: true
title: What is Ansible and how does it work?
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: Ansible, build me a server!
tags: [devops, servers, ansible]
comments: true
crosspost_to_medium: false
---
Configuration management gives your servers roles and profiles.
{% include image.html
img="/public/img/joanna-with-flair.png"
caption="Office Space: Server with Flair via https://www.youtube.com/c/MOVIECLIPS" %}

Ansible provides a way to write code to configure your servers and environments in a repeatable way.

Having multiple environments, this enables development to be the same as production, so you know that software tested in
development will work exactly the same, regardless of which environment it is install in, including production.

{% include youtube.html
ref="Acvn1s0ZqtY"
%}

Ansible is idempotent and can be used in an immutable way, allowing the servers to build themselves at boot up
so that we can scale fast and recover quickly from failure.

A simple playbook
=======

You can start with a very basic all in one file playbook.

This includes an inventory, vars and tasks.

{% highlight yaml %}
- hosts: all
  user: root
  gather_facts: true

  vars:
    user: neil
    packages:
      - git
      - wget
      - curl
      - htop
      - haveged
  tasks:
    - name: update all Ubuntu things
      apt: name=* state=latest
      when: ansible_os_family == "Debian"

    - name: Make sure we have a 'wheel' group
      group:
        name: wheel
        state: present

    - name: Allow 'wheel' group to have passwordless sudo
      lineinfile:
        dest: /etc/sudoers
        state: present
        regexp: '^%wheel'
        line: '%wheel ALL=(ALL) NOPASSWD: ALL'
        validate: 'visudo -cf %s'

    - name: Add sudoers users to wheel group
      user:
        user="{{ user }}"
        groups=wheel
        append=yes
        state=present
        createhome=yes
        shell=/bin/bash

    - name: Set up authorized keys for the deployer user
      authorized_key: user="{{ user }}" key="{{item}}"
      with_file:
        - /home/neil/.ssh/id_rsa.pub

    - name: Ensure packages are installed
      apt:
        name: "{{ packages }}"
        state: present
      when: ansible_os_family == "Debian"

- name: Log in as the new user to disable root
  hosts: all
  user: "{{ user }}"
  gather_facts: false
  become: yes

  tasks:
    - name: Disable root login over SSH
      lineinfile:
        dest: /etc/ssh/sshd_config
        regexp: "^PermitRootLogin"
        line: "PermitRootLogin no"
        state: present
      notify:
        - restart sshd

    - name: Disable password login
      lineinfile: dest=/etc/ssh/sshd_config regexp="^PasswordAuthentication" line="PasswordAuthentication no" state=present
      notify:
        - restart sshd

  handlers:
  - name: restart sshd
    service:
      name: sshd
      state: restarted
{% endhighlight %}

The above snippet,
* defines the inventory
* defines some vars or variables
* updates your server with the current patches and security fixes
* creates a user and adds them to the `wheel` group enabling sudo
* enables passwordless (ssh key) login for the user
* Then logs in using that newly created user to disable root login over SSH
* Finally defines a handler to refresh sshd config by restarting

Roles
====

In a bigger project, you would use Ansible's Roles to define a series of tasks (like above) that are related.

For instance you would normally have a `common` role, together with some personality specific roles like `webserver` or
`database` or `monitoring`.

Each role has a well defined directory structure
```
common/               # this hierarchy represents a "role"
    tasks/            #
        main.yml      #  <-- tasks file can include smaller files
    handlers/         #
        main.yml      #  <-- handlers file
    templates/        #  <-- files for use with the template resource
        ntp.conf.j2   #  <------- templates end in .j2
    files/            #
        bar.txt       #  <-- files for use with the copy resource
        foo.sh        #  <-- files for use with the script resource
    vars/             #
        main.yml      #  <-- variables associated with this role
    defaults/         #
        main.yml      #  <-- default lower priority variables
    meta/             #
        main.yml      #  <-- role dependencies
    library/          # roles can also include custom modules
```

Ansible also has the concept of inventories, which enable you to build and categorise a list of servers, which in turn
will have the roles run on them. This is normal where there is a 'controller' or 'controltower' to ensure the servers
are configured regularly on a schedule.

Immutable servers
=======

We use the inventory to run the ansible locally, where the server reads the `tags` from a cloud providers meta data, to
understand what role it should configure itself with.

In this way we can build a short lived immutable server, that configures itself on boot, by downloading the Ansible
code, combining with configuration tags and running the playbook against itself.

If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


