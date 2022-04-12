---
layout: post
status: publish
published: true
title: Platform As A Service?
author_email: neil@neilmillard.com
categories: [Infrastructure, Development]
description: Would your developers benefit from a Platform?
tags: [automation, devops, immutable, ops]
comments: true
crosspost_to_medium: false
---
There are a few well known platforms that offer a service to developers. Deployment without servers!
{% include image.html
img="https://c.pxhere.com/photos/82/8f/datacenter_servers_computers-1241325.jpg!d"
title="Do we need Servers" %}

[Heroku](https://www.heroku.com/) was one of the first, created in 2007 and bought by Salesforce.
[Google App Engine](https://cloud.google.com/appengine) arrived in 2008.
[AWS Lambda](https://aws.amazon.com/lambda/) created by AWS in 2014 baked by their [Elastic Compute Cloud](https://en.wikipedia.org/wiki/Amazon_Elastic_Compute_Cloud).

But what is a Platform?
They provide an easy way for code to execute, hiding the complexity of server provisioning and maintenance.
It is normal to have an opinionated workspace environment for the application to run in.

This can be a limit on the language the program or app must be written in, but a trade off gives cleaner deployments.

Naturally there are still servers involved, but the time needed to create and manage these is built into the price you pay
for the resources running your application.

This does mean that it can appear expensive compared to Infrastructure, but the total cost of ownership should include time to look after this stuff.
For instance, paying for AWS Lambda at scale is more expensive that the EC2 instances by a long way. There are of course payment structures
that can reduce this bill (AWS Billing fun), but it might still be worth it to not have the server maintenance issues.

Do you need a platform of your own, or just a team of infrastructure guys enabling self-service to your developer teams?

One of my customers runs over 900 microservices on AWS. They have invested in building a platform team.
This is a dedicated team of engineers to build and run their platform, inspired by Heroku, and utilising Lambda and ECS (Elastic Container Service)

Alternatively, in DevOps style, another customer has several developer teams including infrastructure knowledge, working as a cross discipline team.

So in summary, it depends. For a quick start, it might be the way to go with an established PaaS listed above. But you might be paying for features you don't need.

If you want to know more, [contact my team](/contact/index.html) or check out my [book](/book/index.html).

