---
layout: post
published: true
title: Wordpress to jekyll
author_login: neil
author_email: neil@neilmillard.com
categories:
- Development
tags: [jekyll,building]
comments: []
date: 2017-01-30 13:00
---
Publishing a blog with Jekyll
-----
I had an idea. Why not publish the blog using [jekyll](https://jekyllrb.com/) and host it on [AWS S3](https://aws.amazon.com/s3/)?
Working with [Puppet](https://puppet.com/) and [ruby](https://www.ruby-lang.org), I'm already very familiar with [gems](https://rubygems.org/) and getting jekyll working on my windows 10 workstation with RubyMine was relatively easy.

As this source code is on my [github](https://github.com) repository, I would have gone with the easy [Github Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) option.
So you will find this site on (https://neilmillard.github.io/) but I wanted to learn something new.

Hosting on S3
----
S3 has a feature to [host static websites](https://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html) direct from S3, serverless you could say. With this in mind it was quite easy to create a new bucket with the name of the domain and turn on this option.
Next I uploaded the _site directory to the bucket after compiling the site with ```jekyll build```

Migrating the blog
----
I'm not the first person to take this route and as such there are blog migration tools available to [ingest my wordpress blog](https://import.jekyllrb.com/docs/wordpress/) and create a bunch of posts from it.
This worked quite well, but I did have to tweak some of the html for paragraph tags.

Automating the build
----
Now I would not be an awesome DevOps dude if I didn't want to automate the build and upload to S3. AWS have been adding services throughout last year and one of these tools is [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html).
```
Error: invalid byte sequence in US-ASCII
```
The building of the site was the easy bit, with the exception of adding [HTML Proofer](https://github.com/gjtorikian/html-proofer#using-with-jekyll), which didn't want to run due to a UTF-8 argument with US-ASCII.
It appears that the default Ruby Docker container is configured with US-ASCII, which really breaks some stuff.
With AWS CodeBuild you specify a build file *buildspec.yml* with which you can configure certain settings, including environment variables.
```yaml
environment_variables:
  plaintext:
    LC_ALL: C.UTF-8
    ENV LANG: en_US.UTF-8
    ENV LANGUAGE: en_US.UTF-8
```
With these in place HTML Proofer was happy enough and spotted the &lt;p> tags I mentioned earlier.

AWS CodeBuild says it will upload the compiled artifacts to S3. 'Great this should be easy' I thought. One minor snag, it needs a key to upload to. This means either a tarball or a subfolder, neither in the format I needed for the website to be hosted correctly.
Again open source community to the rescue, with [Stout](https://github.com/EagerIO/Stout) a tool to deploy static websites to S3.

After a few more minor changes, like choosing a theme and adding font-awesome, I'm happy with how it turned out.


Adding a job to AWS CodePipeline, by pointing the source step at the Github repo (after giving permission) I have a two step Pipeline to fetch code, then build it. with the deploy step already in the build step.
