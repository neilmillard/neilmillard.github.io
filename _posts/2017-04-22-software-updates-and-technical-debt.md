---
layout: post
status: publish
published: true
title: Software Updates and Technical Debt
author_login: neil
author_email: neil@neilmillard.com
categories: [Development]
description:
tags: [immutable, servers, software updates]
comments: true
crosspost_to_medium: false
---
I cannot stress enough how important it is to keep updated with the latest software versions. This does give us two problems however.

 i) Keeping software versions and configuration updated.
   Updating images and configuration can be time consuming for testers and system admins. Tools such as [Puppet](https://puppet.com/), [Packer](https://www.packer.io/) and [ServerSpec](https://serverspec.org/) can help here.
 ii) Availability of software if it's not updated.
   Should a version of software contain a critical bug, it may be withdrawn from public view. I use [bundles](https://en.wikipedia.org/wiki/Tar_(computing)) on a private [S3 bucket](https://en.wikipedia.org/wiki/Amazon_S3) as a solution to this.

I run servers for my clients in an immutable fashion. This means once the server is built, nothing changes on that server, for the life of the server.
Disaster recovery is solid as the servers are built from scratch every day. The server is built from a base image followed by the customised software and configuration for that server's role.

{% include image.html
      img="/public/img/server_layers.gif"
      title="Server Layers"
      caption="AMIs are built in layers" %}

The AMI provides the Operating system and is updated regularly (like everything else) with software patches. This is then followed by the configuration and software installation. However this does give the issue of making sure all the software is available ready for a rebuild.
The creation of a new server relies on the base AMI, plus any other software the build needs to create, configure and start a server running.

{% include image.html
      img="/public/img/software_update.jpg"
      title="software update"
      caption="Some software updates wipe everything" %}

This week Vertica issued a critical security fix for their software which means the supported base image [AMI](https://aws.amazon.com/marketplace/pp/B010ETKZKG) for all but the current fixed version was withdrawn from the AWS Marketplace.
This is great for customer security, but a bit of a headache as far as configuration and testing is concerned.

{% include image.html
      img="/public/img/1985_Mexico_Earthquake_-_Nuevo_Leon_building_2.jpg"
      title="Earthquake damages buildings"
      caption="Without foundations nothing stands up" %}

Had we not stayed current with the software, this would have created major rebuild issue for anyone building servers from the older AMI, as it no longer exists. The server would be unable to find its foundation building block.
