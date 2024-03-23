---
layout: post
status: publish
published: true
title: Anatomy of a live deployment
author_email: neil@neilmillard.com
categories: [Platform, Development]
description: You have a local docker image, now what?
tags: [devops, developer]
comments: true
crosspost_to_medium: false
---
You have dockerised your web application, and now it's time for the world to see it. What does that look like?
{% include image.html
img="/public/img/live-deployment-docker.png"
caption="Production, what it looks like in AWS" %}

The flow once deployed
==========
The user asked for your website. After a DNS lookup, the request goes to

1) Cloudfront, frontend caching

2) ALB, Application Load Balancer, because you have more than 1 container running, right?

3) The ALB returns the request from the container.

Easy right. Let's break those steps down.

Cloudfront
========
The [front door][cloudfront] to your web application. At the most basic level, it will cache what it can and forward requests to the
origin, in our case the ALB.

Security is checked at this level, SSL/TLS, and rules to defend against DDoS (Distributed Denial of Service) attacks.

Further to this, rules can be create to split traffic at a global level. Want to serve customers in Europe, use the
London load balancer setup. Customers in USA, route to Virginia for a faster response.

ALB
===========
The [Application Load balancer][alb] enables incoming requests (load) to be balanced across multiple deployed containers
(instances) which enables horizontal [scaling](/2016/10/10/elastic-and-scalable.html) of your application.

CloudMap
========
So that it can send the request to the correct network address, it needs to query [CloudMap][cloudmap]. This is like dns
, but with a little more data, like port numbers. When [ECS][ecs] (keep reading for more) launches your container, it
registers it with the CloudMap Service Discovery, so that we and our Load Balancer can discover it.

ECS
===
[Elastic Container Service][ecs] is AWS' container orchestration service. With the definition of a Task, ECS can launch a
container image, with some configuration, like environment variables and secrets, on an EC2 Server or Fargate.

We can also define a Service, which enables us to define how many Tasks make up a service, as well as defining a
Load Balancer to report to.

More advance configuration can enable 'auto-scaling', where at a given trigger (e.g. time of day) we can set the number
of instances we want to run. Handy for Dev environments to take a break when the Tests are not running.

Fargate
=======
In this example I have chosen [Fargate][fargate] as the compute provider. This means we do not have to look after the
servers, we simply use some that AWS have made available to us.

Conclusion
==========
With this little lot configured, we can share our web application with the world. Some of these components can be shared
if you have more than one service.

You may also require extra components, such as databases, logging and metrics (Cloudwatch), or even use AWS Container Registry.

Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out
for my [YouTube channel]({{site.data.youtube.channel}}) content.

[cloudfront]: https://aws.amazon.com/cloudfront/
[cloudmap]: https://aws.amazon.com/cloud-map/
[ecs]: https://aws.amazon.com/ecs/
[alb]: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
[fargate]: https://aws.amazon.com/fargate/
