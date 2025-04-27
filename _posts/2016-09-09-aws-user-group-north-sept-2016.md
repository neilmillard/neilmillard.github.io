---
layout: post
status: publish
published: true
title: AWS User Group North Sept 2016
author:
  display_name: neil
  login: neil
  email: neil@neilmillard.com
  url: ''
author_login: neil
author_email: neil@neilmillard.com
wordpress_id: 100
wordpress_url: https://www.millardtechnicalservices.co.uk/?p=100
date: '2016-09-09 12:12:57 +0000'
date_gmt: '2016-09-09 11:12:57 +0000'
categories:
- Infrastructure
tags:
- aws
comments: []
---
<p>I attended the <a href="https://www.meetup.com/AWS-User-Group-North/">AWS User Group North</a> meet yesterday at <a href="https://www.zen.co.uk/enterprise/our-services/cloud-and-hosting/">Zen Internet</a>. What a fabulous day. A change to the usual evening format, we met up during the day.</p>
<p>This gave more time for talks and we were treated to two AWS guys and a few lightening talks.</p>
<h4>Network Innovation at Scale - Colin Whittaker (Principal Network Engineer, AWS)</h4><br />
<p>Colin showed us how the network that supports the <a href="https://aws.amazon.com/">Amazon Web Services</a> structure has grown exponentially and described a few of the solutions to stay ahead of the demand. The hardware unit in the Datacenters is a prepopulated rack, with the hardware guys deploying a working rack, from arrival at the door to becoming available for customers in 2 hours. Colin also mentioned some of the challenges of moving a massive amount of network data at scale, with miles of fiber optic cables and Enhanced networking requiring custom network cards.</p>
<h4>Lightning Talks</h4>
<h5>&nbsp; Lambda, Good for the little things - Carl Simpson (Technical Architect, Zen Internet)</h5><br />
<p>In the 1st talk about Lambda, Carl helped us understand how this service from AWS can help with small tasks, such as EBS volume backups and other housekeeping tasks.</p>
<h5>&nbsp; Having a Bash at AWS Management - Michael Pearce (Co-operatives UK)</h5><br />
<p>Michael shared his journey learning about the AWS command line tools and showed us a working example of managing <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">EBS snapshots</a> in a rotation using these tools.</p>
<h5>&nbsp; Five&nbsp;AWS features that shouldn't exist - Sam Bashton (Director, Bashton / Claranet)</h5><br />
<p>Sam shared his opinion with us about some of the anti best practices that shouldn't be there but are available to AWS customers. He used the pets and cattle metaphor to show that you shouldn't use the console (script everything) for stopping instances, creating images or enabling auto recovery. In short don't use the console, use code, such as CloudFormation or <a href="https://www.terraform.io/">Terraform</a>.</p>
<h4>"Mummy, where are the servers?" - Ian Harris (Cloud Consultant, BJSS)</h4><br />
<p>Continuing the theme of <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">Lambda</a>, Ian showed us how a competition entry workflow was hosted mostly on Lambda with Js scripts and even running ClamAV in a Lambda container. A short description of how there are actually servers, however they are containerized and patched by AWS. This solution used <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html">POST to S3</a>, Lambda events and <a href="https://aws.amazon.com/documentation/apigateway/?icmpid=docs_menu_internal">API gateway</a> to enable the submission of files and a form. Some security considerations were also mentioned so check your IAM policies.</p>
<h4>AWS Update - Danilo Poccia (Technical Evangelist, AWS)</h4><br />
<p>Danilo rounded off the day sharing the latest announcements from AWS, including <a href="https://aws.amazon.com/blogs/aws/new-http2-support-for-cloudfront/">HTTP/2 support</a>, <a href="/2016/08/12/aws-elb-upgrade-layer-7-load-balancing.html">Application Load Balancing</a>, Elastic File System and Aurora read ahead.</p>
<p>&nbsp;</p>
