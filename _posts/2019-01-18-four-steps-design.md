---
layout: post
status: publish
published: true
title: My Four Steps for a successful cloud deployment - Design
author_login: neil
author_email: neil@neilmillard.com
categories:
  - Infrastructure
  - Development
  - Book
description: Design your application with the cloud in mind
tags:
  - automation
  - application
  - infrastructure
  - book
  - devops
  - dev
  - ops
comments: true
crosspost_to_medium: false
date: '2019-01-18 13:00:00 +0000'
---
Application designed for Cloud
------------
As the Cloud is a pay as you go service, the application should be too.
{% include image.html
      img="https://www.neilmillard.com/public/img/purple_clouds.jpg"
      title="Purple Clouds" %}

AWS’s CTO Werner Vogels speaking at Amazon re: invent said
‘While an Amazon EC2 instance might look like a server to you, it is not a server.
It is something you can switch off, it is a software component’.

With a disposable approach to servers and therefore the services that run on them,
this means considering start time, ungraceful shutdown, where the data lives,
and automation.
Many applications designed to run on Cloud can recover from infrastructure failure by
building themselves quickly, avoiding stateful and important data stored on the servers
wherever possible, replicating data to preserve it, and doing all this with as little human
interaction as possible.

{% include image.html
      img="https://www.neilmillard.com/public/img/computer_trash.jpg"
      title="Disposed servers" %}

For the infrastructure do this, DevOps borrowed from developers and created automated
programs to do the heavy lifting involved in building server environments and recovering.
By moving to a programmable model and storing the instructions to build the infrastructure
in the form of executable instructions, the servers can build and recover themselves. This
is known as Infrastructure as Code.

Imagine the instructions ready to be executed for an installation of SAS™, where at the click
of a button and a few parameters, an environment or service group of servers is created,
built, configured, and commissioned ready to work. This repeatable program empowers the
developers to create their own version of the production servers, so that whatever they
create and test is working in a way that the production version of that service is configured.
This is because both have been created from the same code and instructions. This immediately
removes the complexity and risk associated with deploying to production, as it has been
tested and running in a near duplicate.
This infrastructure code is designed with Cloud failures in mind to enable fast recovery.
As it is code, it can be tested.

{% include image.html
      img="https://www.neilmillard.com/public/img/www.maxpixel.net-Stopwatch-Speed-Chronometer-Interval-Timer-706064.jpg"
      title="Timing servers recover and build" %}

A tool for defining and running code to create infrastructure is called Terraform by
Hashicorp. This is an open source tool owned by the community. With a collaboration mindset,
this project is alive with updates. This tool enables instructions to be written, accessing
providers of Cloud services, AWS, GCP, Azure, with new features added to the tool as quickly
as it can be ordered via the Cloud provider’s API.

Once the infrastructure and servers have been created, the servers need to be configured.
The three leading tools for this are Puppet, Chef and Ansible. All three can be used in an
immutable way, allowing the servers to build themselves and enabling fast scaling and
recovery from failure.

{% include book_info.html %}
