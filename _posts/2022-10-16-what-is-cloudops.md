---
layout: post
status: publish
published: true
title: What is CloudOps?
author_email: neil@neilmillard.com
categories:
  - Platform
  - Infrastructure
description: What I think CloudOps is?
tags:
  - devops
  - servers
  - agile
  - automated build
  - ansible
  - automation
  - cloud
  - ops
comments: true
crosspost_to_medium: false
date: '2022-10-16 13:00:00 +0000'
---
I was asked this question recently. Here's my answer.
{% include image.html
img="/public/img/DALL-E-cloudops.png"
caption="CloudOps?? - DALL-E" %}

CloudOps sounds a bit like DevOps and in a way it is.  In the olden days before the Internet, we looked after servers
on the premises of the business. On Prem servers. There was a team, looking after the 'tin', infrastructure team.

Ops
===
This started to evolve into an ops team with the advent of virtualisation. It was around 2005 when to fulfil my
application installation project, I would order a server, but this time it was a server running on [VMWare][vmware],
rather than a physical racked server.  The advantage was this took 1 day to fulfil, whereas a physical server order
would take about two weeks.

The Ops team would be performing the work, to deliver the server to me in a state where I could log onto it remotely.
When they started delivering virtual machines, there was automation to help them. Templates, scripts and so on to reduce
the delivery time further.

Cloud
=====

Then the cloud was getting a bit more serious. For my project I could order a server that was running on the cloud,
rather than in the On-Prem Data Centre.  The team providing this server, was largely the same team as before, only now
they were no longer called Ops, but CloudOps.

DevOps
=====

This separation of server delivery and application delivery is an [Agile][agile] and DevOps anti-pattern. Working together, by
using the self service capabilities of the cloud provider directly, a DevOps team can order a server in seconds, having
it online with an image the team have constructed and running the application in minutes. This enables rapid scaling of
server resources, if required.

The speed of delivery gives another benefit. When you have to wait for a day for the delivery of a server and the
replication of the paperwork that goes with it, it is not good use of time to destroy and recreate on a daily or even
weekly basis.

If you know you can create it within minutes, then you aren't afraid to destroy the server. This means the bill payer
may only get the bill for a server that has run just long enough to provide value to the developers, the company and
ultimately the customers.

Per hour, per minute or even per second billing is no use if it takes a long or manual process to create the server. To
take advantage of [measured service][yt-measured-service] you need [automation][build-themselves] in place. For the one off cost of writing
the automation, for servers, usually a combination of [Terraform][terraform] and [Ansible][ansible], you can save lots
on an ongoing basis by only running the servers when they are required.


Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[vmware]: {{ site.url }}/2017/03/25/6-steps-to-cloud-expert.html
[yt-measured-service]: https://www.youtube.com/watch?v=wzgWp1oP9LM
[build-themselves]: {{ site.url }}/2018/09/15/devops-getting-servers-to-build-themselves-in-aws.html
[terraform]: https://terraform.io
[ansible]: {{ site.url }}/2022/09/25/what-is-ansible-and-how-does-it-work.html
[agile]: https://www.youtube.com/watch?v=iziX2axpsyE
