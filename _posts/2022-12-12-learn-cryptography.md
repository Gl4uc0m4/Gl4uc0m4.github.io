---
layout: post
title: You must learn Cryptography!
excerpt: "Learning cryptography is really important in our world, it is involved in all our communications."
date: 2022-12-12
time: 3min
description: "Learning about cryptography"
classes: wide
keywords: cryptography, hash, KDC, authentication, AC.
image: /assets/img/crypto-glaucoma-blog.jpg
teaser: /assets/img/crypto-glaucoma-blog.jpg
header:
  teaser_home_page: true
categories:
  - Cybersecurity
tags:  
  - Cryptography
---

# What is cryptography and why it is important?
The term is derived from the Greek word kryptos, meaning hidden. It is closely associated with encryption, which is the act of decrypting ordinary text into what is known as ciphertext and then re-encrypting it. There are two terms related that are cryptology and cryptanalysis. We also find steganography, that covers the obfuscation of information in images,audio or text using techniques such as microdots or merging.

To understand why cryptography is important today, let's understand the goals it pursues:

- **Confidentiality**. The information cannot be understood by anyone for whom it is not intended.

- **Integrity**: The information cannot be altered during storage or transit between sender and receiver without the alteration being detected.

- **Non-repudiation**. The creator/sender of the information cannot later deny his or her intentions in creating or transmitting the information.

- **Authentication**. The sender and receiver can mutually confirm their identity and the origin/destination of the information.

Cryptography ensures data integrity through hash algorithms and message digests. By providing digital codes and keys to ensure that what is received is authentic and comes from the intended sender, the receiver is assured that the data received has not been tampered with during transmission.

## Symmetric, Asymetric and Hibrid algorithms.

Let's look at the different types of cryptography that we find today. 

First, we have symmetric encryption or symmetric key cryptography. This type of encryption uses a single key to encrypt and decrypt data. You have to share this key with the recipient and make sure that the medium used to share this key is not compromised, otherwise your key will be intercepted by someone else. This method is faster, easier to use and consumes fewer resources.

The second is asymmetric or public key encryption. Here we have two types of keys: the public key, known to everyone, and the private key. If someone wants to encrypt a text message, he will need your public key to encrypt the message, and to decrypt it he will need the private key that ONLY you know. This way is more secure than symmetric encryption but it does not guarantee that the recipient is who he says he is and that the message has not been modified in the middle, to solve this we will talk about **hashes** and **signatures** in the next section.
Finally, we have the hibrid that is a mix between the first and the second one. If you want to read more about these type check the following [Google's article](https://developers.google.com/tink/hybrid).

## Hash and signature.

Previously we have talked about hashes and signatures as a way to solve some problems, let's dive into it.

**Hash functions** are mathematical algorithms for converting an arbitrary set of data into a string of summarized data, with a fixed size significantly smaller than that of the source data. Over time it was found that the longer the length of the hash code, the higher the level of security it offers, thus preventing cyber-attacks known as brute force attacks and collision attacks.

Let's look at the main properties offered by hash algorithms:

- It is a **deterministic** algorithm. That is, the same input data must always produce the same output.

- A small change in the message information, even a single bit, must result in a hash code completely different from the original. In fact, the results must not even be similar to each other. 

- It must be impossible to find a cryptographic collision. That is, it must not be possible to find two messages that produce the same hash as a result. Despite being an indispensable feature for cybersecurity, hashing algorithms have been found to be flawed in this way.

Hashing is really important in cybersecurity because it provides a great tool to ensure the integrity of the data we handle every day.

Now that we know a little bit about hashing, let's try to understand what a digital signature is. You may be wondering if it is like the traditional one. In a way it is, but it is more complex and secure. To obtain a signature we follow the following steps:

- First we hash the digital data.

- Second we sign it using public key cryptography. The encrypted message will be signed with a private key, and the receiver of the message will be able to check its validity using the corresponding public key (provided by the signer).


### How to sign and hash files in Linux.

#### Hash
To get the Hash of a file we can use the md5sum utility on Linux. Let's start by installing md5sum and then check the version.

```
sudo apt install -y ucommon-utils 
```
```
md5sum --version
```
<br>
If we want to obtain the hash of a file for example we can execute the following command:

```
md5sum your_file.txt
```
<br>
Now that you have the hash, try changing something in your file and you will see how the hash changes.

#### Signtaure

We are going to sign a file using GnuPg, if you don't have it installed you can do it with the following command
 you can do it with the following command:

```
sudo apt-get install gnupg
```
<br>
Now you will have to generate your key using the following command and giving all the required data:

```
gpg --gen-key
```
<br>
DON'T FORGET YOUR PASSPHRASE! 

After this we can proceed with signing a file. To do this simply open a terminal and locate the file you want to sign, then use the following command:

```
gpg --sign your_file.txt
```
<br>
After the command is executed you will get another file called your_file.txt.gpg . Now you can verify your signed file with the following command:

```
gpg --verify your_file.txt.gpg 
```
<br>

## Certification Authority (CA)

In this section we are going to talk about the Certification Authority (CA). A Certification Authority (CA) is an entity trusted by both the sender and the receiver of the message. This trust of both in a "trusted third party" allows either of them to trust the documents signed by the CA, specifically, in the documents that identify each public key with its corresponding owner and that are called certificates. In the [W3techs](https://w3techs.com/technologies/overview/ssl_certificate) survey you can see which were the most important CAs in 2022.

# Conclusion

Knowing about cryptography is a must in cybersecurity not only because of the importance just because of how common it is in this field. I hope you found out something today and it has sparked your interest in this field.

Have a nice day :D