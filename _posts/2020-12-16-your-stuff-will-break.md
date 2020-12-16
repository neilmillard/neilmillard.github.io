---
layout: post
status: publish
published: true
title: Your stuff will Break!
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: Cloud applications and software must be resilient to failure.
tags: [automation, application, infrastructure, product, devops, dev, ops]
comments: true
crosspost_to_medium: false
---
Your stuff will Break!
------------
Have you heard of Chaos Engineering? I heard it first from our friends at Netflicks.
{% include image.html
     img="/public/img/AWS-Fault-Injection-Simulator_HIW-Diagram.png"
     title="Random Fires?" %}

Before that I just knew from my hardware support experience, that you must have redundancy built into your datacenter.
In terms of hard disks (moving parts are more prone to failure), so we always had a supply of hot swap Hard disks ready for when the orange light told us that the end was near.

In the cloud you probably won't get such a warning. Your EBS volumes are virtualised and covered from physical failure, there is always software failure too.
Other failures, network connectivity to another zone? If your application is only deployed to one zone, you may experience unhappy customers.

To help test your application and infrastructure design against amazon failures, AWS have announced a new service.
<a href="https://aws.amazon.com/fis/">Fault Injection Simulator</a>

I'll be taking a closer look when we get the chance to play with it.

Till then, Keep your data safe.
