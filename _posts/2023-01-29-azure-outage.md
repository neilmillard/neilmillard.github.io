---
layout: post
status: publish
published: true
title: Azure Outage
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: how can I reduce the impact of outages
tags: [devops, developer]
comments: true
crosspost_to_medium: false
---
Running large scale cloud operations is complicated. This week Microsoft Azure suffered [an outage][teamsoutage] ref MO502273.
{% include image.html
img="/public/img/failure_everywhere.jpeg"
caption="Failure, failure everywhere" %}

Networks?
==========

"We've isolated the problem to networking configuration issues" said a representative on [Twitter][teamsoutage].

I've heard from others that the impact was wide reaching and included Azure DevOps, Exchange, Teams and other
Microsoft 365 services.

How to reduce impact?
=================
When this happens, I'm often asked "Should we have gone multicloud?"
The answer here is no. Multicloud is where you run the same service on multiple clouds, in case one should fail. In this
case it was the SaaS (Software as a Service) level that failed, not Azure's underlying infrastructure.

The only real way to reduce impact is to have everything in one place. What do I mean by that? If your upstream services
are in the same place, everything would be effected by an outage. I mean if you store source code on Github, but run
the CI/CD on GitLab (not sure why you would but bear with me), if either Github OR Gitlab suffer an outage, it is done
broke. In statistics, it is more likely that one or the other will break, rather than both.

Is there a solution?
==================
By keeping systems that rely on each other together, you are statistically reducing the outage windows, by spreading
services your are adding up all the outages of your suppliers together.

So in summary, keep like services as close together as you can. If you cannot do that, have a backup.

In the case of git source code, then Git was designed as a distributed system, so you can have active/active repos.

Same for exchange, it can run in an active/active state, so have 2 exchange servers in different locations.

If you are relying on a SasS like teams, then ensure your teams know what to do when it is unavailable.

Failure everywhere
==============
Failures are part of computing and unavoidable, but they can be mitigated. Slack also endured an [outage in London][slackoutage].

As our team use slack, we resorted to a Google Chat, which we have documented as our procedure. Failures are only a
problem, when you don't know what to do about it.


Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[teamsoutage]: https://twitter.com/MSFT365Status/status/1618149579341369345
[slackoutage]: https://twitter.com/SlackStatus/status/1618274970744029190
