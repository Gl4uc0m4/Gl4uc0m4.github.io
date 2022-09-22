---
layout: post
title: Gathering information it's important !
excerpt: "In this post I will cover an essential part of the reconnaissance phase. We will cover
sub-domain enumeration, tools and techniques."
date: 2022-09-19
time: 3min
description: "Sub-domain enumeration starting point."
classes: wide
keywords: information, subdomain, hacking, gathering information
image: /assets/img/sublist3r-glaucoma-blog.png
teaser: /assets/img/sublist3r-glaucoma-blog.png
header:
  teaser_home_page: true
categories:
  - Cybersecurity
tags:  
  - Information Gathering
---

# Sub-domain Enumeration.

Basically **sub-domain enumeration** can be undestood as the process of finding resolvable subdomains for one or more domains. Maybe your wondering what is a subdomain, it is a second-level domain part of a larger domain, e.g , www.gl4uc0m4security.com , www would be a subdomain of gl4uc0m4security.com, gl4uc0m4security is the **root** and com is the **top-level domain** or TLD.

## Why is important to gather information in the pentesting cycle?

**Gathering information** is the first step in the pentesting process and it is important because the more information do you have about a target more are the possibilities to find vulnerabilities. Also is a step that requires time, and it is important to dedicate a significant effort in this step because it is preferable to **widening the surface attack**. Let me give you an example; would you rather throw hundreds of darts at a small dartboard or just throw one dart at a huge dartboard that you know will hit the bull's-eye one hundred percent?

So that's the point of gather information, know the target and increase the chances of succeed.

## Why sub-domain enumeration?

Subdomain can reveal forgotten subdomains, maybe applications running hidden that can lead to vulnerabilities. More important, can expose the environment of your company and lead into a subdomain takeover or a full compromise. For these reasons it's important to scan and check the status of your environment and learn how to do it.

## Types of sub-domain enumeration:

### 1. Passive Sub-domain enumeration.

In **passive sub-domain enumeration** we gather information without connecting directly to the target, we use third parties to collect the information. With passive sub-domain enumeration the company may not detect you as an attacker. There are different tools to perform passive sub-domain enumerations but we will cover the following ones:

- **Search Engines**.
- **Online DNS Tools**.
- **Certificate Transparency**.
- **ASN Discovery**.

#### 1.1 Using Search Engines.

We can use search engines to find subdomains, to use search engines in this way, we will be using something called **"Google Dorking"**. For our purpose, we are going to use **the dork 'site:'** , e.g, site: example.com . You can use this technique in the most famous search engines like google, yandex, baidu, duckduckgo, etc.

<img src="/assets/img/baidu-glaucoma-blog.png" alt="baidu-search-engine-glaucoma-blog" width="100%"/>


#### 1.2 Using Online DNS Tools.

There are some many online tools out there, but I only used VirusTotal and dnsdumpster. We just need the domain and we can get a lot of valuable information.

<img src="/assets/img/dnsdumpster-glaucoma-blog.png" alt="dnsdumpster-glaucoma-blog" width="100%"/>


#### 1.3 Using Certificate Transparency.

The Certificate Transparency Registry is a solution presented by Google for the CA (Certificate Authority) violations of 2013. Due to these violations, anyone could forge the domain owner's certificate and gain the trust of the end user. Transparency Log means that all certificates issued by the CA would be added to a common public list. We can use crt.sh to query them and list the subdomains of the root domain. If we do not have access to crt.sh directly we can use a tool named [CTFR](https://github.com/UnaPibaGeek/ctfr) .

<img src="/assets/img/crtsh-glaucoma-blog.png" alt="crtsh-glaucoma-blog" width="100%"/>

#### 1.4 Using ASN Discovery. 

ASN or Autonomous System Numbers is a global unique identifier that define one or more group of IP prefixes. Finding ASNs will let us identify organization's CIDR blocks, that will lead to valid domains. First we are going to find the ASN, to do that we can use tools like [BGP ToolKit](https://bgp.he.net/) providing the IP, after we get the ASN we can use [amass](https://github.com/OWASP/Amass) to find netblocks:

```
amass intel -asn <ASN_ID> -ip 
```
<br>
#### Sublist3r

[Sublist3r](https://github.com/aboul3la/Sublist3r) is a python tool designed to enumerate subdomains of websites using OSINT. Sublist3r uses search engines like Google and Online DNS tools like dnsdumpster. So overall, sums up all we saw in the passive sub-domain enumeration. This tools also integrates other tool called subbrute, that we will see in the next section, for the Active Sub-domain enumeration.

### 2. Active Sub-domain enumeration.

With **active sub-domain** enumeration we gather information directly by probing the infrastructure of the organization so maybe you can be detected.

As we did with the passive enumeration, we are going to cover some, not all the existing techniques to perform an active enumeration. Some of the techniques we will be covering are the followings:

- **Brute force enumeration**.
- **Using DNS Records**.
- **Zone Transfer**. 

#### 2.1 Brute Forcing Enumeration.

**Brute force** means that we are going to guess the possible combinations until we discover the subdomain or IP address. Sometimes this is one of the best ways to find subdomains because some subdomains are not indexed in search engines. For this task we use dictionaries and some tools to perform this activity such as the following:

- [dnssearch](https://github.com/evilsocket/dnssearch) Language = GO
- [subbrute](https://github.com/TheRook/subbrute) Language = Python
- [amass](https://github.com/OWASP/Amass) Language = Lua, Go, Others

We can find some wordlists that would fit our purpouse out there online like the following:

- [DNSenum](https://github.com/theMiddleBlue/DNSenum/blob/master/wordlist/subdomains-top1mil-20000.txt)

#### 2.2 Using DNS Records.

- Using CNAME record: **CNAME** stands for canonical name and it is used to create an alias or to point to another domain name, so by CNAME we can find other subdomains or third-party services.
- Using **SPF record**: Sender Policy Framework, it's a policy for whitelisting IPs and Domains that are allowed to send an email.The SPF record is defined using the **TXT record** and should be searched by the TXT record.

```
dig +short TXT example.com
```
<br>
A fabulous script that parses netblocks & domain names from SPF Records is [assets-from-spf](https://github.com/0xbharath/assets-from-spf)

#### 2.3 Zone Transfer.

**Zone Transfer** uses the ARXF protocol to replicate DNS records across DNS servers. Commonly, DNS server administrators just allow ARXF requests from authorized DNS servers, so probably this technique is not going to work, but if it does we are going to find a really interesting information.

We can perform this **ARFX request** using the dig command:

```
dig axfr @ns1.example.com example.com
```
<br>
axfr stands for the type of query, @ns1.example.com for the name or IP of the server to query and example.com for name of the resource record that is to be looked up.

AXFR offers no authentication, so any client can ask a DNS server for a copy of the entire zone. In order to prevent this vulnerability from occurring, the DNS server should be configured to only allow zone transfers from trusted IP addresses.

### Conclusion

We reviewed some of the main tools used nowadays to perform either passive or active sub-domain enumeration, also we understood why it is important to put an effort in the **Gathering Information phase** plus understanding the importance of the DNS sub-domain enumeration in order to better understand the infrastructure of a organization. 

There are some tools and techniques we didn't talk in this post but I encourage you to make your own research and practice. There's also a nice attack I found, related to DNS that is **DNS cache spoofing** that maybe we talk about it in coming posts.

Thank you for reading ! 