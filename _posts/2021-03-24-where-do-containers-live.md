---
layout: post
status: publish
published: true
title: What keeps the containers safe?
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: Your application is in a container, what is the container in?
tags: [automation, application, infrastructure, product, devops, dev, ops]
comments: true
---
When you think you are safe because everything is a container, but you forgot to make sure that the things that
runs your container need TLC as well
{% include image.html
img="/public/img/stuck-container-ship.jpg"
title="Containers are a bit stuck" %}
[Stranded container ship, BBC News 24th March 2021](https://www.bbc.co.uk/news/world-middle-east-56505413)
Containers are great for easy deployment of applications and microservices, but the containers still need a server to
run from. AWS Fargate can solve the management of EC2 Host instance by providing a managed home for your containers.

What happens when it is time to move to your own Virtual Servers? They need maintenance too. I advocate short running
servers to host containers too.  At my biggest client (over 900 containers in one production environment), we replace
or recycle the container hosts at least once per week. This ensures they are running the latest security updates and
support code (logs have got to be saved too) to ensure smooth running of the containers that rely on them.

Dependencies all the way down, and remember, keep the data safe.


