---
layout: post
status: publish
published: true
title: What is GitOps?
author_email: neil@neilmillard.com
categories:
  - Platform
  - Development
description: GitOps and how to get started
tags:
  - devops
  - developer
comments: true
crosspost_to_medium: false
date: '2023-02-05 13:00:00 +0000'
---
GitOps focuses on using Git as a source of truth for changes to your system.
{% include image.html
img="/public/img/change-ahead-sign.jpg"
url="https://pixy.org/763757/"
caption="GitOps, Change Ahead" %}

Vs Devops?
==========
DevOps encourages the collaboration between Ops and Dev teams. In practice, it has a focus on self-service and automation.

Given that source code and Infrastructure as code often live in [Git][git] repositories, GitOps proposes that it is
what is in the repository as the source of truth. For this to be true though, we must action any changes to the code as
soon a practical.

Automation
========
Getting the Desired State to the Actual state is automatically processed through Automation.
Any Infrastructure as code or configuration files held in a Git Repo, must therefore be the truth, or at least treated
as the desired state of things. To do this, GitOps usually employs automation and pipelines to act on the configuration
as soon as the code is committed to the default or `main` branch.

Examples
======
We employ several pipelines to act upon configuration.

i) Machine Images: As soon code hits a branch in a PR, an image is built and tested. Tools for this include [packer][packer],
[puppet][puppet] or [ansible][ansible], and [test kitchen][kitchen]. Odd to bring a [chef] tool into the mix, but there you are.

Our pipeline builds the base image using packer, running ansible for the role configuration management, and runs tests
against the image with test kitchen. If the commit is on the `main` branch, then the resultant image is tagged and
shared across accounts, to become the new default for that role.

ii) Infrastructure: The code review process include a series of tests to check for static errors and code planning.
Our IaC is mostly written in [Terraform][terraform] with a bit of [terratest][terratest]. This GitOps driven pipeline
also `terraform apply` the code when running from `main` to ensure the Git source of truth is indeed what the
infrastructure looks like.

iii) Microservices: Likewise the pattern continues into the Developer domain, with their submitted and peer reviewed
source code getting brought into a build, test and deploy pipeline. The code being deployed is tagged to a version
in the repository, so `main` isn't necessarily what is deployed to live. The pipeline often deploys to pre production
environments, awaiting the human process of change control before hitting Production. In a smaller or startup setup,
you may have the CI/CD Pipeline compile, test and deploy to all environments, with the caveat that the preproduction
deployments should successfully deploy first.

Conclusion
========
The golden thread through all of these examples, is the automation of deployment. The code is committed to a Git
repository, which is read and checked before deploying to production, in an automatic pipeline, triggered by the commit.

Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[git]: https://git-scm.com/
[packer]: https://www.packer.io/
[puppet]: hhttps://www.puppet.com/
[ansible]: https://www.ansible.com/
[kitchen]: https://docs.chef.io/workstation/kitchen/
[chef]: https://www.chef.io/
[terraform]: https://www.terraform.io/
[terratest]: https://terratest.gruntwork.io/
