---
layout: post
title: "Do You Really Need Kubernetes?"
date: 2026-06-28
categories: [devops, platform-engineering]
tags: [kubernetes, ecs, aws, container-orchestration, platform-engineering]
description: "Most teams adopt Kubernetes for the wrong reasons. Here's the honest case for ECS — and the questions you should be asking before you choose."
---

There are two airports I want you to think about. Istanbul Airport — one of the busiest in the world, handling over 850 aircraft movements a day. And Zell Am See in Austria, a small airfield that handles nine. Both are airports. Both do the job they were built for. Neither is wrong.

But you wouldn't land a 747 at a nine-seat airfield and call it a platform decision.

That's the analogy I use when I talk about container orchestration. Most teams don't choose Kubernetes because they've assessed their workload and concluded they need planetary-scale infrastructure management. They choose it because it's what everyone else is choosing. Because it looks good on a job posting. Because the features list is impressive. But as I said in the talk:

> "What you should be focusing on is the outcome — not the feature list."

<div class="video-container">
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/bIbMyUdIEO8"
    title="Do You Really Need Kubernetes? — Neil Millard at PlatformCon"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

If you'd rather read than watch, here are the questions I get asked most often after this talk.

## We're on AWS — should we default to ECS or Kubernetes?

Back to the airports. The question isn't which one is bigger. It's which one fits your traffic.

If you're primarily running web services, APIs, and background workers on AWS, ECS is almost certainly the right foundation. It handles compute orchestration through task and service definitions, native IAM integration, rolling deployments, autoscaling, and secret injection — without you owning the control plane.

The question isn't "which is more powerful." Kubernetes is more powerful. The question is whether you need that power, and what it costs you to carry it if you don't.

## What does ECS give us that Kubernetes doesn't?

The honest answer: less to own.

With Kubernetes you inherit etcd, cluster upgrades, CNI plugins, ingress controller decisions, and what I call "YAML archaeology" — tracing a problem through several layers of abstraction to find which controller is actually responsible.

ECS abstracts all of that away. That's not a bug, it's the feature. The abstraction is intentionally narrower — fewer platform primitives means lower cognitive load, faster team adoption, and more time spent on developer experience rather than infrastructure maintenance.

Think of it this way: we simplify the platform for our developers. Why not treat ourselves to the same simplification?

## What about ingress — isn't Kubernetes more flexible?

Yes. And that flexibility has a cost.

On the Kubernetes side you have a genuine decision tree: AWS Load Balancer Controller, nginx, Traefik, Istio, API Gateway, or a service mesh. Each is valid. Each adds operational surface area.

With ECS and Application Load Balancer you get host and path-based routing, TLS termination, health checks, blue-green deployment support, WAF integration, and security group models — production-ready, natively integrated, no assembly required.

If you're already on AWS, ECS + ALB gives you a cleaner ingress path than recreating the same thing through several layers of Kubernetes abstraction. The flexibility Kubernetes offers in this layer is only valuable if you need routing behaviour ALB can't provide. Most teams don't.

## We have stateful workloads. Does that force us to Kubernetes?

This is where the instinct to reach for Kubernetes is strongest — and where it's most worth questioning.

The more useful question is: why should your container platform be orchestrating state at all?

Databases, object storage, caches, shared file systems — there are already managed services for all of these. RDS, ElastiCache, S3, EFS. Externalising state to a dedicated service gives you easier backups, cleaner failover, a separate support model, and removes the risk of your container platform becoming responsible for data.

Kubernetes StatefulSets and CSI integrations exist and are mature. If your use case genuinely requires orchestrator-native stateful workloads, Kubernetes is the right tool. But for most internal systems, the better architecture is: don't run databases in Kubernetes. Don't make your container platform responsible for data.

## When *should* we choose Kubernetes?

This isn't an anti-Kubernetes post. It's a "be deliberate" post.

Kubernetes is the right choice when:

- You need deep workload customisation that ECS task definitions can't express
- You run across multiple cloud environments or on-premise, and need strong orchestration parity between them
- Your team is already experienced enough to own the operational complexity Kubernetes introduces — not just deploy it, but support it at 2am
- You need features ECS genuinely doesn't have (custom schedulers, CRDs, complex network policies)

The honest version of the last point is the most important: Kubernetes maturity is a team property, not an infrastructure property. A lot of good teams adopt it for strategic reasons — portability, ecosystem maturity, standardisation. Those are valid. But many end up running three APIs and a background worker on a tool built to manage planetary-scale infrastructure at Google. That's a complexity tax, not a platform decision.

---

The right answer isn't which platform is better. It's which one is right for your team, your scale, and your actual workload. ECS is boring. Boring is good. Boring means your platform team is focused on developer experience, not infrastructure archaeology.

## What Should DevOps Answers Be?

I'm working out what DevOps Answers should be — a community, a resource, something else entirely. The only way to get that right is to talk to people who'd actually use it.

If you're a DevOps or platform engineer and you've got opinions on what's missing in the space — what you'd pay for that you can't get free, what you wish existed — I'd genuinely like to hear from you.

No pitch. No funnel. Just a conversation.

[Get in touch →](/contact)
