## Building a Next Image

We will be writing the Next app using Javascript, not Typescript.

1. Every time we want to build an image we create a Dockerfile
2. Build image (if locally) and push the build to the cloud.
3. Get client running inside Kubernetes Cluster.
    1. Add config file inside k8s/infra
4. Edit config in ingress-srv file for routing