---
layout: post
title: Most common Website Attacks !
excerpt: "In this post I am going to cover the different types of website attacks and some tools that are used to perform these attacks.
Although we are going to focus on injection attacks."
date: 2022-10-03
time: 10min
description: "Website Attacks. Injection Attacks"
classes: wide
keywords: SQLInjection, XSS Scripting, hacking, SSTI, website attacks, Path Traversal
image: /assets/img/webattacks-gl4uc0m4-blog.jpg
teaser: /assets/img/webattacks-gl4uc0m4-blog.jpg
header:
  teaser_home_page: true
categories:
  - Cybersecurity
tags:  
  - Attacks
---

# Why is knowing about website attacks important for your pentesting career?

Web-based applications are critical systems of more networks, because they are used to process data, transmit it and store it. I, as a software engineer, can say that when building web applications, even if you try to secure them, people make mistakes, and then a skilled hacker or malicious actor can find vulnerabilities and exploit them. That's the main reason why learning about web attacks is so important. We are living surrounded by web applications and experiencing the growth of PWA (Progressive-web App).


# Top 10 most common website attacks

We are going to list the 10 most common attacks on websites, although we are going to focus on injection attacks. The order does not matter in this list.

If you are interested in practicing these attacks don't do it on a real website you are not allowed to, instead try using CTF sites like [Hack the Box](https://www.hackthebox.com/) to practice your skills, they also have an academy to learn in depth these concepts.

## 1. Injection Attacks.

Why are we going to focus on injection attacks? Basically because it is one of the most common and dangerous attacks and rated as rank 1 in the Top Ten Vulnerability Risks by [OWASP](https://owasp.org/www-project-top-ten/). Many injection attacks can cause data loss or damage. Before listing the most common types of injection attacks, let's understand what an injection attack is.

To understand these attacks, it is critical to understand the cardinal rule of not relying on user input. In this type of attack, the attacker supplies untrusted input to a website, and most of the time the user input is not properly sanitized.

## 1.2 How we detect injection vulnerabilities?

The best way to determine if a website is vulnerable to injection attacks is to look in the source code for calls to external resources, validate if the user input is properly sanitized and the user-supplied data being emitted is properly encoded (e.g. XSS).

If you are an attacker you can use some tools to check for possible vulnerabilities such as [Nikto](https://github.com/sullo/nikto) 
or [BurpSuite](https://portswigger.net/burp). You can also check it manually by checking the different entries and source code and with some experience you will be able to recognize if any website is vulnerable or not.

## 1.3 Types of Injection Attacks.

### 1.3.1 SQL Injection.

Let's start with one of the most common types of injections. SQL injection can allow us to interfere with a website's queries to a database and allow us to retrieve data or perhaps gain access. I also recommend that if you want to learn in depth about SQL injection and NoSQL injection attacks (not relational databases like mongo) take a look at the [Hack Tricks](https://book.hacktricks.xyz/pentesting-web/sql-injection) pages on these injection attacks.

A SQLi is basically a web vulnerability that allows us to interfere with the queries that a web application makes to its database. What can a successful SQLi provide? A successful SQLi can gain us access to underlying layers, high-level data breaches or even persistent backdoors. 

To test if we are facing this kind of vulnerability we can use tools like the ones mentioned above or we can do it manually or even automated with some scripts. I am going to leave some things we can try to test for sqli vulnerability like writing a single quote ' and looking for errors, boolean conditions like 1=1, sending payloads designed to trigger time delays and some others. 

You can check this for some of the most common DBSs like MySQL, Sqlite, etc. The payload is inside the {}.

```
   { ‘ OR ‘1’=’1′ — }


    { ‘ OR ‘1’=’1′ /* } 


    { ‘ OR ‘1’=’1′ # }
``` 
<br>
If you are using any security-dedicated operating system such as Kali Linux or Parrot perhaps [sqlmap](https://github.com/sqlmapproject/sqlmap) is installed by default. As it says in its Github repo, "qlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and database server takeovers." I found this tool really useful when I make some machines in Hack the box.

### 1.3.2 XSS Scripting.

Let's understand what an XSS attack is. It is a type of injection attack and occurs when data can enter a website through an untrusted source and more importantly, it is included in a dynamic content that is sent to a web user without being validated. There are three types of XSS, reflected, persistent and DOM-based, although we are going to talk about the first two because they are more frequent than the last one.

- Reflected XSS attacks. Basically, as the name suggests, they are those in which the injected script is reflected outside the web server, such as in search results, errors or responses.

- Persistent XSS attacks. Now the injected scripts are stored in the target's database, and the victims retrieve the malicious scripts from the servers. This type of attack can enable other attacks such as [Cookie Session Hijacking](https://owasp.org/www-community/attacks/Session_hijacking_attack). 


### 1.3.3 SSTI Injection.

Server-side template injection. Web applications typically use some type of template technology such as Jinja, Twig, etc, to generate dynamic responses. These types of vulnerabilities occur when user input is insecurely embedded in a template, resulting in remote code execution on the server.

### 1.3.4 LDAP Injecton.

Another injection that relies on improperly sanitized user input that allows the attacker to construct LDAP statements granting permissions, modifying data, etc. [LDAP Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/LDAP_Injection_Prevention_Cheat_Sheet.html).

### 1.3.5 XPath Injection.

Like SQLi seen above, we can build XPath queries for XML data. XPath is a simple descriptive statement type that allows the XML query to locate a piece of information, we can specify certain attributes to find, and patterns to match and retrieve that data or escalate privileges.


## 2. Path Traversal.

The directory attack consists of attacks that attempt to access directories and files outside of the web server's root directory. This attack is also known as "dot-dot-bar", "directory escalation" and "backtracking", and uses (../) brackets and variations to access files and directories.

With this type of attack, some form of url encoding will be required. On Windows systems attackers can browse only on a partition that locates the web. On Linux systems attackers can browse the entire disk.

To learn more about [Path Traversal](https://cwe.mitre.org/data/definitions/22.html).


## 3. Distributed Denial-of-Service (DDoS).

Distributed [denial of service](https://owasp.org/www-community/attacks/Denial_of_Service), focuses on making some resource, in our today's topic a website, unavailable. There are many ways to perform these attacks such as network packet manipulation, scripting, abuse of the target's memory vulnerabilities, such as object creation, etc.

It is really important because it affects the experience of legitimate users and can cause data loss, and impact of critical services.


## 4. Fuzzing.

We can define fuzzing as the technique for finding bugs using automation. One way to work with fuzzing is to define lists of potentially dangerous values, [fuzz vectors](https://owasp.org/www-project-web-security-testing-guide/v41/6-Appendix/C-Fuzz_Vectors), and for each type inject combinations.

We can perform fuzzing with many tools, but sticking to the topic of this post, web applications, I present [Wffuz](https://github.com/xmendez/wfuzz). As it says in its repo "Wfuzz has been created to ease the task in web application evaluations and is based on a simple concept: replace any reference to the FUZZ keyword by the value of a given payload". I hope you will try this tool, because it is very useful.

## 5. Man-in-the-middle (MITM).

The MITM approach to website attacks uses Trojans to intercept and modify calls between the application and libraries. This Trojan interposes itself between the browser and the browser's security mechanisms, sniffing its traffic and modifying it.

## 6. Brute-forcing.

Brute-force attacks define lists of values, making requests to a server and then analyzing the responses. The main uses are to attack authentication systems or to find hidden directories. A common terminal tool for brute-force and directory lookup is [dirb](https://github.com/v0re/dirb). Dirb has some word lists to perform its task, but you can find other word lists depending on your target by simply searching Github.


## 7. Phising & spear-phising.

Phishing and spear-phishing are attacks in which the targets are
by email, text message or even by phone,
masquerading as a legitimate institution to lure individuals into
to provide sensitive data.

## 8. Zero-day Attacks.

A zero-day attack occurs once that flaw, or software/hardware vulnerability, is exploited and the attackers release the malware before a developer has a chance to create a patch to fix the vulnerability, hence the name "zero-day". The relais importance of not knowing the existence of the vulnerability.

See this page from [Portswigger](https://portswigger.net/daily-swig/zero-day) on zero-day vulnerabilities.

## 9. Ransomeware.

Ransomware is computer malware that is covertly installed on the victim's computer.
on the victim's computer. It encrypts all files or key files (cryptovirology attack) on the victim's computer and then demands a ransom to free his or her computer.

## 10. Macro viruses.

Microsoft Word documents, Excel spreadsheets and other office documents can be infected by a macro virus. A macro virus is a program written in the same language as [macros](https://support.microsoft.com/en-us/office/create-or-run-a-macro-c6b99036-905c-49a6-818a-dfb98b7c3c9c). The code hides inside the document and is activated as soon as the document is opened.

# Conclusions.

We come to the end of this post, I hope you have discovered something new and what is more important that you have started your own research. I don't pretend to do a scientific research, I just want to summarize the things I came across, like these amazing tools, obviously with the knowledge behind the vulnerability or the methodology needed to perform those activities. I also presented in these posts my love for the Hack the box platform, I really love spending time on it, solving machines and interacting with the community. In computer science we don't work alone, we interact and move forward as a team. Enjoy hacking and strive to learn more.

Thank you for reading!
