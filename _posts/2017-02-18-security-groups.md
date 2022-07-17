---
layout: post
status: publish
published: true
title: Security Groups
author_login: neil
author_email: neil@neilmillard.com
categories:
- Development
tags: [authentication, firewalls, security]
comments: true
---
I ran into a couple of problems this week involving [security groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)
A security group acts like a virtual firewall on your instance. It controls what traffic enters and leaves and is attached to an instance on start.

The first gotcha, [security groups for EC2 Classic are different to EC2-VPC](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html#VPC_Security_Group_Differences). When you launch an instance you cannot specify an EC2 Classic security group for an EC2-VPC instance, and vice versa.
The other major difference between the two types of security groups, EC2 Classic are much more restrictive as to what you can change. They are attached to the instance on start and cannot be changed, whereas the EC2-VPC security groups are attached to eth0 on start and can be changed to a different group after booting.
Most notably RDS uses EC2-VPC security groups.
<img src="{{ site.url }}/public/img/con-VPC-sec-grp.png" alt="RDS Security Groups" />
The second gotcha, security group rules can be changed at any time.
This might seem like a good thing, and it is, unless you have multiple instances using the same security group. Whilst you can attach several security groups to an instance or network card, it is good practice to condense them as much as possible to simplify troubleshooting.
There are limits that apply to security groups. You can have maximum of 50 inbound and 50 outbound rules per security group, and only attach 5 security groups per network interface.
This means you can only have a maximum of 250 inbound rules per instance.

The problem I experienced, was that one of the rules that was attached to my database instance had been changed. When troubleshooting network access from the Jenkins server, I was getting errors (replica set not running), which turned out to be down to Jenkins not able to communicate with any of the cluster members.

Embarrassing to say the least. So do check security groups often if an error you weren't expecting occurs, The answer might just be there.



