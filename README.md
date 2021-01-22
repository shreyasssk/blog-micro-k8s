[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![Docker Hub](https://github.com/shreyasssk/blog-micro-k8s/workflows/Docker%20Hub/badge.svg)
![GitHub Container Registry](https://github.com/shreyasssk/blog-micro-k8s/workflows/GitHub%20Container%20Registry/badge.svg)
# Blog Website
A simple blog website developed using Angular and Node.js, made to demonstrate basic microservices using Docker and Kubernetes.
By adding the word "orange" in the comment box the comment gets 'rejected', the initial stage is 'pending' where it checks for moderation and the final stage is 'approved'

### Instructions:
```
$ git clone https://github.com/shreyasssk/blog-micro-k8s.git
$ cd blog-micro-k8s
$ skaffold dev
```
I have used domain name as 'posts.com'
If you wish to use the same then make necessary changes to your hosts file:
```
$ cd /etc
$ sudo nano hosts
```
in the last line add the ip address on your minikube node and type 'posts.com' after a space

### Prerequisites required:
- Docker
- Kubernetes
- Minikube
- Ingress Nginx (https://kubernetes.github.io/ingress-nginx/)
- Skaffold
