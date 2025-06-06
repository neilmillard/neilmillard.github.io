---
layout: post
status: publish
published: true
title: The Importance of testing backups
author:
  display_name: neil
  login: neil
  email: neil@neilmillard.com
  url: ''
author_login: neil
author_email: neil@neilmillard.com
categories:
- Infrastructure
tags: [backups,DR]
comments: true
date: 2017-02-02 13:00
---
<p>Another incidence of a tired admin fixing an outage to cause a bigger outage isn't news as such, however I have to hand it to <a href="https://about.gitlab.com">gitlab</a> with their open honesty about this weeks incident.</p>
<p>After a spam storm created serious (4GB) replication lag on the firms postgresql database cluster, to fix the replication a very very tired on-call team-member then deleted the data folder on the active rather than the replicating server.</p>
<p>The full incident is <a href="https://about.gitlab.com/2017/02/01/gitlab-dot-com-database-incident/">documented here</a></p>
<p>I embrace the honesty that they have shown as this enables the whole community to learn from this and offer better services to our clients. This is very much the message in <a href="https://amzn.to/2jzxoAq">Black Box Thinking</a> by Matthew Syed.
Matthew describes the difference between closed cultures where mistakes are hidden vs an open hostest culture where mistakes are open and much learning and prevention occurs as a result.</p>
<p>As shown by the support on <a href="https://twitter.com/gitlabstatus">Twitter</a> the DevOps and cloud reliability engineers agree.</p>
<p>Lessons so far? Test your backups, you never know when you will really need them.</p>
<p>With my ethos about servers being disposible, I love destroying and rebuilding servers, to prove in any Disaster Recovery situation, the service can be restored.
This relies on well designed recovery processes and code, keeping the focus away from avoiding failure, to focus on embracing failure and reducing the mean time to recovery.</p>
