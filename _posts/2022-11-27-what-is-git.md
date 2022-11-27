---
layout: post
status: publish
published: true
title: What is git?
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: git the source control tool, what is it?
tags: [devops, developer, source control, git]
comments: true
crosspost_to_medium: false
---
Git is a very well known open source control tool. But what is it and how is it used?
{% include image.html
img="/public/img/1280px-Interior_Welling_Library.jpg"
caption="Checking out the books" %}

Source Control Management
============

Source code for a product, program or Infrastructure can and does change. Keeping track of which version is current
is the job of source control.  There is normally a default branch or trunk, from which all other branches stem from.

Code can be checked out by a user. In the older versions of source control software this would lock the file to that
user, until they checked in back in (with changes usually). The other users would only get read access.

Newer software was written to overcome these limitation like [CVS][cvs], [Subversion][svn].

Where did git come from?
===============

[Git][git] was created by Linus Torvalds after BitKeeper withdrew the free (gratis) version. The [Mercurial][merc]
project was also started at the same time (April 2005). These projects created distributed source control systems.

The Source code can be hosted by a Git server. Additional functionality exists from Git as a Service sites such as
[Github][github], [Gitlab][gitlab], and [Bitbucket][bitbucket].
Using a git client with the Git server, the code can easily be distributed amongst users, with updates published in the
form of Diffs. The git hosting sites extend this by giving an easier route of merging back changes into the default
branch by way of Pull Requests or PRs.

Having the code repository distributed amongst multiple developers means that a group can work on the code at the same
time, and to aid merging, can create local copies of the code, called branches. These branches track changes to the
code enabling efficient disk usage and easy merging.

Working with git
============

The basic workflow begins with cloning the git repo to you local machine. If you already have the repo locally, you can
`fetch` changes to the repo, and `merge` them into your branch. This can also be done in a single `pull` operation,
which combines the fetch and merge based on the current branch.

If desired, a new branch can be created locally and marked as the current branch with the `checkout` command.

Changes to the code and tests are then performed at this point. The developer would then `add` the changes to the index
followed by a `commit` to store those changes in the repo. The developer would then `push` the changes to the
remote `origin` repository. Once pushed, the hosting service will then enable merging of those changes by way of
creating a Pull Request.

Pull requests are then usually reviewed by the maintainers of the repository, and merged into the default branch, unless
some comments are added.


Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.


[cvs]: http://savannah.nongnu.org/projects/cvs
[svn]: https://subversion.apache.org/
[merc]: https://www.mercurial-scm.org/
[git]: https://git-scm.com/
[github]: https://github.com/
[gitlab]: https://gitlab.com/
[bitbucket]: https://bitbucket.org/
