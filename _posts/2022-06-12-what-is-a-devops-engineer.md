---
layout: post
status: publish
published: true
title: DevOps Engineer?
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: What does a DevOps Engineer do?
tags: [automation, devops, immutable, ops]
comments: true
crosspost_to_medium: false
---
I am often asked, what does a devops engineer do?
{% include image.html
img="/public/img/devops-office-612x612.jpg"
title="Working DevOps engineers" %}

TLDR;
Everything, seriously.

The main roles of a typical DevOps engineer can be broken into a couple of roles/responsibilities.
## Servers:
The most obvious is looking after servers, networks and storage. This can include firewalls, Infrastructure as Code,
managing a Content Delivery Network, building server images, and general server administration.
This is what most people think of when they describe the Ops in DevOps.
Other names for this role can be SysAdmin, Infrastructure engineer, Server engineer or DataCentre engineer.

## Programming:
The Dev in DevOps is programming. In a DevOps role it isn't usually frontend or backend, but it can be if the team is
small.
Writing helper tools, or building an API for the platform will exercise the programming muscles.
Infrastructure as code is close to programming, so the skills and foundations are required.

## Infrastructure as Code:
As part of defining the application environment, it needs to be configured too.
This involves writing files containing definitions or statement in a configuration language, like HCL or YAML.
The two best known tools in this area are Ansible and Terraform.  In recent times these two tools are getting closer,
and even at the point of overlap.  Whilst not strictly programming, those skills are useful here.

## Soft Skills:
AKA talking to humans
Discussing ideas and processes with the dedicated developers about how their creation can play
at its best with the server environment.
Let me give you an example:
The website needs to scale up, but when it is deployed to 2 servers, it works erratically. This is due to external
factors to the webserver, such as load balancers and databases, where the application needs to be aware of these
things so it can act accordingly.

## Automation:
The main reasons a team would want to adopt DevOps is usually closer colaboration between teams, specifically
Developers and SysAdmins, and automation.
There are time and cost savings to be had, and automation is the answer.
Some parts of the Software development cycle are boring, and automation can take these chores and simplify them.
This is called the CI/CD section of the beast. Let a Developer check in code, they system then tests and deploys it.
Other parts of the platform can be automated in the form of tools, mentioned earlier.

## Testing:
A vital part of the Automation piece is testing, to ensure that only tested and working code makes it to live servers.
If you can trust your testing and automation, you can deploy code as often as you like, and you just need to keep
an eye on a dashboard. Automated testing is a must, and there are a few testing frameworks to help achieve this, at
a unit level and integration level, removing the need for most of the human interaction.

## Security:
As ever, the internet wild west is a dangerous place to live. The web servers have to survive in this most hostile place.
From simple Denial of Service (DOS) attacks, to systems actively trying to brute force passwords, the servers and code
need to be secure, and with the help of vulnerability services, the app and code can be tested through the
automation and deployment steps.
The servers too need to be secure, with the latest patches to ensure that only authorised personnel can have access.

## Platform:
I've mentioned platform several times, and I am talking about the services teams need to support the web server and
application once deployed.
Things such as logs, metrics and dashboards, as well as alarms for when things aren't within safe parameters.
Telemetry can be a role in itself if you are running your own Elastic (ELK) cluster. However this can be outsourced by
using tools from AWS and new Relic.


So there you have it, a lot of roles for a DevOps engineer.  Let me point out that it is rare to have to perform all
these tasks. Some just need to be managed, if you use an external provider for instance. Some organisations have
dedicated teams for each role.

Hope you have found this useful, if you want to know more, [contact my team](/contact/index.html) or check out my [book](/book/index.html).

