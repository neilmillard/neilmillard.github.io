---
layout: post
status: publish
published: true
title: git push -u origin &lt;branch&gt?
author_login: neil
author_email: neil@neilmillard.com
categories: [Development]
description: Your application is in a container, what is the container in?
tags: [automation, application, devops, dev, ops]
comments: true
---
Git is a Source Control versioning tool for software development.
{% include image.html
img="/public/img/git-branch.png"
title="Containers are a bit stuck" %}
When you develop new features or a bug fix, it is good practice to run in a new branch.

When you are ready to update the server with your new branch, you would run `git push`

Git will tell you that you are in a new branch and so you need to set up tracking (link your local to remote branch) to
enable push and pull to know where it should be linked to.

```
Did you mean?
git push -u origin <branch>
```

To give Git a clue and avoid asking in the future, just give this config a go.

```bash
git config --global push.default current
```
