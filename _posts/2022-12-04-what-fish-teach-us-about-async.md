---
layout: post
status: publish
published: true
title: What fish teach us about asynchronous operations
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: fish operate independently?
tags: [devops, developer, infrastructure, events, scaling]
comments: true
crosspost_to_medium: false
---
Have you ever noticed how fish move in a school. It looks like a synchronised dance.
{% include image.html
img="/public/img/fish_school.jpg"
caption="A fish school" %}

The main purpose of this behaviour is protection from predators. Fish choose to school with similar or exact looking
fish, so as not to stand out.

In this way we are describing a group of servers, acting as a cluster. It doesn't protected from predators though, but
a attack on the group by the infrastructure. Hard disk failure, power outage, or cooling failure. Should one of those
happen though, the cluster will survive, ensuring the birth of more servers. Through automatic provisioning
not self replicating, yet.

Microservices
============

The fish can join or leave the shoal at any point, it doesn't alter the effectiveness of the shoal. So to follow that
model, our deployments of new code and servers should also be independent of the cluster.

This is the same reasoning for microservices over monolith applications. Each microservice is independent enough that
replacing one doesn't effect the application system. The microservices should also be designed in such a way that
they are not tightly coupled to another microservice. The use of gateways, adapters or Data access objects, give a
common interface between components and microservices, enabling asynchronous scaling, upgrading, deployment and
operations.

Events
=====

To further expand on the independence of a microservice, they could use a shared event bus, rather than direct
communication. This event driven architecture enables the plug and play of microservices. All the microservice needs
to understand, is how to receive/send data from/to the event bus, and how to process and create events.

Web servers like Apache and Nginx use this system to process requests from the internet. The leading
expert on event driven systems, [Martin Fowler has a blog article][events-martin].

Scaling
======

This also enables infinite scaling, provided each instance of the microservice is also designed in such a way to
cooperate with it's group. Providing each microservice is itself independent, scaling should be used to improve
throughput.

Bottlenecks
=========

Bottlenecks will appear in the system wherever resource contention occurs. In shoals, it might be the oxygen in the
water. In IT systems it might be the network, storage or databases. Hopefully though, you will quickly see that if each
of these systems is designed with an event bus and independent scaling, these bottlenecks can be managed by scaling out
too.


Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.


[events-martin]: https://martinfowler.com/articles/201701-event-driven.html
