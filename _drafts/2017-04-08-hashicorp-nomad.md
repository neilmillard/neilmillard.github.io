---
layout: post
status: publish
published: true
title: Docker on Nomad
author_login: neil
author_email: neil@neilmillard.com
categories: [infrastructure]
description: 
tags: [cloud computing, data, docker, immutable, docker, nomad, hashicorp]
comments: true
crosspost_to_medium: false
---
Running docker containers on a cluster has several solutions available today:
* ECS, Amazons Elastic Container Service
* Kubernetes - A docker clustering and scheduling solution from programmers at Google
* Docker Swarm - Native clustering from Docker which I covered in a setup last week
* Hashicorp's Nomad - A task scheduler for clusters that supports Docker

I have been working with Nomad this week with the resulting 3 server cluster available here to play with. [Github Repo](https://github.com/neilmillard/vagrant-nomad).

Similar to the docker swarm tutorial, this code creates a cluster of 3 nodes, one server and two clients, to participate in a Nomad cluster.

After the relative ease of setting up the cluster, I found the settings needed a bit of tweeking as I had two network cards (so I could have static IP, if anyone knows how Vagrant can do this with one NIC, let me know).

This initial setup allows the command of 
```bash
nomad run /vagrant/redis3/example.nomad
```
to run 3 instances of Redis on our cluster. As the server is not setup as a client, this means two containers on one client and only one container on the other.

This raises an issue, how do you know which port to connect to. The service is configured so that you can connect to a port on the server and Docker Proxy silently forwards your request to the correct client.  
Without a service discovery service, it is a bit of a egg hunt to find which port you should use.

With the second example application, a UI for Nomad, can be launched as
```bash
nomad run /vagrant/hashi-ui/hashi-ui-docker.nomad
```
This uses the remaining capacity of the client nodes to run a web application container. This too doesn't give much clue as to where it is running.
In addition, in my code, due to the two interfaces on the master, it appears to docker-proxy to the wrong IP and doesn't forward the traffic correctly.

To address the issue of service discovery, I installed another Hashicorp product, [Consul](https://www.consul.io/).
This is configured in almost (but not quite) the same way as Nomad, and you will see from the config it is very similar. With this, the services can advertise where they are installed making it easy to find via DNS or API calls.

The example code in the repo will setup the Consul and Nomad cluster, but with the issue of the network cards.

I might solve this issue next week, and when I do, the repo will be updated.

As always, comments are welcome.

