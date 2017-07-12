---
layout: post
status: publish
published: true
title: Automating servers while you sleep
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: The morning in the life of a DevOps engineer.
tags: [automation, dependencies]
comments: true
crosspost_to_medium: true
---
On a daily basis, my code runs to build multiple environments for the database warehouse project.
The dev side of DevOps is about the role of creating and testing the automation processes.  

As the cloud, AWS in this case, gives us flexibility to run servers on demand and charge by the hour,
my client saves money by only having the servers operational during the hours that the development teams
are in the office.  

{% include image.html
      img="http://www.neilmillard.com/public/img/cloudy-sunrise_640.jpg"
      title="Early start for the servers"
      caption="Sunrise start for the automation" %}
      
So the servers are ready to do their stuff, the automation to create them starts early in the morning,
around 5-6am. I am usually in the land of nod, cosy and warm in my bed at that time of the morning.
The joy of automation.  

My day starts at 8am to check the automation has worked as planned. This is the ops side of DevOps. Monitoring comes into play to easily check this stuff. A wallboard full of green is a great sight every morning.

As with any system that relies on the internet, stuff changes. Dependencies in the build, downloading packages, and other links to the internet, can create build failures
when something changes.  

{% include image.html
      img="http://www.neilmillard.com/public/img/chain-break_640.png"
      title="Broken Chain"
      caption="Dependencies can break your code" %}
      
These don't happen often, but when they do, someone in the team has to identify what has changed and rectify
this to ensure the environments are active and ready for work by the time the office is bustling with staff.

With all the systems, servers and application running and serving, I can get to the Development tasks of the day.

We are starting a programme all about Devops, to find out more, follow the [Devops link](http://devops.neilmillard.com/?source=blog20170712)
