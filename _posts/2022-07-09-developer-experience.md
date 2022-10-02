---
layout: post
status: publish
published: true
title: Developer Experience
author_email: neil@neilmillard.com
categories: [DevOps, Infrastructure, Development]
description: How we help developers make stuff?
tags: [devops, platform, dx]
comments: true
crosspost_to_medium: false
---
UX = User Experience, DX = Developer experience, what is that?
{% include image.html
img="/public/img/laptop-desk-computer-writing-apple-table-693727-pxhere.com.jpg"
title="developer working from home" %}

Developers are expensive and difficult to hire. Attracting and retaining developers is easier if your company has a
good developer experience.

Developer Experience (DX) is the interactions and motions that the developer goes through when working towards a goal,
ticket, software release. It is like User Experience (UX), except in this case the user is a software developer.

It is the experience of using the tools, the environment and systems during the development of software.  I can talk
about this as a provider of a platform with deployment and a build and test system.
We want an environment where the developer can just 'do their magic' without drama and blockages. To me this means
self service to tools, and providing access to the tools without obfuscation.
The journey to shipped product goes through a lot of tool chains, build, test, deployment, and feedback like metrics
and logs, when the thing is running.


Golden Paths
============
[Golden Paths][spotify-golden-path] and guardrails to help developers along an easy route to delivery. Often with
highly opinionated tools and frameworks, which are provided with a wealth of support and examples.
Spotify has an open source platform called [BackStage](https://backstage.io), which is gaining traction because
it allows developers to spend more time developing, rather than thinking about infrastructure.

For the old skool, I have mentioned [Heroku](https://www.heroku.com/) many times before when describing [platforms][PaaS]
and [scaling 12 factor apps][12FactorStillRelevant]. The IT industry making endless remakes of Heroku, but some are still
missing the point. Developer experience is more than just deployment.

The golden path is an easy to follow set of steps, providing a system where most of the decisions about tooling are set.
This enables a quick route to programming the software application, enabling fast results and less frustration for the
developer.  The support is already there for them. The examples are there to copy. The other teams can provide support
because they have already done it.

The tools are maintained by a dedicated team of DevOps, Cloud, SRE or whatever you fancy calling them. Enabling the
developers to do what they do best, and with self service for everything else. Calling on the Platform team, when they
see a gap in the tool or service, so the platform team can make things even easier.

DX Gaps
=======

An example of a platform that looks good, but is now closing is [cloud.service.gov.uk][gov.uk PaaS]. I don't know the
reasons behind the decision to close it, but I do know there were gaps in the Developer Experience. The stand out one
is [observability][gov-uk-observe]. Expecting the Developers to setup, support and use external services immediately
takes away the convenience of using your platform.


Conclusion
==========

Developer experience is more than a buzzword. It must provide the whole solution. Developer relations and a close
feedback loop with the platform team is essential to ensure maximum adoption of the platform.

If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content soon.

Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


[spotify-golden-path]: https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/
[PaaS]: {{ site.url }}/2022/04/12/platform-as-a-service.html
[12FactorStillRelevant]: {{ site.url }}/2021/04/09/is-12-factor-still-relevant.html
[gov.uk PaaS]: https://www.cloud.service.gov.uk/
[gov-uk-observe]: https://www.cloud.service.gov.uk/observability/
