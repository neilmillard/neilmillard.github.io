---
layout: post
status: publish
published: true
title: Docker Swarm
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description:
tags: [cloud computing, data, docker, immutable, docker swarm]
comments: true
crosspost_to_medium: false
date: 2017-03-31 13:00
---
This weeks challenge. Automate the creation of a docker swarm.

Docker has been going through some big changes recently. 1.13 -> 17.03 . No there haven't been a whole raft of changes. Just a rejig of the versioning. Docker intend to release a new version every month, so the versions follow a calendar. 2017 March in this example.
So what has changed? If you look for articles about Swarm, most of them are for versions before 1.12. So I'm writing this to get myself as well as anyone else reading this up to date.

### Version 17.03
First up, lets create a swarm. Easy but with one catch. Swarm uses tokens internally for allowing new nodes to join the swarm. A typical way of doing this is:
```
[root@localhost ~]# docker swarm init --advertise-addr eth0
Swarm initialized: current node (otq2node46ab7onelq88k4xe) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-49notae85i8c5rea5alx8abc2toke546ny9x8qy7r2f398dwkt-cryin443sc2xpocqb24niawk9 \
    192.168.15.2:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

This initialises our swarm cluster with the first master, and we have a token to look after. This token is required for our worker nodes to attach to the swarm.
Using Infrastructure as code, means we need to store this so that when building the worker nodes, they can join this master.

Encrypting this and putting it in the config repo is easy, then it can be passed to the puppet code to add new nodes.

### Looking after the master
As the environments are destroyed daily, the next challenge is to rebuild the swarm master. We could use the same code above (at least a puppet version of it) but this would in all likelyhood give us a different token, thus breaking the worker build.

The answer lays in the way Docker swarm keeps track of things in its folder structure. Stopping the service and backing up this folder will give us a replicatable way of reforming the cluster master.
```bash
#!/bin/bash
systemctl stop docker
tar cvzf /tmp/swarm.tgz /var/lib/docker/swarm
systemctl start docker
```

Stashing this somewhere safe, like an private S3 Bucket, allows the node to retrieve this file, extract it to the correct location and then start docker, starting from where it left off and allowing us to use the same worker token.

```bash
#!/bin/bash
systemctl stop docker
rm -rf /var/lib/docker/swarm
tar xzvf /tmp/swarm.tgz /
systemctl start docker
# start the swarm
docker swarm --force-new-cluster --advertise-addr eth0
```

The worker token can be confirmed by running
```
[root@localhost ~]# docker swarm join-token worker --quiet
SWMTKN-1-49notae85i8c5rea5alx8abc2toke546ny9x8qy7r2f398dwkt-cryin443sc2xpocqb24niawk9
```

And there you have it, a reproducable docker swarm. Ready to run Services and such like.

Next Week, looking at another Docker cluster - [Nomad](https://www.nomadproject.io/).

