---
layout: post
status: publish
published: true
title: AWS Limits
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description:
tags: [aws limits, servers, api limits]
comments: true
crosspost_to_medium: false
date: 2017-04-29 13:00
---
With the flexiblity of Amazon Web Services (AWS) you can create many servers in minutes. This is great from a scaling up point of view.
Your PR department have just informed you that a segment about your product is about to appear on national TV. You expect a spike in traffic, but its okay because of the preperation work and auto-scaling.

{% include image.html
      img="/public/img/cpu-mixedmode-flamegraph-java.png"
      title="CPU flamegraph"
      caption="CPU usage can spike" %}

Fabulous so you run from 10 servers to 30 servers to cope with the demand. What is the flip side of this? A hacker has gained access to your AWS account by AWS key in a repo, ([Don't do this, EVER](https://www.theregister.co.uk/2015/01/06/dev_blunder_shows_github_crawling_with_keyslurping_bots/)).

Before you can say, "what a great job with the autoscaling", you have hundreds of bit coin miners on your account, and you get the bill!

Fortunately [AWS have limits on every account](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html). There are limits for any type of resource you can request, including each type of EC2 server. This is useful incase the worse should happen, but it can cause an issue within normal operations too.

As part of regular monitoring of your servers and account usage, EC2 instance type or EBS may prevent you from launching a server, just when you need it. Fortunately a quick support ticket to AWS will get the limits increased for these legitimate examples.

{% include image.html
      img="https://upload.wikimedia.org/wikipedia/commons/a/ab/2004-05-02_Speed_Limit_3.jpg"
      title="Speed limits"
      caption="Limits are there for safety" %}

One of the hardest limits to monitor and manage, is the AWS API Limit. This is a sliding scale limit of requests per second, and is there to protect AWS from request spikes or storms. This can be mitigated by [retries](https://docs.aws.amazon.com/general/latest/gr/api-retries.html), or you may need further investigations as to what may be causing the API calls.

Let me know your experiences with the Amazon Web Services API and account limits.
