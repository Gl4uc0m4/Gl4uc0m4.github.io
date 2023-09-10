---
layout: post
title: You must learn Linux!
excerpt: "In this post I will cover the Linux directory structure, how to create aliases and some useful commands."
date: 2022-10-13
time: 5min
description: "Linux! Linux! Linux?!"
classes: wide
keywords: Linux, directory, command, grep, ssh, alias
image: /assets/img/linux-glaucoma-blog.jpg
teaser: /assets/img/linux-glaucoma-blog.jpg
header:
  teaser_home_page: true
categories:
  - Linux
tags:  
  - Linux
--- 

## 1 What is FHS?

FHS stands for **Filesystem Hierarchy Standard**. The Linux directory structure is hierarchical and the structure is defined by the FHS, as well as the contents of those directories. This organization is really useful for finding data, files and organizing your **computing environment**. So let's dive into the default directories and learn the purpose of them.

## 2 Directories? Directories !?

- **/** The root directory. It is the top of the directory structure, containing the directories and files of the Linux system.
- **/bin** Binary directory. Most program or application directories, such as cd, cat, ls, etc.
- **/boot** Boot file directory. Contains the files needed by the operating system to boot.
- **/dev** Device file directory. Where all devices such as keyboard, printer, mouse, etc. are stored.
- **/etc** Configuration file directory. Contains the system configuration files, such as passwords, host names, network files. Such as /etc/shadows, /etc/passwd, /etc/hosts.
- **/home** User directory. Where you keep your personal files. 
- **/lib** Shared libraries directory.
- **/media** Mount point (usb, etc).
- **/mnt** Mount directory.
- **/opt** Optional software directory.
- **/proc** Process and kernel files directory.
- **/root** Home directory for root user.
- **/sbin** System binaries.
- **/tmp** Temporary files.
- **/usr** User binaries and program data.
- **/var** Variable data files.

## 3 How we create alias? What is an alias?

Maybe you are using a very long and boring command and as humans do, you want to shorten it and make it more fun. The problem comes when you use another computer that is not yours and you launch that fancy custom command and your face is a poem thinking about what an idiot you are trying that. 

To create a permanent **alias** just open ~/.bashrc and type a new line like this
alias short_custom='blah blah blah boring long command'. If you just want to do it **temporarily**, just type the same phrase in the terminal and it will work until you close your terminal.

## 4 Useful commands for working with directories.

I think when talking about directories the first command that came to my mind is to create a directory. The command is quite simple and is 'mkdir' (make  a directory). Then once we create a new one we must want to move into it, so for this we need to use the 'cd' command (**change directory**) and just by specifying the directory name we move into it. If we want to undo the move we just use cd again but with (..) and move backwards. If we don't want to do much cd and just want to go directly to our **home directory** we can do (cd ~) and we change directory to our home directory.

Another useful command when interacting with directories is 'ls', which is used to list the contents. The ls command has a few variations, but the one I use the most is 'ls -la'. You can check what 'a' and 'l' mean by using 'man ls', but basically it is for the long listing format and to show entries starting with '.', normally those entries are ignored when we run the ls command.

Now we list the files and maybe we want to know the type of that file, so we can use the 'file' command or we just want to show that file in the **terminal**, so we use 'cat'. Finally we want to delete the directory we have created, for that we can use 'rmdir or rm -d', but if you have created some files there you are going to run into a problem. If we want to delete a directory that is not empty we can use 'rm -r' or as I always do 'rm -rf', go find the difference between those two and please do NOT do 'rm -rf /', it's a joke, so don't do it (^_^). If you want to practice some commands and have fun just try [OverTheWire Wargames](https://overthewire.org/wargames/). 


## Conclusions

In summary, we have reviewed the FHS system, the most common directories and how to work with the Linux directory system. We hope you found it interesting, and as we always recommend, do as much research and practice as you can. Knowing the FHS and what's in the directories will give you more confidence in managing your system and will be useful in supporting your pentesting career.

Thank you for reading!