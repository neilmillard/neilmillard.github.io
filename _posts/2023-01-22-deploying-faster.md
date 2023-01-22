---
layout: post
status: publish
published: true
title: How DevOps can help deploy faster
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: I explain how to deploy more often
tags: [devops, developer]
comments: true
crosspost_to_medium: false
---
A sign of Maturity in some DevOps and Agile models, improving deployment throughput.
{% include image.html
img="/public/img/Agile-Maturity-Model3.jpg"
url="https://www.equalexperts.com/blog/our-thinking/welcome-to-the-worlds-simplest-agile-maturity-model/"
caption="Equal Experts Deploy Faster" %}

More frequent deployments, but how?
==========

New features and bug fixes are worthless until they are deployed to production. Getting that new code through the
quality gates and on to production servers, realises that value. Releasing and Deploying code more frequently, reduces
the time from code to use. What are the 6 areas you can look at to improve the deploys per week (yes, perhaps even
daily).

1. Manual Checks - Automation can take you so far, but often business processes have manual checks or Gates. Often a
relic of legacy COTS (Customised Off The Shelf) software, where a rollback MUST be in place for failures. These gates
should be removed where possible and manual approvals must be streamlined.
2. Testing - Part of the DevOps diagram is a loop that includes build, test and deploy. Often Testing is a manual step
despite great automation testing software being available. By automating testing, you can speed up this testing phase
and with enough tests, be confident that what is being deployed (to test environments) will work just as well in
production environments.
3. Continuous Deployment - The CD in CI/CD stands for continuous delivery, but in many organisations, deployment to
production is still a manual step. Is this a lack of confidence in the stages before? That is where the previous stage
of Testing is extremely important. With trust in the tests, lets automate all deployments, even to production.
4. Trust Developers - Crazy I know, but trust your staff. They got hired for their knowledge and experience. This
extends far above programming. By curating their knowledge of tools and processes, and engaging with and encouraging
the sharing of ideas, the toolset can be added/removed and enhanced. Improving the Developer eXperience helps not only
retain staff, but boosts productivity and happiness.
5. Platform Engineering - Automation is an ideal in DevOps, so with this we can automate. This means many processes
that go "cross team", can also be automated and put into a portal experience where your teams can Self Serve. APIs are
popular for this, as developers can effectively solve their own issues and cases by having control over the process
via an API or portal/console. When dealing with cloud providers, could you image the slow speed of delivery if a ticket
was raised when a new VM is requested? APIs automate this.
6. You build it, You run it - By having full control between Developers and Operations (DevOps), empowering the developers
to see exactly what is going on during a build, test and deployment process. The knowledge to fix any issues as they
arise and increase the success rate of deployments. For more see [You Build It You Run It][ybiyri].

Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[ybiyri]: https://www.equalexperts.com/our-services/deliver/you-build-it-you-run-it/
