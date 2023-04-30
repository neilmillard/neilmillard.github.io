---
layout: post
status: publish
published: true
title: Setting up a cloudfront with S3 bucket
author_email: neil@neilmillard.com
categories: [Devops]
description: Static or CDN
tags: [devops, developer, terraform]
comments: true
crosspost_to_medium: false
---
A technical post today. Setting up Static Website with Terraform
{% include image.html
img="/public/img/static_hosted.png"
caption="CDN?" %}

Terraform
==========
My task this weekend was to migrate a website to AWS. As it is based on [Jeykll][jekyll] it only serves static content.
Perfect for a Cloudfront -> S3 bucket kinda think.

AWS have done a lot of work and changes in this area, particularly around S3 buckets and security. So here's an updated
guide to Terraform with Static Websites.

State
=====
As we are working with terraform, the first thing we need is somewhere to store the state, like a bucket. This needs
to be setup manually (IKR) otherwise we need to store the terraform state for the terraform state bucket .....

A simple bucket, private, with a basic policy will do it. One to enable Getting and Putting objects (update terraform
state) and one statement to enable us to find the bucket via List.
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "Modify",
			"Principal": {
				"AWS": [
			        "arn:aws:iam::123456789:user/admin.user",
			        "arn:aws:iam::123456789:root"
			        ]
			},
			"Effect": "Allow",
			"Action": [
				"s3:GetObject",
				"s3:PutObject"
			],
			"Resource": [
				"arn:aws:s3:::domain-state/*"
			]
		},
		{
			"Sid": "ListBucket",
			"Principal": {
			    "AWS": [
			        "arn:aws:iam::123456789:user/admin.user",
			        "arn:aws:iam::123456789:root"
			        ]
			},
			"Effect": "Allow",
			"Action": [
			    "s3:ListBucket"
			    ],
			"Resource": [
			    "arn:aws:s3:::domain-state"
			    ]
		}
	]
}
```

Getting S3
=========
To start we need the basic starting blocks of terraform with a `providers.tf` file. We also need `variables.tf`, and
`terraform.tfvars` to configure the variables.

As I said, S3 buckets are complicated now. The `website` attribute is deprecated. In fact, quite a few attributes have
been replace by their own terraform resources.
Instead of one S3 resource we have 5 resources, `aws_s3_bucket`, `aws_s3_bucket_website_configuration`, `aws_s3_bucket_acl`,
`aws_s3_bucket_policy`, `aws_s3_public_access_block` and if you used it `aws_s3_bucket_cors_configuration`.

In the terraform docs, I couldn't find a single place for all of these as an example. You can find one [here][s3-example].
In the file you will find a www_bucket for each resource, together with a template for the `policy`.

ACLs are disabled by default and need a `aws_s3_bucket_ownership_controls` block to enable them.

Cloudfront
========
Cloudfront is easy enough to [setup][cloudfront], just needs a Certificate from ACM. one thing of note is in the
`viewer_certificate` block, sll_support_method can be set to `vip` which will give you a dedicated IP address and
activate more costs for you.

Route 53
========
To give access to all this, we need DNS records which are also in the `route53.tf` along with some google junk.


So head on over to the [repo at github][terraform] for the full ([and working][deltafamiglia]) example.


Come ask me and the community questions. You can find me on [Slack]({{site.data.slack.invite}}).


If you found this useful, subscribe to updates and look out for my [YouTube channel]({{site.data.youtube.channel}}) content.


[jekyll]: https://jekyllrb.com/
[s3-example]: https://github.com/neilmillard/deltafamiglia.com/blob/main/terraform/s3.tf
[cloudfront]: https://github.com/neilmillard/deltafamiglia.com/blob/main/terraform/cloudfront.tf
[terraform]: https://github.com/neilmillard/deltafamiglia.com/tree/main/terraform
[deltafamiglia]: https://www.deltafamiglia.com
