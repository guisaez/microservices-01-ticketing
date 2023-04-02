## Development Workflow

| Local Machine |
-----------------
* Make Change to code for tickets service
* Commit code to a git branch (any besides master)
* Push branch to github

&darr; &darr; &darr; &darr; &darr;

| Github |
-------------
* Github receives updated branch
* You manually create a pull request to merge branch into master.
* Github automatically runs tests for project.
* After test pass, you merge th PR into master branch
* Because master branch has changed, github builds and deploys.

### Cloud Provider

* For deployment, I will be using the Digital Ocean Cloud provider
* Make sure to install the doctl.
```shell
brew install doctl
```
* Generate a new API token in your Digital Ocean account. [Generate API](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
* Authenticate using your Digital Ocean Account
```shell
doctl auth init
```
    * You will need to copy your generated token.
* Get connection info for our new cluster.
```shell
doctl kubernetes cluster kubeconfig save <cluster_name>
```
* Verify context was added
```shell
kubectl config view
kubectl config get-contexts
kubectl config current-context

// to use a different context

kubectl config use-context <context_name> 
```

## Connecting to the Cluster via GitHub workflow.
