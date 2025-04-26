---
layout: post
status: publish
published: true
title: Thermal events are here
author_email: neil@neilmillard.com
categories:
  - DevOps
  - Infrastructure
description: 'Unexpected heat, brings unexpected server shutdowns'
tags:
  - devops
  - platform
  - cloud
comments: true
crosspost_to_medium: false
date: '2022-07-24 13:00:00 +0000'
---
Summer has arrived in the UK, record temperatures and servers shutting down. What can you do?
{% include image.html
img="/public/img/1024px-BalticServers_data_center.jpg"
title="BalticServers.com, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" %}

What is a thermal event?
=========================

Servers create heat during normal operation, so we keep them in racks that are inside industrial fridges.
Air conditioning units can deal with a certain level of heat output (BTU) and during cold weather they have an easy
task.

During hot weather, the units have to work harder to get rid of that heat. There is usually spare capacity built into
the cooling system, but in the event of a cooling unit failure, the capacity is reduced. This can leave hot spots
inside the data centre (UK spelling). These hot spots will cause a greater cooling strain on the equipment in that area,
and the temperature will rise.

What is affected?
==============

Servers have an upper operating temperature which if breached, causes the server to shutdown to prevent damage.
Other equipment such as hard drives, routers and power supplies, have similar alerts, so may also shutdown.
As seen by the [Google thermal event report][google-thermal-event], they report Google Compute Engine (GCE),
Persistent Disk and load balancers are impacted.

Why is it bad?
=============

From the recent [AWS EU-WEST-2 AZ2 event][eu-west-1-thermal-event]:
```
Some instances in a single Availability Zone are currently impaired
or have lost power in the EU-WEST-2 Region.
The root cause is a thermal event within a data center in the affected
Availability Zone that we are working to resolve.
Some instances may also be experiencing network connectivity issues
in the affected Availability Zone.
Elastic Load Balancing has shifted traffic away from the Availability Zone.
All multi-AZ databases have failed away from the affected Availability
Zone, however single-AZ database will remain affected until we see
full recovery.
We do not yet have a an ETA for full recovery but expect it to be more than an hour.
For customers that are able to fail away from the affected
Availability Zone, we recommend doing so.
```

Two things to note here.
* Amazon services are spread across multiple Availability Zones (AZ), so can continue to operate if
servers fail in one of the AZs. This is demonstrated by multi AZ databases 'failed away', and has a warning if you
have configured the single-AZ option.
* The last line is a reminder that if an AZ fails, you may not be able to 'fail away', meaning once it has happened
there is nothing you can do about it. Preparation is key here.


What can we do about it?
======================

Deployment of redundant servers and services is the main defence. Not just deploying more than one server, the servers
must be deployed to different Zones or even regions. All cloud providers enable the configuration of multiple zones
to deploy into. Couple this with regular automated deployments using [immutable servers][immutable-servers] and it
will be as robust as if you are running your own ECS or Lambda service.


Let me know how I can help you and your organisation via my [contact page](https://www.neilmillard.com/contact).


[aws]: https://aws.amazon.com/
[azure]: https://azure.microsoft.com/
[gcp]: https://cloud.google.com/
[immutable-servers]: {{ site.url }}/2017/09/16/what-does-immutable-mean.html
[aws-events]: https://aws.amazon.com/premiumsupport/technology/pes/
[eu-west-1-thermal-event]: https://repost.aws/questions/QUMl3A-BZ4RBmc2SAwB58_ag/impossible-to-stop-a-bugged-ec-2-instance
[google-thermal-event]: https://status.cloud.google.com/incidents/XVq5om2XEDSqLtJZUvcH
