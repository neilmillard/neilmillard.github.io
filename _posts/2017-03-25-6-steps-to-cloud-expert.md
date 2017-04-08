---
layout: post
status: publish
published: true
title: 6 steps to becoming a cloud expert
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: 6 steps to help you become a cloud expert
tags: [cloud computing, cloud expert, virtualisation]
comments: true
crosspost_to_medium: false
---
Though the cloud means different things to different people, as a basic concept, it’s really very simple. 
Instead of storing data and running applications on your home or work computer, it’s stored and processed on remote machines that are accessed via the Internet. 
This alternative method of computing has spawned a variety of new concepts, technologies and services, some of which have made their cross back into the in-house environment in the form of private clouds.

There are three main categories of cloud computing services: 
* Infrastructure as a Service (IaaS)
* Platform as a Service (PaaS)
* Software as a Service (SaaS)

![Cloud_computing](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cloud_computing.svg/2000px-Cloud_computing.svg.png)

We will focus on IaaS, where you purchase raw compute, servers, storage and other on-demand cloud services and manage those resources yourself.

1. Master the cloud concepts  
   The DevOps and Cloud engineering community centres around a few concepts.   
   * Virtualisation - One of the core cloud drivers has been virtualisation* of servers allowing many servers to share a piece of hardware. [VMWare Workstation](http://www.vmware.com/uk/products/workstation.html) or [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads). Downloading the latest version of [Vagrant](https://www.vagrantup.com/) allows you to setup development servers to learn with. (* the UK english spelling in this case)
   * Infrastructure as Code - This is where the Infrastructure is defined in configuration and files, and read using a tool such as [Terraform](https://www.terraform.io/) which builds an environment of servers to build out a service stack. [Networking](https://en.wikipedia.org/wiki/Internet_protocol_suite) and [security principles](https://en.wikipedia.org/wiki/Internet_security) are also very important here. See [AWS Cloudformation](https://aws.amazon.com/cloudformation/)
   * Build Automation - Much of giving the developers an environment they can use and deliver through involves a tool or automation workflow. Continuous Integration/Continuous Deployment services are important. See [Jenkins](https://jenkins.io/) or [TeamCity](https://www.jetbrains.com/teamcity/).
   * Source Control - [Git](https://git-scm.com/) is the defacto tool in this respect. Where the source code for everything is stored.
   * Programming Languages - Also look at these languages for tools and automation. [bash](https://www.gnu.org/software/bash/), [java](https://www.java.com/en/), [python](https://www.python.org/) and [Ruby](https://www.ruby-lang.org/en/). Maybe [Go](https://golang.org/)
   * Configuration Management - Leading tools here are [Puppet](https://puppet.com/download-open-source-puppet), [Chef](https://www.chef.io/chef/) and [Ansible](https://www.ansible.com/)
   * [LEAN](https://en.wikipedia.org/wiki/Lean_manufacturing) and Scrum - From Toyota's continuous improvement methods and elimination of waste.
   * Kanban - A board giving a visual way of showing and prioritising tasks.

   ![Simple_kanban_board](https://upload.wikimedia.org/wikipedia/commons/d/d3/Simple-kanban-board-.jpg)

2. Get practical experience  
   The master the tools gives to another step along the journey. Build stuff with [Vagrant Boxes](http://www.vagrantbox.es/), [Puppet Forge](https://forge.puppet.com/), [Terraform](https://www.terraform.io/), with an [AWS free tier](https://aws.amazon.com/free/) 12 month account and get a [GitHub](https://github.com/) account.
   ![Github-neilmillard](/public/img/github_neilmillard.jpg)
   
3. Keep up to date with new tech.  
   IT never stays still and the DevOps and Cloud engineer space is no different. <img width="300px" align="right" alt="Docker" src="/public/img/docker.jpg">Last year [Docker](https://www.docker.com/) gained a lot of popularity. This tool allow a further level of virtualisation and isolation of applications.
   Following blogs such as [this one]({{ site.url }}) or [AWS Blog](https://aws.amazon.com/blogs/aws/) and [Devops Weekly](http://www.devopsweekly.com/).
   
4. Gain a qualification  
   [CloudAcademy](http://cloudacademy.com/blog/devops/) gives knowledge towards qualifications like an [AWS accreditation](https://aws.amazon.com/partners/training/accreditation/)

5. Understand cloud optimisation  
   One of the key benefits of using the cloud is scalability. Using cloud resources efficiently deliver an environment or application needs to be at the balance the cost vs performance.
   Understanding [Three tier applications](http://www.rightscale.com/blog/enterprise-cloud-strategies/architecting-scalable-applications-cloud-application-tier) and how each level can scale.  
   Automatically building servers, with monitoring to scale UP and DOWN allows us to easily support [batch](https://en.wikipedia.org/wiki/Batch_processing) and scheduled workloads like [Big Data](https://en.wikipedia.org/wiki/Big_data), [Business Intelligence](https://en.wikipedia.org/wiki/Business_intelligence) or [Artificial Intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) workloads.

6.  Attend meet ups <img width="300px" align="right" alt="Amazon Web Services" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/2000px-AmazonWebservices_Logo.svg.png">  
   Find [meet ups in your area](https://www.meetup.com/find/devops/) and network with fellow DevOps techies and programmers. 
   You can find me at [AWS User Group UK North](https://www.meetup.com/AWS-User-Group-North/) and [DevOps Manchester](https://www.meetup.com/DevOps-Manchester/)
   
Let me know how I can help you and I hope to meet you soon.
