---
layout: post
status: publish
published: true
title: What does immutable mean?
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: Unchanging over time or unable to be changed.
tags: [automation, devops, immutable, ops]
comments: true
crosspost_to_medium: false
---
{% include image.html
      img="/public/img/stonehenge-under-the-sunset-skies.jpg"
      title="stonehenge"
      caption="stonehenge; unchanging"
      url = "https://www.goodfreephotos.com/england/other-england/stonehenge-under-the-sunset-skies.jpg.php" %}

Immutable
-
Unchanging over time or unable to be changed.

This is one of the rules I use for cloud servers. This gives two advantages:-
1. If you build servers using an automated, repeatable method, it is easy to build new ones.
2. You know exactly what is on the server. No hacks or patches applied manually. If they are not included in the automated process, they will be lost.

Fabulous, but there must be some drawbacks yes?
Of course, you can guarantee that something will need to be patched or updated on the server.
We know that things change, all the time.

Bugs and Patches
-
In the recent [Equifax hack](https://www.nytimes.com/2017/09/07/business/equifax-cyberattack.html), [Apache Struts](https://blogs.apache.org/foundation/entry/apache-struts-statement-on-equifax) has come under fire as the point of breach , and they offered this advice;
*Establish a process to quickly roll out a security fix release of your software product once supporting frameworks or libraries needs to be updated for security reasons. Best is to think in terms of hours or a few days, not weeks or months. Most breaches we become aware of are caused by failure to update software components that are known to be vulnerable for months or even years.*

{% include image.html
      img="/public/img/patch_640.jpg"
      title="patch on wall"
      caption="patch quickly" %}

Software bugs and security fixes are quickly fixed once discovered but need to be installed to your servers quickly.
So how do we update our immutable server?
After updating the server configuration files in our automated build process, we build a new one.

Depending on required uptime, the old one is destroyed last for a blue-green deployment, or first if the cost is more than the cost of downtime. In the case of a cluster, where uptime is designed into the service, the servers can be rotated into and out of the cluster, ensuring 100% uptime of the service.

Saving money
-
Because building servers to our exact specification is now so easy, we can build them whenever we want.
Either due to a software update, or to save money, as we are renting in the cloud, first thing in the morning, when we are ready to use them.
The rest of the time is can be switched off or even destroyed.

Logs
-
Destroying servers and no access to log into them, gives rise to another issue.
It is often useful for development and support teams to run some diagnosis or browse log files.
So this strategy needs consideration for monitoring and logging of the server and application.

Logging is often not seen as important, until something goes wrong.
Having a record of the activity of the server and application can be key in understanding what the issues are and assist in fixing them.
Given the ease of rebuilding the servers, often the log files local to that server are lost when bringing a fresh server in, as part of fixing the live service.

{% include image.html
      img="https://static-www.elastic.co/assets/blt6050efb80ceabd47/elastic-logo%20(2).svg"
      title="Elastic"
      caption="Elasticsearch and Kibana"
      url = "https://www.elastic.co/downloads" %}

The simplest solution for this could be to store the files and events as they are created to a central logging server.
Something like an Elastic or Elasticsearch, Logstash, and Kibana cluster, or a commercial service such as Loggly.

With the logs centrally managed, essential if you are running a cluster, any issues can be monitored and diagnosed from the logs, and are kept even after the server has been destroyed.

Building an ELK server cluster is simplified due to free open source puppet modules available from [Elastic](https://forge.puppet.com/elastic). These will need some customisation for your setup. In addition another module is required on the servers to send their logs. This is via LogStash, also available from the same location.

Summary
-
Immutable servers work great when used in combination with the cloud, centralised logging and an active update and patching schedule.

Any questions or how I might be able to help you and your organisation, just let me know in the comments below or contact via my [contact page](https://www.neilmillard.com/contact).
