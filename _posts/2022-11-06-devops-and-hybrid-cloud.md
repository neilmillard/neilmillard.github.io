---
layout: post
status: publish
published: true
title: What does hybrid cloud mean for DevOps?
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: DevOps skills for a hybrid future!
tags: [devops, servers, programming]
comments: true
crosspost_to_medium: false
---
Hybrid is making a comeback, are your DevOps skills ready?
{% include image.html
img="/public/img/cloud-devops-hybrid.jpeg"
caption="Rawf8/Adobe Stock" %}

There is no doubt that cloud is still growing, with U.K public cloud market market projected to reach $16 billion in
2022 according to [Statista][ukcloudreport].

Hybrid
=====
Despite the tremendous growth, reports are growing that businesses are pulling workloads off of public cloud platforms
and onto on prem data centres.

The Node4 report noted that 56% of the respondents said their public cloud bills were more expensive that anticipated
with 17% reporting workload incompatibility.

This means we can see companies continuing to run workloads on company-owned hardware or platforms provided by a
hosting company. A [Close Brothers report][cbreport] agrees stating 58% of U.K. SMEs do not use cloud-based computing.
The costs associated with cloud migration and concerns with security stated as reasons not to move to the cloud.

Why use cloud then?
================
This agrees with my findings, that not all workloads are suitable for the cloud. There are just three use cases for
using cloud resources for your applications.

* Startup phase where capital expense for server hardware does not make sense. In early Alpha and Beta phases,
investments into unknown levels of hardware is difficult to predict or justify.
* Dynamic workloads, during growth phase, the lead times associated with new hardware might not be able to keep up with
the growth in demand for a service
* Variable workloads seen by some seasonal or development demand is more cost effective if you can scale down operations
rather than running and paying for peak demand all the time

Were you have a mature product, the workload is very predictable or largely static, it is more cost effective to invest
in your own hardware to run the servers. It is advisable to run virtualization for it's other benefits (another blog),
but running at a fixed or predictable overhead.

Indeed AWS came out of a project to provide a self service platform for amazon.com, followed by a way to monetise spare
capacity during the off peak months.

What about DevOps?
================
Developers will still need platforms, but with a hybrid approach, infrastructure skills may become more in demand as
knowledge about virtualisation, hypervisors and networks is needed for data centres operated away from the cloud
providers.

End of cloud?
============
No signs yet. With the U.K. market growing from $12 billion in 2020 to over $16 billion in 2022, and predicted to grow
exponentially in the next five years, cloud still has a lot to offer.


Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[ukcloudreport]: https://www.statista.com/outlook/tmo/public-cloud/united-kingdom#:~:text=Revenue%20in%20the%20Public%20Cloud,US%2410.03bn%20in%202022.
[cbreport]: https://www.closeinvoice.co.uk/news-and-insights/over-half-smes-do-not-currently-use-cloud
