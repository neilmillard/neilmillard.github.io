---
layout: post
status: publish
published: true
title: Getting servers to build themselves in AWS
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: Anyone can start an EC2 instance, but getting it ready to work?
tags: [automation, dependencies, AWS,]
comments: true
crosspost_to_medium: false
---
I was asked to speak at an event, [Expert Talks, in Manchester](https://www.meetup.com/ExpertTalks-Manchester/).  This was originally scheduled before the summer break, but some [football event](https://en.wikipedia.org/wiki/England_at_the_FIFA_World_Cup#2018_Finals) was happening on the some night.  

In the talk I share my four steps to running an application in the cloud.  
* Cloud first Application
* Automation
* Scaling for flexible workloads
* Keeping the data safe

Someone once said to me 'Anyone can spin up a server in AWS', that is true. But it usually takes a bit of work to get that server to work for you.

Either some serious setup and automation before the button is clicked, or a lot of manual work after it is up and running.

The main problem with the latter manual work, is the fact that cheap cloud based servers WILL fail. You must be ready for that.
By automating the steps, server build and setup of the server, when it fails, it can recover itself.

{% include image.html
      img="http://www.neilmillard.com/public/img/decorating.jpg"
      title="decorating_cake"
      caption="To bake or finish" %}
      
As I have written before on this blog, I subscribe to the cattle and short lived immutable server model.
This means after identifying the smallest component practical, building code that in turn builds your servers, to be short-lived 
and immutable. They don't change for the short (hours or days) time period they are working.  
This concept is very similar to docker containers, every setup ready to go in seconds, and therefore easy to replace.

The automation steps are broken into two phases:-
* Golden image - A disk image containing all the operating system and applications required by the server.
* Boot configuration - The first bit of code run by the server, used to configure the applications just.

The exact split of the tasks between these two is sometimes hotly debated. To bake or to configure.

The advantage of baking into the golden image, is faster boot time, but this is at the expense of configuration and updates when it needs to change.

Therefore the advantage of the boot configuration handling software install and config, is the ease at which it can change, vs the boot up time.

You can find the slides on slideshare
{% include image.html
      img="http://www.neilmillard.com/public/img/getting-servers-to-build-themselves-on-aws-1-638.jpg"
      title="slides on slideshare"
      url="https://www.slideshare.net/neilmillard/getting-servers-to-build-themselves-on-aws"
      caption="Getting server to build themselves - slides" %}
      

