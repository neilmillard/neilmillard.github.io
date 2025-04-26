---
layout: post
status: publish
published: true
title: Your stuff will Break Part 2!
author_login: neil
author_email: neil@neilmillard.com
categories:
  - Infrastructure
  - Development
description: Cloud applications and software still need Disaster Recovery.
tags:
  - automation
  - application
  - infrastructure
  - product
  - devops
  - dev
  - ops
comments: true
date: '2021-03-10 13:00:00 +0000'
---
A thermal event has occurred at a data centre.
{% include image.html
img="/public/img/OVHcloud_fire.jpg"
title="OVHCloud Fires?" %}

That is what we were told when Amazon Web Services experienced an outage of several services
in a zone in London EU-West-2. In this case the zone recovered after about 1 hour, with the
services recovering about 4 hours later.

OVHCloud went one stage further last night in their Strasbourg data centre. The advice this time is
'We recommend [you] activate your Disaster Recover Plan' the founder Octave Klaba said.

Our recommendation is to hold backups in another Region, such as Ireland or Frankfurt, if you are
hosted in AWS EU-West-2 London.

In AWS, a snapshot can be taken of an EBS Volume and that image can be copied to another
region in case of region failure, keeping the data safe. EBS Volumes are Availability Zone
specific, so copying the snapshot to another zone is a good idea. Then if needed a new EBS
Volume can be created in another zone.

You can find out more with the link below and more pictures on [Social Media](https://twitter.com/xgarreau/status/1369559995491172354).

[OVHCloud Fire](https://www.zdnet.com/article/ovhcloud-data-centers-engulfed-in-flames/)
