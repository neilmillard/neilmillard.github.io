---
layout: post
status: publish
published: true
title: You are paying too much for your cloud servers
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: Datacenters have been used since the 50s with the large mainframes. In this article I will share my approach to building servers for the cloud instead of for the datacenter.
tags: [automation, devops, immutable, dev, ops]
comments: true
crosspost_to_medium: false
---
{% include image.html
      img="https://upload.wikimedia.org/wikipedia/commons/d/d3/BRL61-IBM_305_RAMAC.jpeg"
      title="IBM_305_RAMAC"
      caption="Datacenters of the 50s" %}

Datacenters have been with us for a very long time. Since the 50s with the [large mainframes](https://en.wikipedia.org/wiki/IBM_305_RAMAC). Now the datacenters have moved and we can rent servers. In this article I will share my approach to building servers for the cloud instead of for the datacenter.

Cloud?
-------
AWS started out as an internal product where Amazon.com developers could request servers to test code on and order it as easily as their customers bought books.
Amazon.com was, and still is, growing at some pace. The Amazon.com website needs servers to grow into and to test with. Selling the spare capacity to external developers, helps Amazon Inc’s bottom line.
Cloud is expensive if you use it in the same way as you would a Datacenter.
Before cloud, I wanted to build a server once, and ensure it stays running. This approach works well if you have skilled server admin and the fixed overhead of a Datacenter. That’s great, but expensive in the cloud.
The cloud providers offer various billing options based on usage. In this way you get a discount for agreeing to reserve and pay for a certain amount of server(s). When I first started using AWS, it didn’t make sense to me why you would use the low or medium options. The three tiers of Reserved Instances allow you to pre-order 8, 16 or 24 hours of compute per day.

{% include image.html
      img="https://neilmillard.com/public/img/heartbeat-pulse-trace.jpg"
      title="Heartbeat pulse"
      caption="Monitoring the services" %}

Monitoring
----------
Cloud services live on the Internet, and this can be a wild place with dangers and failures as mentioned below. To keep informed about the status of the servers and services, monitoring is used.
From the ‘hardware’ CPU, memory used and status of disks, to the ‘software’ services running and installed versions, monitoring can check and verify every aspect of the server and service. This information is then displayed on wall board screens using traffic light red amber green colours, to convey the status of the monitored servers.
This is usually augmented with alerts (email, or instant messaging) for the most critical aspects of the environment or service.

Self HEALING
------------
In my article about [pets vs cattle](https://www.neilmillard.com/2016/10/06/pets-vs-cattle/), I describe the advantages of automating the server build process, so when your server gets sick through failure of a component, bugs in software or is hacked; you can quickly build a new one.
The cloud is always changing, as a result, your servers and services need to ensure they can handle failures.
Disks, networks, up or downstream services can and do fail from time to time. A 1 or 2 second outage can cause no end of havoc if you are not prepared for it.
You are not alone in this quest so there are a range of tools we can use to build deploy and heal servers.
These tools provide the capability to recreate the services and the servers they run on, exactly.

Immutable servers
-----------------
Things change, software changes and [dependencies change](https://www.neilmillard.com/2017/07/12/devops-automating-servers-while-you-sleep/). Being able to create servers and environments on demand, makes it easy to build a new server. This gives the option of building fresh new servers to fresh the software rather than having to run deployment scripts or worse, someone logging into the server and changing/upgrading manually.

{% include image.html
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Genie_Lamps_007.JPG/640px-Genie_Lamps_007.JPG"
      title="Magic Genie lamp"
      caption="Ordering servers from a genie?" %}

Building on demand
------------------
Once you have the tools and code (infrastructure as code) in place to self heal your production servers, why not provide temporary environments. These look almost identical to production that your developers can use.
This is where DevOps comes into the equation. Enabling developers to create their own production like system is ideal for developing and testing their code.
In the database world, providing a full database environment could be too expensive. With self healing, infrastructure as code, and order on demand environments in place, you can provide full development and testing environments on a temporary or transient basis. Shutting them down and destroying the environments when the developers go home or clock off, means you no longer have to pay for something that is not being used.

{% include image.html
      img="https://neilmillard.com/public/img/wackamole.jpg"
      title="Whack a mole"
      caption="Make sure the data comes back" %}

Persisting data
---------------
Particularly when dealing with data and databases, the question of persisting work and data comes up. When designing the self healing and build code, it is important to know what data can be thrown away with the environment and recreated on build, and that data which is unique and needs to be preserved and restored.
Data can be stored in the cloud for later use as anyone with an android or apple phone with pictures will no doubt already use.
Designing the data into the environment build and self healing process will enable testing to continue from where it left off, even if the environment has been destroyed, over the weekend for instance.

Deployments
-----------
In production, due to the transient nature of these on-demand servers, the deployment process can overlap and have two sets of the application servers, with the current blue live servers and the upgraded freshly deployed green servers.
In this way, a blue-green deployment can run tests on the green servers to ensure everything is running as it should be via the monitoring scripts, and the service can be swapped over pointing live traffic and customers at the green servers when ready.
This results in very little downtime, which can be seamless for a production service.

I hope you found this useful. Let me know any queries and questions in the comments.
