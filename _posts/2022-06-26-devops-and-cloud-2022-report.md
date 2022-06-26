---
layout: post
status: publish
published: true
title: DevOps and Cloud 2022 InfoQ report
author_email: neil@neilmillard.com
categories: [DevOps, Infrastructure, Development]
description: The latest InfoQ report about DevOps
tags: [jobs, devops, platform]
comments: true
crosspost_to_medium: false
---
The latest trends in DevOps
{% include image.html
img="/public/img/1devops-cloud-trends-report-2022-1655962683136.webp"
title="InfoQ DevOps 2022 Report" %}

Key takeaways:
* Data Observability. Monitoring of Data intensive systems, using tools such as Apache Superset/ Kafka and [Grafana](https://grafana.com/)
* Serverless Databases and Serverless as a baseline expection. Cloud providers must offer a serverless product.
* FinOps, keeping tabs on how much is being spent in the cloud. AWS cost explorer can help, as can [Cory's team](https://www.lastweekinaws.com/)
* Monitoring of service meshes with [eBPF](https://ebpf.io) and [WASM](https://webassembly.org/). We have certainly had challenges with [AWS Appmesh](https://aws.amazon.com/app-mesh/) and [Envoy](https://www.envoyproxy.io/)
* Supply chain attacks - the dependency hell gets worse. Do you monitor the vulnerabilities in the dependencies? We have
used [Jfrog Xray](https://jfrog.com/xray/) to scan these.
* Low or no-code is becoming more commonplace. For us it is about enriching the Developers Experience through providing plaform tools.
* The role of “Platform Engineer” is emerging within many sizes of organizations to support the building of related platform abstractions, APIs, and tooling.

source: [InfoQ](https://www.infoq.com/articles/devops-and-cloud-trends-2022/)

If we can help with Platforms, how to be a platform engineer, or anything DevOps, contact us.
