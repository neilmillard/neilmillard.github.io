---
layout: post
status: publish
published: true
title: Is 12 factor still relevant?
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: 12 things your cloud app should do and have.
tags: [automation, devops, immutable, ops]
comments: true
crosspost_to_medium: false
---
In 2011 [Adam Wiggins](https://adamwiggins.com/) created [12factor](https://12factor.net/).
It describes the 12 factors modern applications should have.
{% include image.html
img="/public/img/concurrency.png"
title="Concurrency enables scaling" %}

Based on these 12 Factors, he went on to co-found [Heroku](https://www.heroku.com/) a platform to easily host applications.

But what are these 12 factors?
They describe where the code and configuration is stored, how dependencies should be defined and the processes that
should be followed during development, testing and deployment.

1. Codebase - One codebase tracked in revision control, many deploys
2. Dependencies - Explicitly declare and isolate dependencies
3. Config - Store config in the environment
4. Backing services - Treat backing services as attached resources
5. Build, release, run - Strictly separate build and run stages
6. Processes - Execute the app as one or more stateless processes
7. Port binding - Export services via port binding
8. Concurrency - Scale out via the process model
9. Disposability - Maximize robustness with fast startup and graceful shutdown
10. Dev/prod parity - Keep development, staging, and production as similar as possible
11. Logs  - Treat logs as event streams
12. Admin processes - Run admin/management tasks as one-off processes

Fast forwarding to today, they look very similar in nature to serverless architecture programs. Stateless, fast startup
and shutdown. One hit runs for admin tasks. Ensuring the tasks can scale by running concurrently.

So in short, yes they are still the founding principles for all robust, scalable and responsive applications.

