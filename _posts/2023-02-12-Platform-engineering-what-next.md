---
layout: post
status: publish
published: true
title: What is next for DevOps and platform engineering?
author_email: neil@neilmillard.com
categories: [Platform, Development]
description: The end of DevOps and Platform Engineering?
tags: [devops, developer]
comments: true
crosspost_to_medium: false
---
One of the key takeaways of [Gartner's London 2022 Conference][londoncon] was to Accelerate the adoption of automation and platform engineering.
{% include image.html
img="/public/img/dialogo_scratch_best_friends_1.png"
url="https://en.wikipedia.org/wiki/Scratch_(programming_language)#/media/File:Dialogo_scratch_Best_Friends_1.png"
caption="Scratch, a visual no-code programming tool" %}

Automation
==========
What they really mean be this is self-service. Enabling and empowering developers to publish their code, without relying
on another team to do it. The legacy way of handling deployment meant handing over a deployable package, sometimes with
instructions, to an infrastructure engineer, to install the code to a production environment.

If the deployment steps can be and have been automated, then the developer can trigger that themselves.

This is what platforms do.

So What?
========
Gartner say by 2025, 70% of new applications with be developed by teams using no-code platforms. Is this just an
evolution of The Platform. Rather than having a Golden Path for creating an application, the platform will give you
a Graphic Interface to develop an application that you can share.

Wait, what?
===========
This sounds much like the templated website designs that have now got new skool web designers using the likes of
[WIX][wix] or [Squarespace][square].

Whilst these do create an end product, I am somewhat skeptical of their use case for applications of any complexity.
Visual game creators like [Buildbox][buildbox] have been around for years, and do have some use cases for prototyping,
sometimes more options and customisation is required.

Serverless?
===========
Likewise, serverless does not mean there are no Ops people looking after the 'sprawl'. Developers are great at writing
code and usually have very little interest in looking after what runs it, infrastructure. Even if there are no servers,
there are still resources that need managing.

Take AWS Lambda for example. These code deployments rely on connectivity to other systems, can consume api calls, hit
quota limits, etc.

So I do agree to an extent, that a lot of new applications can be designed from a graphic interface, as long as
flexibility exists to expand the code through other code snippets and APIs.

Long live the platform, it will just evolve. Much like the rest of us.

Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[londoncon]: https://www.gartner.com/en/newsroom/press-releases/2022-11-21-gartner-it-infrastructure-operations-and-cloud-strategies-conference-2022-london-day-1-highlights
[nocodeplatform]: https://en.wikipedia.org/wiki/No-code_development_platform
[square]: https://www.squarespace.com/
[wix]: https://www.wix.com
[buildbox]: https://buildbox.com

