---
layout: post
title: If you are a developer you should build secure Apps!
excerpt: "In this post I will cover what a vulnerability is, how to detect and classify them."
date: 2022-11-03
time: 5min
description: "Vulnerabilities and development"
classes: wide
keywords: Security, apps, developing, OWASP, CWE
image: /assets/img/bandit-glaucoma-blog.png
teaser: /assets/img/bandit-glaucoma-blog.png
header:
  teaser_home_page: true
categories:
  - Linux
tags:  
  - Dev
--- 

## What do we understand by a software vulnerability?

It is a flaw in the code that could allow attackers to take control of a system. The critical parts of software development that cause most software vulnerabilities are in the Architecture and Design phase of software development and obviously in the Build phase (not just coding). Now that we know a little bit about what a software vulnerability is, let's go into a common and widely used taxonomy for Software Security Flaws.

## 7 Pernicious Kingdoms.

By their own words "organizing these errors into a simple taxonomy, we can teach developers to recognize categories of problems that lead to vulnerabilities and identify existing errors as they build software" . This taxonomy appears as a response of the half of the security errors are introduced at the source code level (aka bugs). Basically then, this is a taxonomy of coding errors. Let's dive into the taxonomy and explain a bit about each kingdom:

- **Input Validation and Representation**. As you may remember of previous posts, we highly recommended you, as a developer of never trust user inputs without a proper sanitation. Input validation and representation problems are caused by meta-characters, alternate encodings and numeric representations. Some examples are XSS Attacks, Buffer overflow, SQLi , etc. 

- **API Abuse**. Application Programming interface, a contract between a caller and a callee. APIs allow applications connect and interact with each other. Attackers reverse engineer Webapps and other kind of software that rely on APIs calls to hijack API calls, take over accounts, scrape critical information and more. Some examples of API abuse are DDoS attacks, other attacks are made using botnets, to probe different combinations of usernames and passwords stolen. More APIs can't stop multiple bot with different ips to perform these attacks. 

- **Security Features**. From the base of security software is not a secure software we face some problems like "Insecure randomness", pseudo-random generation numbers cannot stand with against cryptographic attacks. Other one more common that I would like is "password management", a lot of passwords are stored in plaintext, maybe you think that's not possible, just go out and check in Github!

- **Time and State**. Distributed computing rely on time and state. Interactions with multiple components require that the state has to be shared and also that requires some time. Some examples are "Deadlock", "Insecure Temporary Files" and more!

- **Error Handling**. Or we don't handle the error or we provide too much information about the error. Some examples are not include catching error blocks, Catching NullPointerException should not be used as an alternative to programmatic checks to prevent dereferencing

- **Code Quality**. Poor code quality leads on unpredictable behavior. Provides attackers to stress the system in different ways.

- **Encapsulation**. It's about drawing strong boundaries, making that the code in your mobile phone cannot be abused by other mobile code.


- **Environment**. This section includes everything that is outside of the source code
but which is still critical to the security of the product being tested.
e.g. configuration files, permissions, etc. 

If you are interested in learning more about this taxonomy, let's take a look at their [cwe paper](https://cwe.mitre.org/documents/sources/SevenPerniciousKingdoms.pdf) 

## SAST vs DAST


When we perform Static Application Security Testing (SAST), we scan source code or binaries of an application trying to find vulnerabilities. Those test are [white box tests](https://www.guru99.com/white-box-testing.html) and can be perform in the same IDEs we use to code. The vast majority of the SAST tools starts the process creating a common format AST, independent of the language code used to build the app. When we use SAST tools we aim to detect vulnerabilities using rules of the most common problems, some are default rules even though we can create our own custom rules. To sum up, this kind of tests are commonly performed by the developers, are white box and we perform it into the source code. 

Instead, the Dynamic Application Security Testing (DAST), we try to find vulnerabilities when the application is in production, these test are from a black box perspective, " malicious perspective ", here we test all the known and unknown endpoints and we perform actions that a regular user of the application is not going to do. The top pros of DAST is that are independent of the language and we don't require access to the source code to perform them. The disadvantages are that we know the vulnerability but we don't know which specific part of the code contains that vulnerability.
## Tools

Let's look at some tools you can use and explore.

### SAST Tools: 

- **Brakeman**. Open-source, specific for Ruby on Rails. [Check it out!](https://github.com/presidentbeef/brakeman)
- **Checkmarkx**. Detect vulnerabilities and risks in execution time during functional tests for a vast programming languages. It's Commercial. [Visit Checkmarkx](https://checkmarx.com/)
- **Snyk**. The vulnerabilities are aboarded during the development process. [Visit Snyk](https://snyk.io/)
- **Bandit**. For Python, finds common security vulnerabilities. It's open-source, go [check it!](https://github.com/PyCQA/bandit)
- **SonarQube**. Support for many programming languages and a well-known in the industry. [Visit their page](https://www.sonarqube.org/developer-edition/?gads_campaign=Class-2-Brand-SQ&gads_ad_group=SonarQube&gads_keyword=sonarqube&gclid=EAIaIQobChMI2pvE1-zz-wIVS-PmCh3hngrVEAAYASAAEgKwh_D_BwE)
### DAST Tools: 

- **Snyk**. Actually Snyk allow users to perform DAST, SAST and SCA tests.

## Gartner Magic Quadrant 2022
<img src="/assets/img/gartner-glaucoma-blog.png" alt="baidu-search-engine-glaucoma-blog" width="100%"/>

## Conclusion

In this post we have covered SAST and DAST testing, if you want to go deeper let's take a look at SCA testing, which is also very important because maybe your projects don't have vulnerabilities introduced by your own code, but maybe a package or library you have used has such as [log4j](https://logging.apache.org/log4j/2.x/). Reading about SCA, (Component testing), you will find that some vulnerabilities are not fixed immediately, that is because in terms of components it is very difficult to fix something that you didn't do, that in many cases is supported and maintained only by the community (sometimes IBM helps some opnsource projects, just to keep them alive), and just because it is very complex in terms of relationships, not only the direct library that your project depends on, but also the libraries that this library depends on.


I hope you have found these posts interesting and useful for your career - let's create less vulnerable code! 

If you want to familiarize yourself with all these terms, check out [MITRE](https://cwe.mitre.org/data/definitions/700.html)