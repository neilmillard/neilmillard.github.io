---
layout: post
status: publish
published: true
title: code quality
author_login: neil
author_email: neil@neilmillard.com
categories: [Development]
description:
tags: [code quality, lint, linter]
comments: true
crosspost_to_medium: false
date: 2017-06-04 13:00
---
This week's focus is on code quality.
This is where the code that we create is clear and uniform for the purposes of making it easier to maintain.

The ability to maintain code is very important as there are always bugs, security updates, features
or simply a better way to write the code. Addition of a company wide shared library for instance.
{% include image.html
      img="https://imgs.xkcd.com/comics/code_quality.png"
      title="Code Quality"
      caption="https://xkcd.com/1513/" %}

Code quality also effects the readability of code.
Most programming languages have 'Style Guidelines' that define the uniform aspect of the code.
If the code style is agreed upon (and often the coding communities for each language have an opinion on this),
then becoming familiar with the code goes hand in hand with the language it is written in.
This is simple things like how many spaces are in a tab or indent. Where the brackets go for IF statements, etc.

{% include image.html
      img="/public/img/atom-linter.png"
      title="Linter in action"
      caption="Linter feature in Atom.io" %}

Tools have been created to make this job easier for programmers,
called [Linters](https://en.wikipedia.org/wiki/Lint_(software)).

In Ruby for instance, there is [RuboCop](https://github.com/bbatsov/rubocop) which warns and enforces the Ruby Style guide.
Puppet has [puppet-lint](https://github.com/rodjek/puppet-lint) for a similar purpose.

In addition to linters which can spot simple errors too, there are code analysis tools also.
These are tools that are more in line with unit testing and run the code to varying degrees,
such as running a puppet manifest inside a docker container and testing the results.
This can be found at [puppetlabs_spec_helper](https://puppet.com/blog/next-generation-of-puppet-module-testing).

{% include image.html
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/2000px-Jenkins_logo_with_title.svg.png"
      title="Jenkins"
      caption="Automation server - Jenkins" %}


These linters and tests can be automated of course.
My favourite way is via pre commit [Git Hook](https://githooks.com/) or a [status check](https://github.com/blog/2051-protected-branches-and-required-status-checks) from [Github](https://github.com) to a jenkins job.
This job the runs the linter and reports back the good or bad status.

Let me know how you get on with lint and checks.
