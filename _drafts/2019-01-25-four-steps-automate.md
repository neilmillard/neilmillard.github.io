---
layout: post
status: publish
published: false
title: My Four Steps for a successful cloud deployment - Automate
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: Automate repetitive tasks
tags: [automation, application, infrastructure, book, devops, dev, ops]
comments: true
crosspost_to_medium: false
---
Automated infrastructure for your build, test, deployment and operation
----------------

With the infrastructure definitions available as code, the process to deploy the 
infrastructure can use the same methodology as the developers, to build, test and deploy 
using pipelines. This does mean the tests have to be written with the infrastructure code, 
but once this is done it gives a massive safety net for the team: great tests mean more 
reliable code and more reliable operations.  

In this way the infrastructure code can be tested in the same way as the application code. 
Developers in the same team as DevOps enables this close circuit of testing and feedback, 
providing faster and shorter deployments through automation.

For this to work best DevOps needs an infrastructure development environment. This enables 
build and testing of infrastructure code without getting in the way of the developers.
Nothing tests code like deployments, so once the infrastructure tests have been completed 
successfully a deployment as often as you can should occur. In one team I with, the four 
development environments (including the DevOps environment) included the same code (with 
different versions) which rippled through each morning.

Every day the environments would be built by a continuous deployment pipeline in Jenkins 
with the infrastructure and developer code. This enabled massive confidence in the code by 
the time it reached pre-production and live.

Alongside any new features and services was a test to ensure it worked as planned, as well 
as further tests to monitor the application behaviour and status as it was running. An 
essential part of deployment is operations. It’s at this step that monitoring of the 
servers, services and applications gives peace of mind that all is okay, or in the event 
of a failure, a quick and precise clue as to what component has failed. Just another fast 
feedback loop for improvement.

Having a dashboard with coloured boxes and graphs to show status and performance is a great 
thing for the work area – and for everyone to see and keep an eye on. Anything red on the 
dashboard will get attention by the team long before any symptoms show in the application 
itself. This is partly due to the fault tolerance built into the servers and the 
application, and partly for the users to notice.

As an aid to diagnosing performance issues, save application log information to a file or 
output stream. This valuable information needs to be stored safely, and since we’re 
operating in a disposable environment, somewhere other than the server the application is 
running on. The popular ELK or Elastic stack will certainly help. Not only does it store 
logs efficiently, more importantly, it allows for the easy searching and interrogation of 
those logs.

No deployment would be complete without a way for users to find the service they need. In 
a microservice application, there can be many such moving parts. Service discovery is the 
technology used to track where these parts are so the application or users can find the 
relevant pieces. DNS can perform this task, but as mentioned earlier, Consul may well be 
best for your systems.

It’s worth mentioning Docker™ at this point. Using this tool simplifies the development 
and deployment of software components by wrapping them up in a self-sufficient unit, which 
enables the deployment to be as easy for production as it is for any other environment on 
its path through testing. Be wary of local data in the Docker container though, and as for 
any Cloud application, local data is discouraged.

Next: Scale
