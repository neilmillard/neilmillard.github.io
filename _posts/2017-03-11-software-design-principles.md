---
layout: post
status: publish
published: true
title: software design principles according to Neil Millard and John Romero
author_login: neil
author_email: neil@neilmillard.com
categories: [Development]
description: John Romero talks at GDC Europe about id software and is design and programming principles and Neil shares two of his own about Infrastructure as Code
tags: [software development, principles, agile]
comments: true
---
This week ' I've been mainly checking ' [Infrastructure As Code](https://en.wikipedia.org/wiki/Infrastructure_as_Code), IAC for a new mongodb cluster. One of my design and implementation principles states:
* only pay for the server, when your team needs it

This means building the server via an automated job (Jenkins) to build the cluster from the IAC in the morning and destroy it (after a suitable data recovery is in place) in the evening.
As bugs are found in the server build and deployment code, new versions of the code are released. In this particular case it was the code need to secure user traffic and authentication.  
It was a new cluster, however an old chunk of the IAC was copied (yeah, root cause, copy and paste), with the assumption that it was working. 2nd principle
* don't assume you are running the latest code, check

In addition to these 2 principles, following an talk by John Romero at GDC Europe last year, he talked about development of the game classic Doom.   
![Gamers focused on screens playing Overwatch](https://upload.wikimedia.org/wikipedia/commons/2/25/Overwatch_(28943036252).jpg)
id software was formed in 1st Feb 1991 by John Romero, John Carmack, Adrian Carmack (no relation to John)and Tom Hall. 
In the first year they created 12 games. During this year, id software were able to create games quickly  due to each of them having 10 years of intense game development and several principles.  
Even though these principles are specific to game development, a lot of these principles apply to any software development.  
* No prototypes. Just make the game. Polish as you go. Don't depend on polish happening later. Always maintain constantly shippable code.
* It's incredibly important that your game can always be run by your team. Bulletproof your engine by providing defaults upon load failure.
* Keep your code absolutely simple. Keep looking at your functions and figure out how you can simplify further.
* Great tools help make great games. Spend as much time on tools as possible.
* We are our own best testing team and should never allow anyone else to experience bugs or see the game crash. Don't waste others' time. Test thoroughly before checking in your code.
* As soon as you see a bug, you fix it. Do not continue on. If you don't fix your bugs your new code will be built on a buggy codebase and ensure an unstable foundation.
* Use a superior system to development system than your target.
* Write your code for this game only - not for a future game. You're going to be writing new code later because you'll be smarter.
* Encapsulate functionality to ensure design consistency. This minimises mistakes and saves design time.
* ![Scrum Team Standup](https://upload.wikimedia.org/wikipedia/commons/4/4a/Daily_sprint_meeting.jpg)
Try to code transparently. Tell your lead and peers exactly how you are going to solve your current task and get feedback and advice. Do not treat game programming like each coder is a black box. The project could go off the rails and cause delays.
* Programming is a creative art form based on logic. Every programmer is different and will code differently. It's the output that matters.

These principles are very similar to the [agile principles](http://agilemanifesto.org/principles.html) and it is important not to overlook culture and values, as these give the team the reason why, that internal motivation.

What rules/principles does you or your team find invaluable?
