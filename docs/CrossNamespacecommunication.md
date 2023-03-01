## Cross Namespace Communication

```shell
kubectl get namespace
```

```shell
kubectl get services
```

```shell
kubectl get services -n ingress-nginx
```

Note:

We will write out: http:/ingress-nginx-controller.ingress-nginx.svc.cluster.local

We could create an External Name Service to avoid writing/memorizing all the above

### External Name Service

Remaps the domain of a request.

This is not implemented in the application.




