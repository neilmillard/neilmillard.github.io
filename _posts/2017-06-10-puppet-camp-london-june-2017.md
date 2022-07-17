---
layout: post
status: publish
published: true
title: puppet camp london june 2017
author_login: neil
author_email: neil@neilmillard.com
categories: [Development, Infrastructure]
description: I spoke at puppetcamp london. Masterless Puppet
tags: [puppet, masterless, immutable]
comments: true
crosspost_to_medium: false
---
{% include image.html
      img="/public/img/puppetcamplondon2017.jpg"
      title="Puppetcamp London"
      caption="Puppetcamp, London" %}
This week I attended and spoke [again](/2016/11/09/puppet-camp-fall-autumn-london-2016.html), at [PuppetCamp London 2017](https://puppet.com/community/events/camp/two-part-puppet-camp-london).
We enjoyed some interesting talks off the back of the [State of Devops report](https://puppet.com/resources/whitepaper/state-of-devops-report), and the [DevOps Enterprise Summit](https://events.itrevolution.com/eur/).

Whilst enjoying the views of london, I listened to several people from [Puppet](https://puppet.com/) in the morning.
{% include image.html
      img="/public/img/londonfromaltitude.jpg"
      title="Views of London"
      caption="View from Altitude, London" %}

A chord was struck with me when [Dion Hinchcliffe](https://dionhinchcliffe.com/) was mentioned in conjunction with working practices inside Enterprise organisations.
 Specifically around [Silos and team dynamics](https://www.zdnet.com/article/the-shift-from-app-silos-to-digital-workplace-as-platform/). Having worked in fast-paced and effective teams, I do feel a slight discomfort when working in a team that has not got to this level yet.
Environment and size of team are key to the performance of a team, both of which are heavily influenced by the management.

Anyway, getting back on track, I spoke about Short-lived Immutable servers, and managing or specifically, building them with Puppet 3.
Of course support for Puppet 3 is now deprecated, so I'll be updating my examples to Puppet 4 at some point soon.
{% include image.html
      img="/public/img/immutableserverstitle.jpg"
      title="Immutable Servers with Puppet"
      caption="My slide deck" %}

The biggest challenges with this approach are;
i) [Immutable](/tags/#immutable) servers don't change, this means should any configuration or software needs to be updated, you will have to rebuild the server.
In Development this is no big issue, especially if those environments are rebuilt daily. After all, no point paying for a server or environment when your developers are tucked up in bed.
ii) The puppet code is usually only run once, on boot. This means intrusion detection needs to be factored into the design, as you cannot rely on puppet to revert edited files, malicious or not.
Again regular rebuilds can reduce this issue, but active monitoring of all instances is a must.
iii) Unless logs are shipped elsewhere, when the server is rebuilt, those logs will be lost.
An [ELK/Elastic stack](https://www.elastic.co/webinars/introduction-elk-stack) or [Loggly](https://www.loggly.com/) can help with logging to a central server.

{% include image.html
      img="/public/img/immutableagenda.jpg"
      title="Immutable Servers with Puppet Agenda"
      caption="Agenda" %}

The bit that always get a laugh, is where I explain ordering. In puppet you define a state that you want the server to be in.
This means a lot of what is done can be executed simultaneously. In some cases this creates issues where certain things have to happen in a specific order.
The fun is around the keywords used to specify this in the Puppet manifest.
{% include image.html
      img="/public/img/before_before.jpg"
      title="Immutable Servers with Puppet Ordering"
      caption="Before me, or before you" %}

The issue confuses new techies I mentor. In the image above the ```before``` tag is stating that the class should be executed before the ```File['copy-init-file']```.
The reason this can confuse you for the first time, is where you compare this to the ```require``` tag. This states that ```Exec['unarchive-source]``` is required to run 'before' this class.
Some of this can be implied by the layout of the code, however it should be stressed that the layout order of the code only effects the catalogue compilation, not the execution.

If you would like me to explain in more detail, we can discuss below.

Links:
[Slides](https://www.slideshare.net/neilmillard/short-lived-immutable-servers-with-masterless-puppet)

[Training](https://devops.neilmillard.com)

[Speaking](/contact/)
