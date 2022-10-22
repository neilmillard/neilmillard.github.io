---
layout: post
status: publish
published: true
title: Platform engineering is not DevOps
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: What I think CloudOps is?
tags: [devops, servers, agile, cloud, ops]
comments: true
crosspost_to_medium: false
---
Platform engineering is running a self service platform. DevOps helps but it is more than that!
{% include image.html
img="/public/img/open_plan_office.jpg"
caption="Platform Team?" %}

What do developers want?
==========
Having worked in and with developer teams, I have some of the answers, but not all.  It is fair to say that developers
do not like servers. Anything I can do to enable the deployment and operation of a web based service, helps my fellow
developers. They want a platform. Lets map out exactly what that is.

You build it, you run it
======
In 2006, Werner Vogels, the then CTO of Amazon described the approach to software engineering. DevOps was the result
of developer not throwing the code over a wall for Operations to worry about.

Soon everyone wanted to adopt DevOps, to increase productivity, deployment frequency, and rate of failures in production.
Several ways of "DevOps" appeared, described in Matthew Skelton and Manuel Pais book ["DevOps Topologies"][mpms], one
approach does away with Operations completely. This so called "shadow operations" is quite inefficient and fails to
deliver a great return on investment for expensive to hire DevOps/Infrastructure specialists.

Whilst this looks like it removes the throwing over the wall problem, it creates conflicts, multiple standards and
increases the cognitive load on developers. This puts the developers in exactly the situation they are not well
prepared for, looking after servers.

The alternative, Self Service. Provide the servers and platform in a way the developers can consume, without knowing
the details and cloud native knowledge. There exists a breed of IT people who [love servers][6stepsexpert], tinkering
with Containers and get lost in improving configuration management. Provisioning of servers is their dream.

Platform Engineering
========
Can we provide a self service platform, that provides guidance and more importantly guard rails, to streamline
the developer experience?

By providing a golden path of development, an internal developer platform can enable development teams to go from a
blank specification, to deployed service in weeks. The Golden Path provides a well trodden and supported way to create
a new application from inception to deployment. This path reduces the decisions a team has to make, and accelerates
the delivery of a product by building on the success of previous projects delivered.

[2021 state of Devops][puppetdevops] show that by providing a bridge between the developers and operations, the Platform
Engineers provide a self service portal, together with templates and design decisions so that developers can focus on
delivering the project without distraction from untested and unsupported workflows and technologies.

This approach does come at a cost. Inflexibility. However, this does not stifle innovation of the platform itself.
If a new technology or approach is sound, then it can be incorporated in a continuous improvement kind of way.

By having a platform as a product, like Heroku set out, a dependable self service platform can be built and maintained
to enable rapid deployment of new services. As shown during the covid-19 outbreak, this approach provides dividends
where speed is of the essence.

Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[6stepsexpert]: {{ site.url }}/2017/03/25/6-steps-to-cloud-expert.html
[terraform]: https://terraform.io
[ansible]: {{ site.url }}/2022/09/25/what-is-ansible-and-how-does-it-work.html
[mpms]: https://web.devopstopologies.com/#anti-types
[puppetdevops]: https://puppet.com/resources/report/2021-state-of-devops-report/
