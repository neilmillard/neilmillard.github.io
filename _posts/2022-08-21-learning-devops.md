---
layout: post
status: publish
published: true
title: Learning DevOps
author_email: neil@neilmillard.com
categories:
  - DevOps
  - Infrastructure
description: Skills you need to get the DevOps job you really want
tags:
  - devops
  - platform
  - cloud
comments: true
crosspost_to_medium: false
date: '2022-08-21 13:00:00 +0000'
---
Want to get to the next level? Beyond reading Stack Overflow. What can you do?
{% include image.html
img="/public/img/bookshelf.jpg"
title="A bookshelf" %}

The overloaded term DevOps, this article is focused on the infrastructure / programming and [related roles][my-name-is].

Infrastructure
===========
This knowledge area is all about the 'stuff' you need or dependencies required by your application. The basics are
compute, storage and networking.

Compute is something that looks like a server, and it might even be a server.
There are four types of compute

1) Bare metal

2) Virtual servers

3) Application isolation or Containers

4) Serverless environment

As we go down the list, each item is dependent on the previous item, the difference is who is looking after it.

For our purposes 1 and 2 are pretty much the same, just a difference in lead time (the time it takes from expressing the
desire to have and provisioning). We are dealing with a base operating system and need to install tooling and server
software.
You need a knowledge of server operating systems, storage management, and should use a tool like Packer with a
Configuration management tool like Ansible.
For the principles see [puppet camp london 2017](/2017/06/10/puppet-camp-london-june-2017.html)

Containers also have an operating system and if they are hosting a web application, it is important to keep them up to
date with patches and software versions to avoid breaches.

Serverless provides the most abstracted environment for you application to run, and requires little configuration to
setup. More about those at [Your Own Serverless][your-own-serverless]

Of course the server is no good if nothing can talk to it. Networking, TCP/IP, Firewalls and Load Balancers are required
to make the application accessible and safe from 'Internet Nasties'. Routing, Ports and the infamous ISO Network model.
{% include image.html
img="/public/img/OSIModel.jpg"
url="https://en.wikipedia.org/wiki/User:MrsValdry/Application_Layer"
attribution="MrsValdry, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
title="7 layers of OSI Network Model" %}

Programming
==========
At a minimum the basic coding structures including IF-Then, While, and creating functions. These are found in bash
scripts and can be useful with [Packer][Packer]

I would highly recommend learning [Python][Python] as it is heavily used in the DevOps world, from [Ansible][Ansible] to
AWS Lambdas.

Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).

[my-name-is]: {{ site.url }}/2022/06/25/my-name-is.html
[your-own-serverless]: {{ site.url }}/2022/08/07/run-your-own-serverless.html
[Packer]: https://www.packer.io/
[Python]: https://farid.berkeley.edu/downloads/tutorials/learnPython/
[Ansible]: https://www.ansible.com/
