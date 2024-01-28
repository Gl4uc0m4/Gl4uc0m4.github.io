---
layout: post
title: "Hardening ubuntu server"
excerpt: Have a look at a small ubuntu hardening guide.
date: 2023-11-30
time: 5min
description: "Securing your Ubuntu Server involves a strategic blend of measures, such as fortifying GRUB passwords, hardening the kernel, implementing robust auditing, and configuring firewalls – a comprehensive approach to bolstering your server's defenses against evolving cyber threats."
classes: wide
keywords: Standards, Security
image: /assets/img/hardening.png
teaser: /assets/img/hardening.png
header:
  teaser_home_page: true
categories:
  - Cybersecurity
tags:  
  - Hardening
---

## Ubuntu Server

Securing your Ubuntu Server is not merely an option; it's a necessity in today's cyber landscape. This comprehensive guide will walk you through essential steps to fortify your server's defenses against potential threats. These are just some basic ideas on how you can secure your Ubuntu server!


### Secure GRUB with a Password:

Adding a password to GRUB is vital as it prevents unauthorized users from altering boot options or accessing recovery mode during system startup. This measure safeguards against physical attacks and unauthorized system changes.

Open the GRUB configuration file with the following command:
<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
    sudo nano /etc/default/grub
</pre>
Add or modify the following line, replacing 'your_password' with a strong password:

<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
    GRUB_CMDLINE_LINUX_DEFAULT="quiet splash" 
    GRUB_CMDLINE_LINUX="password_pbkdf2 your_password"
</pre>

Finally update GRUB and reboot:

<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
   sudo update-grub
   sudo reboot
</pre>

Securing GRUB ensures the integrity of the boot process, preventing malicious actors from tampering with critical system settings.

### Fortifying the Kernel:


Strengthening the Linux kernel is essential for minimizing vulnerabilities. This involves enabling security features such as Address Space Layout Randomization (ASLR) and disabling IPv6 if not needed.

Open the sysctl configuration file:

<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
sudo nano /etc/sysctl.conf
</pre>

Add lines for ASLR and IPv6:

<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
# Enable kernel ASLR
kernel.randomize_va_space=2

# Disable IPv6 if not needed
net.ipv6.conf.all.disable_ipv6=1
</pre>

Finally apply the changes:


<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">

    sudo sysctl -p
</pre>

Kernel hardening adds an extra layer of protection against memory-related attacks and limits potential vectors for exploitation. 

### Implement Auditing:

Auditing is critical for monitoring system activities and identifying potential security incidents. The Linux Audit framework helps track changes, accesses, and potential breaches.

Install the auditd package:


<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
sudo apt-get install auditd
</pre>

Enable and start the audit service:


<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
sudo systemctl enable auditd
sudo systemctl start auditd
</pre>

Customize audit rules:


<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
    sudo nano /etc/audit/rules.d/audit.rules
    </pre>

Auditing provides a detailed log of system activities, aiding in both proactive threat detection and post-incident analysis. 

### AppArmor

AppArmor is a Mandatory Access Control (MAC) system that enforce access policies and restrict the capabilities of processes.

Let's install AppArmor for Ubuntu:

<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">
    sudo apt-get install apparmor
</pre>

AppArmor prevent unauthorized access and limit the potential damage from security breaches but exist other options like SeLinux.


### Partition Permissions:

Setting appropriate permissions for critical directories is essential for controlling access and protecting system configuration files.Limiting access to critical system directories reduces the risk of unauthorized modifications and enhances the overall security posture.

### Strengthen Password Policies:

Enforcing strong password policies is a fundamental security practice. A complex and robust password policy adds a layer of defense against unauthorized access. For example we can enforce our password policy with a simple minimum length requirement, obviously we need to perform more complex tasks than this in order to enforce our password. Rem 

<pre id="mypre" 
     style="background: whitesmoke; color: black;
            width:100%; padding:20px; font-size: 16px;border: 1px solid #777;">

    sudo passwd --minlen 12
</pre>

### Limit User Permissions:

Restricting user privileges helps minimize the potential impact of security breaches. Editing the sudoers file defines which users can run specific commands with elevated privileges. Strong password policies and limited user privileges prevent unauthorized access and reduce the risk of privilege escalation.


### Remove Unnecessary Users and Services:

Identifying and removing unnecessary users and services reduces the attack surface, minimizing potential security vulnerabilities. Reducing the number of users and services lowers the chances of exploitation and simplifies the task of maintaining a secure system.

### Configure Firewall Rules.

Setting up a firewall is crucial for controlling network traffic. Uncomplicated Firewall (UFW) simplifies firewall management. For advanced users, configuring iptables provides granular control over network traffic. It requires a solid understanding of networking principles.

Firewalls are the first line of defense against unauthorized access and network-based attacks. They control traffic flow and protect your server from external threats.

### Conclusion

Update your server security configurations to adapt to emerging threats, ensuring your server remains resilient in the face of evolving cybersecurity challenges. Security is an ongoing process, and your Ubuntu Server is now well-prepared to handle the dynamic nature of the digital landscape. Stay vigilant and secure!