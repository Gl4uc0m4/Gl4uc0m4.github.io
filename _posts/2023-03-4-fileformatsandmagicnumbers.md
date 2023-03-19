---
layout: post
title: File type formats and Magic Numbers for Digital forensics & Malware Analysis
excerpt: "For digital forensics and malware analysis it's important to understand the concept of
file formats and magic numbers."
date: 2023-03-4
time: 3min
description: "Learning about Magic Numbers"
classes: wide
keywords: digital forensics, malware, magic numbers, hex editors.
image: /assets/img/magicnumbers-glaucoma-blog.png
teaser: /assets/img/magicnumbers-glaucoma-blog.png
header:
  teaser_home_page: true
categories:
  - Cybersecurity
tags:  
  - dfir, hex, file
---

# Understanding File type formats and Magic Numbers.

A file format is a layout and organization of data within the file. If a file is to be used by a program, it must be able to recognize and have access to the data in the file. For instance, a text document can be recognized by a program such as Microsoft that is designed to run text files but not by a program that is designed to run audio or video files.

A file format is indicated along with the file name in the form of a file extension. The extension contains three or four letters identifying the format and is separated from the file name by a period.

## Common file formats.

There are many types of file formats that have their respective programs for processing the files. Some of the common file formats are:

- Word files or documents (.doc)
- Images (.jpg, .gif, .png, etc.)
- Executable files (.exe)
- Multimedia (.mp3, .mp4 and others)
- Acrobat reader files (.pdf)
- Web page files (.html or .htm)
- Notepad or wordpad files (.txt)
- Powerpoint files (.ppt)
- Disk image file containing all the files and folders on a disk (.iso)
- Dynamic Link Library Files (.dll)
- Compressed files that combine a number of files into one single file (.zip and .rar)


## Why it's important for digital forensics?

Criminals will try to hide evidences within digital devices, an one way to perform this activity is by changing the file type. That's why file type detection it's crucial for forensics examiners.

Let's understant how we can identify the evidence as a forensic examiner and detect the correct file type.

Normally this methods are categorized into three families. We are going to go from the fastest one into the slowest:

- **Based on the extension**. Just as it sounds, we will just look for the extensions to find the target files, such as .exe or .dll .

- **Based on magic numbers**. This requires us to scan the files with some Hex editor and look for magic numbers, these magic numbers are signatures usually found in the file header, in some cases they are in the EOF like in PDFs. [Here](https://www.garykessler.net/library/file_sigs.html) you can find a comprehensive table of magic numbers with corresponding file types. One of the main drawbacks of this method is the lack of a predefined standard for developers, so magic bytes are not used in all file types.

- **Content-based**. is the examination of file content and the use of statistical modeling techniques to achieve detection. It is a new and promising area of research and is probably the only way to determine false file types.

None of them is foolproof, but we can combine them. 

Currently, researchers are trying to optimize a way to detect file extensions using machine learning algorithms.

## Reading files with a Hex editor

We are going to install bless on our linux system. Bless is an easy to use GUI hex editor.

```
sudo apt install bless
```
<br>

If we are using Linux we already have the *file* command and the magic numbers installed in /etc/magic.

If we are using Windows we can import the following python library and include it in our custom script to find file extensions.

```
pip install python-magic
```
<br>

Let's code something like the following to print the human readable type of the file and the mime type.

```
import magic
```
```
# printing the human readable type of the file
print(magic.from_file('harry_potter.jpg'))
```
```
# printing the mime type of the file
print(magic.from_file('harry_potter', mime = True))
```

<br>

## Conclusions

Magic numbers are important in the world of digital forensics. I hope you found this little information pill useful. 
An important topic discussed in this publication are hexadecimal editors, if you did not know them, I recommend you to use them and go deeper into them, they are really useful.

See you in the next post!
