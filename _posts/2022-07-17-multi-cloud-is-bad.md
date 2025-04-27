---
layout: post
status: publish
published: true
title: Multi-cloud is bad
author_email: neil@neilmillard.com
categories:
  - DevOps
  - Infrastructure
  - Development
description: Should you write infrastructure code for multiple cloud vendors?
tags:
  - devops
  - platform
  - cloud
comments: true
crosspost_to_medium: false
date: '2022-07-17 13:00:00 +0000'
---
I have had customers that want to reduce their risk by running in multiple clouds. You shouldn't.
{% include image.html
img="/public/img/sky_cloud_3_elizabeth_castle_jersey.jpg"
title="clouds" %}

What do you mean by Multi-cloud?
=========================

I do not mean using the best tool for the job. For instance at Millard Technical Services we use
* G-suite for email and collaboration
* AWS for infrastructure
* GitHub for repositories
* Slack

Good practice and the best tool. For instance, we do not use Amazon Chime, unless we are talking with AWS Support.

I do mean, running the same Infrastructure as Code and deployments, in a cloud agnostic way, seamlessly across different
cloud vendors.
This enables developers to deploy without noticing who the underlying vendor is.


Why Multi-cloud?
==============

My customers tell me they want multi-cloud to protected them against:
* **Vendor lock in.**
  The truth here, is you are already locked in, either through technology choices or hard to migrate data. Running
  in multi-cloud just multiplies the problem.
* **Vendor failure.**
  Fear that the vendor will force higher pricing, deprecate a product or worst case, go bust.


Why is it bad?
=============

Each cloud vendor does things differently. It's not just a bunch of disks, network and servers to run your microservices.
Network configuration is quite different between the vendors.
* AWS VPC's are defined with subnets, routing tables and security groups
* GCP give you VPCs in auto-mode, with firewall rules and policies

To build a load balanced application, the vendor neutral way is to run your own [nginx][nginx] or [HAproxy][haproxy]
code, rather than leveraging the cloud vendors solution of load-balancers.
The same is true for databases and security as mentioned above.

One of the delights of using a cloud vendor is defining a load balancer in a few lines of YAML, or HCL, and not worrying
about the detail.

As I said [last week][developers-expensive], developers and this goes for your DevOps engineers or
[whatever you want to call them][my-name-is], as well, people are expensive, cloud services (in comparison) are not.
Let them deliver real value to the business, rather than reinventing the load balancer. That's why you want to use cloud
vs a data centre right?


Clouds, the differences
======================

It is hard to understand the core stuff at a cloud provider. For that reason, I specialise in [AWS][aws], and for
other customers, we have [Azure][azure] and [GCP][gcp] specialists too.  It is rare to find an engineer with deep
knowledge on two cloud vendors, and rarer still to find an expert on three.

Cloud to cloud migration is equally rare, the cloud vendors are growing from data centre migrations and new workloads
rather than migrations from another cloud provider.

The thing you are (often) trying to mitigate is failure, and all hardware fails. You cannot avoid it, so be ready for it.
Regardless of which cloud vendor you are with. This is easily mitigated with deployments that span multiple regions with
your existing cloud provider.


Still not convinced?
====================

Of my customers, the multi-cloud looks a bit like 80% at one vendor and a small selection of services from other vendors.
This demonstrates two things.
* Migrating between clouds is hard
* The best tool for the job might be with another vendor

In other words, we have not seen a successful project with vendor agnostic cloud. It just costs too much time to develop.

If you are worried about the costs, then stick to one provider and negotiate a discount based on your spending commitment.

Remember you don't have to be multi-cloud to cherry pick services.  You can have a service deployed to Azure due to the
unique service they provide, without feeling the need to duplicate everything or migrate to them.



[aws]: https://aws.amazon.com/
[azure]: https://azure.microsoft.com/
[gcp]: https://cloud.google.com/
[my-name-is]: {{ site.url }}/2022/06/25/my-name-is.html
[developers-expensive]: {{ site.url }}/2022/07/09/developer-experience.html
[nginx]: https://www.nginx.com
[haproxy]: https://www.haproxy.org
