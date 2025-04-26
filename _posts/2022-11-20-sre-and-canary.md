---
layout: post
status: publish
published: true
title: System Reliability and Canaries
author_email: neil@neilmillard.com
categories:
  - Platform
  - Infrastructure
description: Keeping things going and knowing when they are impaired?
tags:
  - devops
  - servers
  - microservices
  - canary
comments: true
crosspost_to_medium: false
date: '2022-11-20 13:00:00 +0000'
---
Getting a service in Production is a big step, monitoring it and keeping it healthy is an endless battle.
{% include image.html
img="/public/img/clouds-horizon-road.jpg"
caption="The road ahead can contain obstacles" %}

The main focus of SRE (Systems Reliability Engineering) is to keep the service online 24/7.  There are three main
approaches used to keep the service 'on the road'.

Removing SPOFs
============
Single Points of Failure (SPOF) is a critical component within a system, that if they fail, will take the system out of
service. When designing a system, ideally no SPOFs will feature anywhere in production.  Duplicating components like
power or network connections, to servers (via load balancers) and web services, will ensure that things can fail without
causing total failure.

Alerting
========
Having adequate monitoring and alerts will ensure that when something does go wrong (and it will), the team is alerted
to this situation so that remedial action can be taken. In the event of a component failure, the system will be in a
degraded state, and bringing it back fully should have an appropriate priority. One webserver failing out of twenty,
not a big deal, but if 50% of the webservers are unavailable, perhaps it requires more attention.

The Canary
==========
Journeys through the system should be tested on a regular basis too. Synthetic transactions can surface a wide range
of statistics about a system. Average transaction time, or a failure of a component can be found by this method.
Imagine a none critical part of the system was no longer in service. The MFA code sending service during login is not
always needed during a session, but having a synthetic transaction that runs this journey would quickly spot if it was
not available. Running through every path of the journey could save a lot of [embarrassment][twitterMFA].

Canary journey statistics can then drive alerts if appropriate. Critical alert for system down, scale up and down
alerts for performance timings out of a predefined baseline.




Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.


[twitterMFA]: https://www.androidauthority.com/twitter-sms-2fa-3234698/
[cloudops]: {{ site.url }}/2022/10/16/what-is-cloudops.html
