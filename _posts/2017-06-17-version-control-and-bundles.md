---
layout: post
status: publish
published: true
title: Avoid unstable server builds using version control and bundles
author_login: neil
author_email: neil@neilmillard.com
categories: [Infrastructure]
description: Software versions are released constantly, but not all versions play nice. Bundles of compatible software versions will create stability.
tags: [python, puppet, tarball]
comments: true
crosspost_to_medium: false
---
{% include image.html
      img="https://www.neilmillard.com/public/img/server_error_640.jpg"
      title="Bad server build"
      caption="When a server doesn't build" %}
Software versions are released constantly, but not all versions play nice.
Bundles of compatible software versions will create stability.

This is especially true when working with [R](https://en.wikipedia.org/wiki/R_(programming_language)) or [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) modules.
I use puppet and the default state to install [package](https://docs.puppet.com/puppet/latest/types/package.html#package-attribute-ensure) is ```installed```. When using providers using [yum](https://fedoraproject.org/wiki/Yum) or [apt](https://wiki.debian.org/Apt), ```installed``` means ```latest``` if the package is not installed already.

With Python, the pip and pip3 provider is available. These all have the habit of installing the latest version of whatever package is specified.
Whilst this is good in a way, less bugs and more features, it can break that relationship between packages.

All the package managers mentioned above can resolve dependencies, however, if one of the packages updates and updates it dependencies,
this can cause a lock or conflict where no resolvable dependency tree can be found. At that point, you have a server that doesn't build and leaves me scratching my head, to work out what changed.

Version control and version locking can help. Specify each and every package with a specific version, which would be more flexible but more time consuming.

The idea which I stole from google, is where a known set of modules or packages work together, and these are bundled into a release.
Neil's Python bundle v1.2 for instance. These can be bundled up into a [tarball](https://en.wikipedia.org/wiki/Tar_(computing)), to install together and you know what you are going to get once again.
There is a pip module that does this [pip-bundle](https://pypi.python.org/pypi/pip-bundle), however I've not used it yet. I opt for a manual tarball and using the [puppet archive module](https://forge.puppet.com/puppet/archive).


{% include image.html
      img="https://www.neilmillard.com/public/img/console-pulse_640.png"
      title="Success"
%}


To see my talk where I describe the way that I use puppet to build servers, check out this post - [Short Lived, Immutable Servers with Masterless Puppet](https://www.neilmillard.com/2017/06/10/puppet-camp-london-june-2017/)
