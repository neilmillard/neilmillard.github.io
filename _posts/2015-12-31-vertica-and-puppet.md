---
layout: post
status: publish
published: true
title: Vertica and puppet
author:
  display_name: neil
  login: neil
  email: neil@neilmillard.com
  url: ''
author_login: neil
author_email: neil@neilmillard.com
wordpress_id: 38
wordpress_url: https://www.millardtechnicalservices.co.uk/?p=38
date: '2015-12-31 17:30:45 +0000'
date_gmt: '2015-12-31 17:30:45 +0000'
categories:
- Infrastructure
tags:
- puppet
- vertica
- aws
comments: []
---
<p>For the last couple of weeks I have been working on a <a href="https://puppetlabs.com/puppet/what-is-puppet" target="_blank">puppet</a> manifest to enable more resilience and build of <a href="https://my.vertica.com/">vertica</a> nodes on <a href="https://aws.amazon.com/" target="_blank">AWS</a>.</p>
<p>Using automation tools has allowed the fast prototyping and development of many software solutions. Using puppet and Jenkins, a full environment is provided for the Data Analysts to use within about 1 hour.</p>
<p>Part of what I've been working on is to build vertica nodes whilst retaining the data. In addition to this, building in the logic to enable a node to fail, recover and join the cluster with next to no manual work.</p>
<p>Monitoring and detection is useful in this phase, so the database admins can double check the health of the data during and after the failure. Part of the solution includes automatically configuring the Vertica Management Console ready for use.</p>
<p>More progress is expected in the next month as I build auto scaling on top of this resiliency.</p>
