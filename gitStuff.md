# GitHub Help Sheet

## Introduction

This is a document to track some of my github usage and store helpful commands for future use.

## Web Development

Professor Leopold has chosen to use GitHub as a hub for work in this class. I am operating on Windows, and currently dont have experience using git on windows.

### HTTP vs. SSH

I was not able to successfully use https cloning, so I resorted to using git ssh for cloning. 

- <code>ssh-keygen -t ed25519 -C "iam331@nyu.edu"</code>
   ```
    PS C:\NYU\2023 fall> ssh-keygen -t ed25519 -C "iam331@nyu.edu"
    Generating public/private ed25519 key pair.
    Enter file in which to save the key (C:\Users\Ian McCullough/.ssh/id_ed25519):
    C:\Users\Ian McCullough/.ssh/id_ed25519 already exists.
    Overwrite (y/n)? y
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again:
    Your identification has been saved in C:\Users\Ian McCullough/.ssh/id_ed25519
    Your public key has been saved in C:\Users\Ian McCullough/.ssh/id_ed25519.pub
    The key fingerprint is:
    SHA256:8qSH3JWwsUYi7Ew9wzRiSYie1vkwQultWaPR23PrObk iam331@nyu.edu
    The key's randomart image is:
    +--[ED25519 256]--+
    | ..o=.o          |
    |.o.+.O .         |
    |+ + X X +        |
    | * & o B * .     |
    |. o * . S +      |
    |     o O o       |
    |      + = o      |
    |       . =       |
    |         Eo      |
    +----[SHA256]-----+
    ```
- <code>ssh -T git@github.com</code>
    ```
    PS C:\NYU\2023 fall> ssh -T git@github.com
    Enter passphrase for key 'C:\Users\Ian McCullough/.ssh/id_ed25519': 
    Hi IanMcCullough123! You've successfully authenticated, but GitHub does not provide shell access.
    ```
- <code>git clone git@github.com:IanMcCullough123/webDevel.git</code>
    ```
    PS C:\NYU\2023 fall> git clone git@github.com:IanMcCullough123/webDevel.git
    Cloning into 'webDevel'...
    Enter passphrase for key '/c/Users/Ian McCullough/.ssh/id_ed25519': 
    remote: Enumerating objects: 7, done.
    remote: Counting objects: 100% (7/7), done.
    remote: Compressing objects: 100% (7/7), done.

    Receiving objects: 100% (7/7), 492.92 KiB | 1.02 MiB/s, done.
    ```
- <code>git status</code>
- <code>git add .</code>
- <code>git commit -m "XXX"</code>
- <code>git push</code>
    ```
    PS C:\NYU\2023 fall\webDevel> git push 
    Enter passphrase for key '/c/Users/Ian McCullough/.ssh/id_ed25519': 
    Enumerating objects: 4, done.
    Counting objects: 100% (4/4), done.
    Delta compression using up to 8 threads
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 1.26 KiB | 1.26 MiB/s, done.
    Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
    remote: Resolving deltas: 100% (1/1), completed with 1 local object.
    To github.com:IanMcCullough123/webDevel.git
        f981036..06aa370  main -> main
    ```
    - <b>NOTE: SSH passphrase for key - 1214


## References

No references ass of right now. Cheers.
