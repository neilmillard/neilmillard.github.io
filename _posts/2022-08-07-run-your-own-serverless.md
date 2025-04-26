---
layout: post
status: publish
published: true
title: Run your own serverless
author_email: neil@neilmillard.com
categories:
  - DevOps
  - Infrastructure
description: >-
  What is serverless, and what does it take to run a platform with a serverless
  product
tags:
  - devops
  - serverless
  - lambda
  - aws
  - heroku
  - developer experience
comments: true
crosspost_to_medium: false
date: '2022-08-07 13:00:00 +0000'
---
Serverless has been a hot topic for a while, but really it has been available to developers for ages.
What is it? Where is it? and can you work without it?
{% include image.html
img="/public/img/servers-travolta.png"
title="Serverless has servers" %}

What is serverless?
==============
A developer platform where you do not specify servers, just the dependencies. Sometimes referred to as
Platform as a service (PaaS)

This enables customers to provision, run and manage a bundle, without managing infrastructure.

What that really means is your application microservice is bundled with a configuration file within or nearby.
This config file specifies the environment your code expects to run it.

Specifications such as:-
* amount of CPU
* amount of Memory
* core dependency, such as Programming language

There is usually some sort of environment boot file, so the program dependencies can be loaded with manager.
In Heroku this is specified in the repo by the [`Procfile`][heroku-profile]

```yaml
web: gunicorn gettingstarted.wsgi
```

In this example, the `Profile` specifies a `web` worker (one that response to web requests). There are other types for
backend type workers.
This is then deployed via Heroku cli and `git`. The Heroku platform will provision and deploy it.


For an AWS example, lets look at one specified in AWS Lambda.

In this scenario, we define the code as a Lambda Function.
We need three things:
* a Zip with the code in it
* specify the runtime, Python 3.9 for example
* the function name to call with the event payload

These are then triggered by events. For a web application, a web request via AWS API Gateway.
{% include image.html
img="/public/img/Lambda-WebApplication.png"
title="Serverless might be complicated" %}

Is it really that old?
================
The first platform available was [Zimki][wiki-paas] in 2006. This developer experience has been emulated many times.


| platform                       | Founded | HQ            |
|--------------------------------|---------|---------------|
| [Cloud Foundry][cloud-foundry] | 2011    | VMWare        |
| [Heroku][wiki-heroku]          | 2007    | San Francisco |
| [Platform.sh][platform.sh]     | 2010    | Paris         |


Can I run a serverless service?
===============
Of course serverless just means someone is looking after the infrastructure and servers, just not the developers.

If you are looking after a Docker service, then you could call that serverless. After all you don't really care about
the servers, as long as they can run Docker.

So in summary, Serverless is about the experience of the user. From the simple Heroku, to the slightly more involved AWS Lambda.

I would love to hear about the environments you look after, let me know. You can find me on [Slack]({{site.data.slack.invite}}).


[heroku-profile]: https://devcenter.heroku.com/articles/procfile
[wiki-heroku]: https://en.wikipedia.org/wiki/Heroku
[wiki-paas]: https://en.wikipedia.org/wiki/Platform_as_a_service#Development_and_uses
[cloud-foundry]: https://en.wikipedia.org/wiki/Cloud_Foundry
[platform.sh]: https://www.linkedin.com/company/platformsh/
