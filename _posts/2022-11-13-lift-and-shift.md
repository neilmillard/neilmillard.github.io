---
layout: post
status: publish
published: true
title: Lift and shift to the cloud?
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: Can I save money lifting and shifting my servers to the cloud?
tags: [devops, servers, ansible]
comments: true
crosspost_to_medium: false
---
Moving Virtual machines to a cloud provider sounds like a good plan, lets examine the evidence.
{% include image.html
img="/public/img/forklift.webp"
caption="U.S. Department of Agriculture (Source)" %}

The number one reason to move workloads to the cloud is to save money. After all, running a data center is costly.
By migrating virtual machines you are saving on the overhead of running a Datacenter, with the power, cooling, security
and rental costs. You also benefit by getting new hardware underneath your Server.

However, take [AWS][aws] for instance, they are making quite a profit. In fact they even incentivise cloud migrations by
way of credits and discounts. So how do they make their profit?

Firstly owning hardware vs leasing hardware. You may well lease the servers in the data center. The other approach is
to buy the hardware upfront, to assume you will get your return on investment in 5-6 years.

Secondly the cost of the hardware. If I had to specify hardware for VMware, in the past I have used mid range HP blades.
Like the BL460, that has redundancy by way of power supplies and a nice warranty. AWS on the other hand, as mentioned
in [a keynote speech][keynote] in 2016, run custom hardware, which they make considerable cost savings on.

Thirdly the cost of support. People are expensive, so another saving you might have is reallocating engineers looking
after the rack mounted servers and storage, to [CloudOps][cloudops] one of the DevOps Infrastructure disciplines.
Included in your aws bill is support for the hardware. Amazon have to pay their staff too.

The truth is, if you lift and shift, you might make some savings. However the real benefit of cloud can be found in
specialisation and scaling.

* specialisation: Running database clusters 24/7 is easy if you own the hardware, but what if you could use AWS support
to run the clusters. Then you just need focus on the database queries, reports and application integration. This
abstraction enables faster delivery, but comes at a cost.
* scaling: but running a database cluster (in this example) does not have to run 24/7 unless it is supporting a
production application. For reporting and development environments, they can be scaled down, or even terminated. This
can save up to 40% of costs vs 24/7 running. Together with storage flexibility, you only have to increase the database
storage as it grows, so you do not pay for what you do not need yet.

The same goes for other servers in the fleet. Kubernetes clusters can be replaced by fargate or other on demand
services. Web servers may be replaced by API gateway and lambdas. By using the AWS services, you may get further lock in
but are saving money in terms of actual usage vs fixed overhead.

This migration path is a bit more complicated than a lift and shift, and depending on the workloads, might not be worth
performing.


Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.


[aws]: https://aws.amazon.com/
[keynote]: https://www.youtube.com/watch?v=AyOAjFNPAbA
[cloudops]: {{ site.url }}/2022/10/16/what-is-cloudops.html
