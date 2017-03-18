---
layout: post
status: publish
published: true
title: persistent data for docker and the cloud
author_login: neil
author_email: neil@neilmillard.com
categories: [infrastructure]
description: Data, non-persistent vs persistent and how to make data available in temporary environments
tags: [cloud computing, cloud expert, virtualisation]
comments: true
---
There are two types of data when we talk about computing, non-persistent or temporary data, and persistent data.  
Temporary data has a sliding scale also, 
a random number for a decision in an online game; required but lasts less than a second,
a session ID for tracking your login details on a website; usually lasts for the length of that session, upto about 30-45 minutes, 
the contents of a shopping basket at an online shop; amazon keeps this for days, even years.  
If any of these are lost, it isn't much hardship and new data can be quickly recreated.  
Persistent data is intended to have a much longer life and is usually difficult to regenerate,  
Banking transactions,  
Customer records in a Customer Relationship System (CRM),
Your photos uploaded to cloud storage.

This has an obvious impact on the immutable server pattern, where the life of a server is short, a server is deployed, and when it is not required or some configuration or software update occurs, a new one is deployed and the old one is destroyed (Blue/Green deployment).
The first question I am usually asked when I describe this pattern is, what about the data? Where does it go or come from? This is especially relavent when I use 9-5 servers. They don't exists at all outside business hours.


