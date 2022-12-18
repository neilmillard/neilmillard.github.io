---
layout: post
status: publish
published: true
title: Where to start with cloud security?
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: Cloud. security and then?
tags: [security, devops, ops]
comments: true
crosspost_to_medium: false
---
Security means a couple of things when talking about cloud, so where to start?
{% include image.html
img="/public/img/pirate-ship-attack.jpg"
title="Pirates attacking? https://www.flickr.com/photos/eunavfor/8250044062" %}

For this article I am going to talk about a web facing server hosting a web application.

{% include youtube.html
ref="l_fCbqIQ_Y8"
%}

Where: Ports
=====

Every service on the internet has an address and it is made up of two parts:

Network address:- The IP of TCP/IP. as a user you will not see this, only the hostname. [DNS][DNS] will transform
the hostname to a IPv4 or IPv6 address.

Network port:- Is a number from 1 to 65536. Is the port a service listens on. There are standard ports like 80=http and
443=https

Every network service on your server or container will be listening on a port and is a possible way into your server.
You want to either disable and stop unnecessary services, or use a firewall to block access to them from the internet.

AWS and Azure does this with security groups and GCP with firewall rules.


What: WAF
===

Web Application Firewall is a specific web application that monitors and filters incoming requests against rules to
determine if that request should be sent to your internet service. They can block malicious attacks such as SQL injection
or other specially formulated requests.

Who: User Access
===========

This is a big subject. Broadly speaking you have users and administrators.  The administrators can be split into
application admins and infrastructure admins. The point here, is you do not want unauthorised users accessing admin
functions, and your infrastructure should not be accessible from the internet at all (without going through a VPN).

When: Time locks
============

To further harden access to the application, you can have time locks. For instance a user session should time out and
an admin session should have an even shorter timout before login is required again.

This principle is related to MFA logins. When logging into the system/software, as well as a username and password, the
system is also expecting a short lived security code, to ensure the right person is logging in.

Patches and Dependencies
=====================

If your service is running code not developed by your or your team, can you trust it? Bugs are everywhere humans are.
Should a bug enable unauthorised access, you want to update your server or container or web application as soon as that
bug is fixed. This means regular updates to the server and application dependencies.

I hope that starting with these five areas, you can run secure web application and not get mentioned on [haveibeenpwned][hibp]


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content soon.

Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


[DNS]: {{ site.url }}/2019/01/25/four-steps-automate.html
[hibp]: https://haveibeenpwned.com/
