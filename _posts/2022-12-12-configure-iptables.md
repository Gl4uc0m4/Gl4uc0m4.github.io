---
layout: post
title: Iptables Introduction
excerpt: "What is Iptables and what is used for?"
date: 2022-12-12
time: 3min
description: "Learning about pam"
classes: wide
keywords: authentication, pam.
image: /assets/img/iptables-glaucoma-blog.png
teaser: /assets/img/iptables-glaucoma-blog.png
header:
  teaser_home_page: true
categories:
  - Linux
tags:  
  - routing, iptables, chains, rules
---

# What is Iptables?

Iptables is a command-line firewall utility that uses policy chains to allow or block traffic, like ACL from Cisco,iptables looks for a rule in its list to match it to. If it doesn’t find one, it resorts to the default action. Normally, iptables comes pre-installed on every Linux distribution, but you can update or install it with the next command: 

```
sudo apt-get install iptables
```
<br>

## Chains, Rules and Tables.

Iptables chains are just lists of rules, processed in order. They can be one of the fixed built-in ones (INPUT, OUTPUT, FORWARD in the default filter table, some others in e.g. the nat table), or user-defined ones, which can then be called from others. Chains decided whether a packet goes in, goes out or forward.

Rules are just grouped within chains and tables contains chains of rules for how to treat network traffic packets.

## Types of tables
<table width="100%" style="border-collapse:collapse;border-spacing:0" class="tg"><thead><tr><th style="background-color:#f8a102;border-color:inherit;border-style:solid;border-width:1px;color:#333333;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">FILTER TABLE</span></th><th style="background-color:#f8a102;border-color:inherit;border-style:solid;border-width:1px;color:#333333;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">NAT TABLE</span></th><th style="background-color:#f8a102;border-color:inherit;border-style:solid;border-width:1px;color:#333333;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">MANGLE TABLE</span></th></tr></thead><tbody><tr><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">INPUT CHAIN</td><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">OUTPUT CHAIN</td><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">INPUT CHAIN</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">OUTPUT CHAIN</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">PREROUTING CHAIN</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">OUTPUT CHAIN</td></tr><tr><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">FORWARD CHAIN</td><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">POSTROUTING CHAIN</td><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">FORWARD CHAIN</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">PREROUTING CHAIN</td></tr><tr><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"></td><td style="background-color:#efefef;border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">POSTROUTING CHAIN</td></tr></tbody></table>

<br>




#### MANGLE tables

They are in charge of modifying the packages, and for this they have the options:

COUGH: Type of Service is used to define the type of service for a packet and should be used to define how packets should be routed, not for packets going to the Internet. Most routers ignore the value of this field.

TTL: changes the lifetime field of a package. Its acronym stands for Time To Live and, for example, it can be used for when we do not want to be discovered by certain Internet service providers (ISPs) that are too snooping.

Mark: used to mark packets with specific values, managing to limit bandwidth and generate queues through CBQ (Class Based Queuing).


 
#### NAT tables: PREROUTING, POSTROUTING

The NAT (Network Address Translation) tables, will be consulted when a packet creates a new connection. They allow a public IP to be shared among many computers, basically if we need to share our server inside our private network we will need to perform NAT operations in order to route the packets from the outside to our inside server and viceversa.

Some modifications that we can perform are:

- PRE-ROUTING: to modify packages as soon as they arrive at the computer.

- OUTPUT: for the output of packets that are generated locally and will be routed for their output.

- POST-ROUTING: modify packages that are ready to leave the computer.


#### Filtering Tables:

The filter tables they are used by default to manage data packets. These are the most used and are responsible for filtering the packets as the firewall or filter has been configured. Modifications that you have predefined are the following options: 

- INPUT: for input, that is, all packets destined to enter our system must go through this chain.

- OUTPUT: for the output, all those packages created by the system and that are going to leave it to another device.

- FORWARD: redirection, as you may already know, simply redirects them to their new destination, affecting all packets that go through this chain.

## Creation of rules.

Let's create some simple rules to see the power of Iptables in action.

To build our custom rule, we will follow the following pattern:

**sudo iptables -A [chain] -i [interface] -p [protocol] -s [source] --dport [port number] -j [target]**

"sudo iptables -A"  tells iptables that you are adding new rules to a chain. You can then combine the command with other options, such as:

- i (interface) - the network interface whose traffic you want to filter, such as eth0, etc.
- p (protocol) - the network protocol where the filtering process takes place. It can be tcp, udp, icmp, etc. You can also type all to choose all protocols.
- s (source) - the address where the traffic comes from. You can add a hostname (if /etc/hosts or DNS is not configured, you cannot) or an IP address.
- dport (destination port) - the destination port number of a protocol, such as 22 (SSH), 443 (https), etc.
- j (destination) - the name of the destination (ACCEPT, DROP, RETURN). You must insert this each time you create a new rule.

Now let's put all this together with the following example. Let's imagine that we have a server, like for example an apache, and we don't want to receive input from a machine with ip 192.168.1.10 . To reject the request from the machine we add the following rule:

**iptables -A INPUT –s 192.168.1.10 –j DROP**

Now imagine you have an employee who loves cats and in his work time spends a lot of time on cuttykitties.com, we can add a rule to prevent your employee from accessing this page:

**iptables –A OUTPUT –d www.cuttykitties.com –j DROP**


If you want to delete any of the rules we have created just run the same command but first using **iptables -D**.

# Conclusions

Each network packet sent or received on a Linux system must be subject to one of these tables, at least one of them or several at the same time, that's why it's important to know about Iptables.

Have a lovely day :D



 




