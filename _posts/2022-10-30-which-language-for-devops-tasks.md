---
layout: post
status: publish
published: true
title: Which language for DevOps tasks?
author_email: neil@neilmillard.com
categories: [Platform, Infrastructure]
description: Language decision tree for DevOps!
tags: [devops, servers, programming]
comments: true
crosspost_to_medium: false
---
With so many languages to choose from, how do you choose?
{% include image.html
img="/public/img/lineup.jpg"
caption="Line up: Image by pch.vector on Freepik" %}

Decisions are hard, and on an empty stomach, you are likely to make bad decisions. Programming comes with lots of
choice. Great devEx comes with Golden Paths, to reduce the decisions.

In this article I will outline several languages and the tasks they are best suited to/for.

Bash
====
You cannot get much simpler than [BASH][bash]. Created in 1989, bash shell is the default shell on most Linux distributions.
Shell Scripts are the backbone of many sysOps automated tasks. From creating new users, to applying patches to a server.
Essentially a script just runs other command line tools, with a bit of logic thrown in for taking arguments and checks
on the system it is running on.

Bash provides Variable, If statements and Functions. You can program some quite elaborate tasks. Calling APIs and
processing the results in JQ for instance.

Shell scripts are true batch processing, they mostly just call other tools that exist on the system. You will find them
under `/bin` and `/usr/bin`

Most useful for running admin tasks on servers. Probably in a `cloud-init` or [Packer][packer] configuration.

Python
======
This high-level interpreted/compiled language was created in 1991. [Python][python] is consistently listed as the most
popular language and I would urge every to learn it.

It has all the basics of a language, like variables, conditionals, and program control logic. It is a fully featured
structured programming language, supporting functional and object oriented paradigms. It has an extensive standard
library, and a rich ecosystem of additional libraries via [PyPI][pypi].

One major distinctive style is the use of indentation rather than curly brackets commonly found in other languages. I
must admit to find this quite jarring at first (about 2016) having spent a lot of time in C++, PHP and Ruby, however
well indented code makes it much easier to read and is done in other languages anyway. Just watch out for the closing
blocks!

{% include image.html
img="/public/img/python_powered.png"
caption="Python Powered: By Максим Пе - Own work, CC BY-SA 4.0" %}

It is heavily used in [AI][ai] Artificial intelligence especially with [TensorFlow][tensorflow] and [Jupyter Notebooks][notebooks].

As well as writing API backends, particularly in serverless programming like [AWS Lambda][lambda], it also is used to
host websites with frameworks such as [Flask][flask] and [Django][django].

In the DevOps world it is what [Ansible][ansible] is written with.

Python can be compiled into packages to run command line utilities.

Ruby
====
Another high level interpreted language, but totally [Object orientated][oop]. Created in 1995, slightly younger that Python,
it's rival, the creator Matsumoto said that Python wasn't true object orientated.

[Ruby][ruby] code looks somewhat like C++ and similar to Perl and Python. One of the main differences is that of
variable scope. As a Object orientated language, all variables are private to a class. This means you need to program
getters and setters to share the variables between classes.

Code can be packaged into command line utilities and is the language that powers [Puppet][puppet] and [Chef][chef].

Ruby has a package manager to extend functionality called Gems with over 100,000 Ruby Gems on [RubyGems][gems]

Ruby can be run within a webserver process. Most common framework is [Ruby on Rails][ror].

GoLang
======
Designed at Google in 2009, [Go][go] is a compiled language. This means all the dependencies, libraries and code are
compiled into a single executable package. This makes execution easy and fast, but care should be taken as will all
compiled code, it will only work on the system for which it was packaged for. This means you can compile it for `targets`
such as x86 Linux, or AMD64 Windows.

It it heavily based on [C][c] but contains memory management, garbage collection and typing.

Go is not strictly Object orientated, but uses [interfaces][interface] vs [class inheritance][inherit]. Along with the
strong error handling paradigm, where every function is expected to fail and provide a reason, these are the principles
you should grasp first when approaching Go.

Being complied is very useful in DevOps, as it creates an easy to install command that can be used from a BASH script.
This lack of external dependencies simplifies the startup of new servers, enabling the configuration of a server.

It can be source to source complied to JavaScript for web development with GopherJS.

C#
==
Created in 2000, another high level programming language. This one adds [component oriented][comp] to the mix of
functional and object oriented paradigms.

If you are in a windows environment, you can use BASH, or PowerShell to perform scripting. For the command line
utilities, instead of GoLang, you could use [C Sharp][csharp].

Another complied language, it must be compiled and packaged before it can run. If you are using third party libraries
these must be installed too. This makes it a little less flexible than GoLang.

In a windows environment though, there is a large library of GUI options via the .NET framework.

Code must have brackets for functions and every line has to have a semi colon to terminate the statement.

I have seen it used for [Embedded applications][embed] like robots and for games programming in the [Unity Engine][unity].

I mention it here as a windows tool and comparison to C.



Want to know more? Come ask me questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.

[bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[packer]: https://www.packer.io/
[python]: https://en.wikipedia.org/wiki/Python_(programming_language)
[pypi]: https://en.wikipedia.org/wiki/Python_Package_Index
[ai]: https://en.wikipedia.org/wiki/Artificial_intelligence
[tensorflow]: https://www.tensorflow.org/
[notebooks]: https://jupyter.org/
[lambda]: https://aws.amazon.com/lambda/
[flask]: https://flask.palletsprojects.com/
[django]: https://www.djangoproject.com/
[ruby]: https://en.wikipedia.org/wiki/Ruby_(programming_language)
[oop]: https://en.wikipedia.org/wiki/Object-oriented
[puppet]: https://puppet.com/
[chef]: https://www.chef.io/
[gems]: https://rubygems.org/
[ror]: https://rubyonrails.org/
[go]: https://en.wikipedia.org/wiki/Go_(programming_language)
[c]: https://en.wikipedia.org/wiki/C_(programming_language)
[interface]: https://en.wikipedia.org/wiki/Protocol_(object-oriented_programming)
[inherit]: https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)
[csharp]: https://en.wikipedia.org/wiki/C_Sharp_(programming_language)
[comp]: https://en.wikipedia.org/wiki/Component-based_software_engineering
[embed]: https://en.wikipedia.org/wiki/Embedded_system
[unity]: https://en.wikipedia.org/wiki/Unity_(game_engine)
[ansible]: {{ site.url }}/2022/09/25/what-is-ansible-and-how-does-it-work.html
