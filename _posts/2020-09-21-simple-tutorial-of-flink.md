---
layout: post
title:  "Streaming Processing tutorial in Flink"
date:   2020-09-21
desc: "Streaming Processing tutorial in Flink"
keywords: "Flink,Python,tutorial,blog"
categories: [Data Processing]
tags: [Flink,Python]
icon: icon-html
---

# What is FLink?
---


Apache Flink is a framework and distributed processing engine for stateful computations over unbounded and bounded data streams.
Flink has been designed to run in all common cluster environments, perform computations at in-memory speed and at any scale.

<br />

# Deploy Applications Anywhere
---


Apache Flink is a distributed system and requires compute resources in order to execute applications. Flink integrates with all common cluster resource managers such as Hadoop YARN, Apache Mesos, and Kubernetes but can also be setup to run as a stand-alone cluster.

Flink is designed to work well each of the previously listed resource managers. This is achieved by resource-manager-specific deployment modes that allow Flink to interact with each resource manager in its idiomatic way.

When deploying a Flink application, Flink automatically identifies the required resources based on the application’s configured parallelism and requests them from the resource manager. In case of a failure, Flink replaces the failed container by requesting new resources. All communication to submit or control an application happens via REST calls. This eases the integration of Flink in many environments.

<br />

# Streaming Processing dome project in Flink
---


## Video


Please go to [Elves Lab's Youtube Channel](https://youtu.be/Gtv4mnpGfI0)


## Code


Code repository: [https://github.com/tonystevenj/flink-simple-tutorial](https://github.com/tonystevenj/flink-simple-tutorial)
