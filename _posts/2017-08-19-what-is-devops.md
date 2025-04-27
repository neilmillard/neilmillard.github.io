---
layout: post
status: publish
published: true
title: What is devops?
author_login: neil
author_email: neil@neilmillard.com
categories:
  - Infrastructure
  - Development
description: What does it mean to be a DevOps engineer.
tags:
  - automation
  - product
  - devops
  - job
  - dev
  - ops
comments: true
crosspost_to_medium: false
date: '2017-08-19 13:00:00 +0000'
---
{% include image.html
      img="https://www.neilmillard.com/public/img/devopsvenn.jpg"
      title="DevOps Venn"
      caption="DevOps Culture and Business" %}

I am often asked what do I do?
------------------------------
Until recently I didn’t have a clear way of describing my product / service of my role as a DevOps dude.

After a pitch I presented at [#Pitchfest](https://twitter.com/search?q=%23pitchfest) as part of the [Key Person of Influence](https://www.keypersonofinfluence.com/aff/uk/?p=a3987&w=scorecard) programme, I received some feedback that annoyed me a bit. This just means that I didn’t describe what I do well enough.

As a techie, I know that [communication is a key skill](https://www.computerweekly.com/feature/Communication-becomes-a-key-skill-for-techies).
While I'm improving, it doesn’t come as a surprise, that people often leave interactions with me, with a feeling of confusion.
I try to use common situations to describe things, but this does rely on me knowing what situations to use with each person.
This approach doesn’t work with a larger audience.

I’m about to share my description of what I create, and I’d like feedback below to improve and clarify the communication.

DevOps has 3 core ideas:
------------------------
[from reddit]( https://www.reddit.com/r/devops/comments/6u53wx/am_i_correct_in_my_understanding_of_devops/)
<a href="https://turnoff.us/geek/devops-explained/"><img align="right" alt="Devops Explained" src="https://www.neilmillard.com/public/img/devops-explained.png"></a>
1) Dev and Ops work together. No more "throwing code over the wall". This means that Devs learn what Ops does all day, and even that Devs are on call for some parts of the system. (If only Ops is on call, there will be perverse incentives.)

2) Ops needs to get better tools and automate all the things. That means Ops must learn to program. (Including all the associated bits like tests, version control, CI systems for system tools, etc).

3) Devs need to understand the stack their code will run on and build shared empathy for the Ops people supporting their code (if it's not the devs themselves). Monitoring, High Availability, Scalability, Statelessness (where possible) should be thought about from the start.

Neither of these ideas requires someone to "move over" into the other group. Some rotation thru the other group may be useful, but it's also perfectly fine if the two groups just talk a lot. As long as they work as a team instead of 2 different departmental silos.

I have an Ops background (working with servers and networks), and also have some Dev skills (know how to program). This means I have the knowledge and experience lead and mentor other Ops guys.

What I do?
----------
I provide easy to use services that enable any member of your organisation to build and deploy an application that uses servers and the Internet.

This means I provide three main things;

1) An easy to use interface to allow Developers to ask for [freshly built servers](https://www.neilmillard.com/tags/#immutable) in the cloud and get what you want; as easy as ordering a book from Amazon.

2) When your server is created, it is ready to be used as quickly as possible; the software and more importantly, [your data is available from where you left off](https://www.neilmillard.com/2017/03/18/persistent-data-docker-and-cloud/).
In the case of a multi server deployment, all servers’ data is synchronised.

{% include image.html
      img="https://www.neilmillard.com/public/img/640px-Car_wheel_change_in_desert.jpg"
      title="Repairing Tyre in desert"
      caption="Coping with failures" %}

3) Running servers in the cloud means your service must be able to cope with errors and failures; ensuring the service continues to function despite components failing is part of the design and deployment.
The additional benefit of this, means you can destroy the deployment when you’ve finished using it for the day, and it can be brought to life again when you wish.

What does this mean?
--------------------
Let me leave you with this thought.
For me this is all about empowerment.
Providing knowledge to Developers (Devs) and to Cloud Operations (Ops) so they can work together.
Being able to make decisions and make a difference with what you do.
This relies on a high level of team communication at regular intervals, so we know where the bottlenecks we face are.
Working together we can share how we can use our own skills and knowledge to help everyone in the team.

