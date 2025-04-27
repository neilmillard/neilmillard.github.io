---
layout: post
status: publish
published: true
title: puppet types and providers
author:
  display_name: neil
  login: neil
  email: neil@neilmillard.com
  url: ''
author_login: neil
author_email: neil@neilmillard.com
wordpress_id: 187
wordpress_url: https://blog.mitese.co.uk/?p=187
date: '2016-11-23 18:12:14 +0000'
date_gmt: '2016-11-23 18:12:14 +0000'
categories:
- Development
tags:
- puppet
- exec
- types and providers
comments: []
---
<h3>Puppet</h3><br />
<p>After becoming very inspired following <a href="https://www.youtube.com/watch?v=Jr8H0wSUMBY">Martin Alfke's "Moving From Exec to Types and Providers" talk</a> at <a href="/2016/11/09/puppet-camp-fall-autumn-london-2016.html">Puppet camp London</a>, I feel the need to share the love that is <a href="https://puppet.com/docs/puppet/7/create_types_and_providers_resource_api.html">Types and Providers</a>.</p>
<h4>What are types and providers?</h4><br />
<p>These are the building blocks of Puppet, written in Ruby that give us the <a href="https://puppet.com/docs/puppet/7/create_types_and_providers_resource_api.html">Resource&nbsp;types</a> in our classes, such as File or User.</p>
<p>If you don't mind 'fun' language, then <a href="https://garylarizza.com/blog/2013/11/25/fun-with-providers/">Gary's post Fun with Providers</a>&nbsp;here will help explain things better than I can here.</p>
<h4>Why now?</h4><br />
<p>I'm currently working on a scalable and resilient Mongodb replication cluster and have this long bash script triggered by an Exec. This is bad, not only because exec statements are a sign that <a href="/2016/01/05/cost-of-technical-debt.html">technical debt</a> is building, but the audit entries from Puppet are sparse.</p>
<p>My team will be working on getting up to speed with types and providers to create a much better Mongodb puppet module experience.</p>
<p>All going well, this code may find its way into the <a href="https://github.com/puppetlabs/puppetlabs-mongodb">puppetlabs mongodb</a> module.</p>
