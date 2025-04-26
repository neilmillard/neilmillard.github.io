---
layout: post
status: publish
published: true
title: How would you like your container served?
author_email: neil@neilmillard.com
categories:
  - Platform
  - Infrastructure
description: 'You have a container or docker image, now what!'
tags:
  - devops
  - servers
  - docker
  - containers
comments: true
crosspost_to_medium: false
date: '2022-10-02 13:00:00 +0000'
---
Containers and Docker images offer fast testing and deployment. They need deploying to be useful.
{% include image.html
img="/public/img/DALL·E-waiter_holding_a_white_plate_of_container.png"
caption="Waiter holding a plate with a container - DALL-E" %}

Your application is running in a container. How does your customer and users get to use it. You need as a minimum, two
things.
* Routing Layer
* Hosting Layer

For the routing layer, this could be as simple as a DNS Entry pointing to a load balancer, or something more elaborate
like a Nginx ingress gateway.

The Hosting layer has an even longer list of options. If you are working locally, you can tell your container to run
on your local machine with `Docker`, `podman`, `docker-compose` or some custom tool to start and monitor the containers.

If you only have one server to host your container, then that list is enough. For production though, you are going to
want a cluster of machines hosting many replicas of your container application.

There are many container orchestration tools to choose from
* Mesosphere
* Nomad
* OpenShift
* Cloud Foundry
* Elastic Container Service
* Write your own

These tools simplify the running and monitoring of container instances. They are responsible for finding a place to run
the container, and ensure that it keeps running until it's time to get replaced with a new version, or decommissioned.

Each of the tools above will interface with a database (of sorts) to tell the Routing layer where it can send traffic.

Mesosphere uses zookeeper or etcd, Nomad uses Consul, and Elastic Container Service uses Route 53.

The alternative is to use a cloud in a box product. Here I am talking about OpenStack. Ha Kidding. You could use that
but Kubernetes can do that all and make a better job of it.

{% include image.html
img="/public/img/k8s_learning.jpg"
caption="Kubernetes learning curve is steep" %}

Of course not everyone wants or needs to run a cloud in a box, and the tools mentioned above all have ecosystems of
tools to make up that cloud solution.

Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

