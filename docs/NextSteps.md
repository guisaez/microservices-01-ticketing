## Next Steps:

1. Add in HTTPS
    * See cert-manager.io
2. Add in Email Support 
    * Send a user an email after they have paid for an order. Create a new service using Mailchimp/Sendgrid/similar
3. Add in 'build' steps for our prod cluster.
    * Right now we are still running our services + the client in 'dev' mode. Add in additional Dockerfiles to build each service prior to deployment.
4. Create a staging cluster.
    * Our teammates might want to test out our app manually before we deploy it. Maybe we could add a ew Github workflow to watch for pushes to a new branch of 'staging'. Create a new cluster that you will deploy to when you push to this branch. 
