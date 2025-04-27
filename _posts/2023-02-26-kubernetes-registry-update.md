---
layout: post
status: publish
published: true
title: Registry update for Kubernetes
author_email: neil@neilmillard.com
categories:
  - Platform
  - Development
description: Old registry being frozen
tags:
  - devops
  - developer
comments: true
crosspost_to_medium: false
date: '2023-02-26 13:00:00 +0000'
---
The community registry is now the best source for images.
{% include image.html
img="/public/img/containers-return-1600.jpg"
caption="New Home for community container images" %}

If you have invested all the cash it needs to run Kubernetes, then you might want to update your image registry sources.

Kubernetes have announced the old registry `k8s.grc.io` will be frozen and you should use `registry.k8s.io` from April.
For more detailed information about timelines see this [blog post][k8s-blog].

If you want a cheaper solution to running containers in the cloud, then check out [this blog post][containers] where
I show you the alternatives.

Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.


[k8s-blog]: https://kubernetes.io/blog/2023/02/06/k8s-gcr-io-freeze-announcement
[containers]: {{ site.url }}/2017/04/08/hashicorp-nomad.html
