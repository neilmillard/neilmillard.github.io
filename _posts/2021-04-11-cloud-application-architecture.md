---
layout: post
status: publish
published: true
title: What does cloud application architecture look like?
author_email: neil@neilmillard.com
categories:
  - Infrastructure
description: 3 tier architecture in the cloud.
tags:
  - automation
  - devops
  - immutable
  - ops
comments: true
crosspost_to_medium: false
date: '2021-04-11 13:00:00 +0000'
---
Secure, fast and valuable web applications share a similar architecture.
You have a [MVP](/glossary/index.html#MVP) and now need to scale and grow, to profitability.
{% include image.html
img="/public/img/cloud-application-architecture.png"
title="Cloud app architecture" %}

You should be following the guidance of [12 factor apps](/2021/04/09/is-12-factor-still-relevant.html) for your code
base, but what about the [platform](/glossary/index.html#Platform) Hosting your application?

## Presentation Layer
### **Mobile App**
If you are developing a mobile first Application, you will have an App on Apple and Android. This may not be the
[MVP](/glossary/index.html#MVP) as that can be achieved with web page or simple website. This acts as the main interface
your uses have with your service.

### **Cache**
An application needs to be able to scale for your customers and be secure against failure and hackers.
This means having a fast caching layer, for quick page loading and protection against [dDOS](/glossary/index.html#dDOS)
attacks. You can skip this in the early stages of scaling.

### **Web Frontend**
This is the frontend, what the end user sees or perhaps it is the [API](/glossary/index.html#API) for a mobile App. It usually
serves images, css files, other static content, in addition to html pages, which may be static or dynamically generated.
The front end scales depending on how many users are accessing the service at any particular time. Web servers are tuned
to serve mostly static content and to [scale](/glossary/index.html#Scaling) horizontally quickly.

## Business Domain
**Business Backend**
This layer is always behind a [firewall](/glossary/index.html#Firewall) and never exposed directly to the internet.
To access it, any user is requesting a page from the front layer, and that queries the business layer. This is where the
data processing occurs, adding information to the database, retrieving and manipulating data from the database, and
scheduled or deferred tasks and jobs are run. This layer is scaled based on peak user times and batch processing. They
are usually bigger (scaled up) servers to provide greater computing power.
It can be one or many microservices, and the tasks could be configured in [docker](/glossary/index.html#Docker) using
[ECS](/glossary/index.html#ECS) or serverless architecture and utilise AWS [Lambda](/glossary/index.html#Lambda).

## Database Access Layer
Like the business layer, this is never has direct Internet access. The only thing you want accessing the DAL are
business backends. If the Web Frontend (either a layer or a third party, mobile App or API) accesses
the database, so can hackers.
This is where the all important data is held.

### **Database**
A [Database](/glossary/index.html#Database) holds persistent information that your application
needs in order to provide the service you are offering. It is the product listings, the orders, the customer data.
It can be reported on (from the business or report layer) to provide insights to improve or provide
[KPIs](/glossary/index.html#KPI) to the business.

### **Enterprise Service Bus**
An [Enterprise Service Bus](/glossary/index.html#ESB) provides links to other data systems within an organisation.
This can include other microservices, business backends calling other business backends, Data Lakes, and links to
third party APIs hosted by business partners.

## Want to find out more?
Please [contact me](/contact/index.html) if you want to discuss your platform and how your business can scale to the next level.


