---
layout: post
status: publish
published: true
title: Avoid unexpected big bills from AWS
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: A short article helping keep Amazon Web Services bill under control.
tags: [aws, cost control, ec2]
comments: true
crosspost_to_medium: false
---
{% include image.html
      img="https://www.neilmillard.com/public/img/burn-money_480.jpg"
      title="Burning Money"
      caption="AWS costs can burn your money" %}

Controlling your costs in an important aspect of any business and project; with cloud projects this is even more important due to the number of decisions that can have a drastic effect on your monthly AWS bill.

The four main areas that will affect your costs are: - unused or forgotten resources, AWS application design, correct sizing of resources, and discount options such as reserved instances.

## Unused resources

Your ongoing battle is going to be with resources that have been created and used for a short while, then left running or allocated to your account.

With the ease of creating resources and human nature, unless managed, these resources can be left and forgotten until someone spots it on the itemised AWS bill.

{% include image.html
      img="https://www.neilmillard.com/public/img/ibm_729_tape_drives_512.jpg"
      title="Old backups?"
      caption="Some old resources don't need to be kept" %}

Fortunately, there are a number of tools you can use to help keep this spend under control. On the billing dashboard of your account, along with a summary and bill information, you can activate Cost Explorer, a tool to explore the current costs incurred on your account.

For offline analysis, reports are available to a selection of AWS services and to pull these together are Cost Allocation Tags.  These enable your team to tag a resource for the purposes of tracking costs.  You could use a Purchase order or project code/name to show up in the reports.

In addition to these tools, you are also able to create alarms via CloudWatch, to alert you when a billing threshold has been breached.

Resources most commonly forgotten are, EC2 instances, Elastic IP addresses that are no longer attached to an instance, unattached EBS volumes, snapshots and RDS instances.

## AWS Application Design
{% include image.html
      img="https://www.neilmillard.com/public/img/bridge-choice_640.jpg"
      title="Choices, one step at a time"
      caption="Choices, one step at a time or continuous" %}
An important aspect of any workload or application you run or plan to run on cloud services is the design of the application and the infrastructure it runs on. This is due to the balance between performance, availability, and cost. Let me demonstrate with two examples.

### EC2 vs Lambda:

Is your microservice designed to run with Lambda? This is where your code is designed to run without provisioning or managing servers and executes only when needed and scales based on demand from a few requests per day to thousands per second?

If your code is written in one of the computer languages that Lambda supports, Node.js, Java, C# or Python for instance, Lambda might be a good choice.  All the power and flexibility, without the need to manage the infrastructure and servers.
The infrastructure you already have may affect your choice and so EC2 might be best. How do you decide?

Like many of AWS services, they build the Lambda service on top of the components available to any of their customers, like EC2 or Elastic Container Service.  They manage the infrastructure so this attracts the management costs as part of your bill.

This billing model can work to your advantage or against you depending on the utilisation of the service.  If you expect a high utilisation level, and have the support staff to look after the infrastructure, it is usually better value to host the service on EC2 instances that your team can provision, configure, and maintain.

The precise level varies per service and a break-even chart can be created.

|---
| EC2 requests per hour	| AWS Lamba Container Function
|:-:|:-:
| 295,000 |	100 ms execution with 128MB
| 64,000	| 200 ms execution with 512MB

In the table, I’ve broken down the number of requests per hour running on an EC2 m4.medium instance that the lambda container specification and function execution time so that each line has an equal cost.

Performance testing of your application microservice and typical workload are needed, so you know how many requests running on an EC2 instance would provide adequate performance.

## Correct sizing of resources

### 9-5 or 24x7
You only pay for what you use so how about no servers running at all?

Many environments exist purely for developers and as such don’t see any activity outside of regular business hours.  With the appropriate level of provisioning automation, whole environments can be switched on fresh in the morning before the teams get ready to work, and decommissioned in the evening after a day’s work.

In a week, there are 168 hours. In a 9 to 5 work week, there are only 40 hours. That is less than 25% of the time. If you only run the servers when you need them you can save 75% of the cost of running them 24x7!

{% include image.html
      img="https://upload.wikimedia.org/wikipedia/commons/7/7c/Graph_WP_extended_growth_2025.gif"
      title="growth and shrinkage"
      caption="Servers available can grow or shrink with demand" %}

### Auto scaling

One of my clients required at least one server to be always available, so scaled the service to a ready workload at 7am and scaled back at 9pm.  During the day, the CPU and memory are monitored and if specific thresholds are met, the server application increased or decreased the number of online servers in the cluster.  Not only did this help increase availability for busy periods of the day, it still providing substantial savings over running a static server farm.

### Caching

Another way to reduce the need for expensive processing servers, is to cache the results and output to ‘edge’ servers.  These servers don’t require the processing power of the main application and therefore are cheaper to run.

{% include image.html
      img="https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg"
      title="reverse proxy cache"
      caption="Proxy servers can cache requests reducing load" %}

These cheaper front end servers handle many of the requests, leaving the expensive (in terms of compute) jobs to the back-end application servers. Delegating the easy content to the edge servers, mean you require less expensive application servers, thus, you save money and increase response times to your users.
Server instance sizing

You don’t have to have the same size server (in terms of compute and memory) which enables appropriate sizing of the server to be deployed, depending on the workload.  As mentioned in the caching section, workloads can be different between the frontend and back end servers, and based on scaling and workload, can enable optimisation of the application performance as well as costs.

Often a greater number of smaller servers, gives you flexibility to follow the workload closely rather than having few larger servers.  Of course, if the demand is relatively static that may suit your application better.

This is where monitoring can show dividends regarding the utilisation of resources such as server CPU and memory, allowing intelligent decisions to be made.

## Reserved resources

AWS provide further billing options to reduce your costs.  If you know roughly what your demand for resources is going to be, you can opt to pre-order vouchers to be used against charges for various AWS resources that will discount the monthly bill in exchange for an upfront commitment for 1 to 3 years.
