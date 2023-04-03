## Application - TicketStore

### Description:

This application is similar to a popular US application called [StubHub](https://www.stubhub.com). User can sell tickets to sporting events, concerts, etc to other users. 

* Users can list a ticket for an event (concert, sports) for sale.
* Other users can purchase this ticket
* Any user can list tickets for sale and purchase tickets.
* When a user attempts to purchase a ticket, the ticket will be locked for 15 min. The user has 15 minutes to enter their payment info.
* While locked, no other user can purchase the ticket. After 15 minutes, the ticket should automatically be unlocked.
* Ticket prices can be edited if they are not locked. 

### Architecture

* React Application using Next JS
    * server-side rendering
* Services will be simple node services using express
* Storage using MongoDB (staying consistent)
* Using Redis on expiration service.
* Each service will be referring to a common library. 
    * NPM module to share code across services. 
* NATS Streaming Service (Network Address Translation)
    * Event-Bus
* Running Services with Google Cloud

### Configuration

Whe testing the development url (ticketing.dev) you are going to obtain an error in the browser. A fake Ingress Certificate. Just click in the page adn type:
* thisisunsafe

### Development Tools
* Node Js
* Typescript
* Docker
* Skaffold
* Ingress-NGINX
* React

### Notes

If you do not want to run Docker at all:
* Close Docker Desktop
* Run:
```shell
gcloud components install kubectl
```
* Run:
```shell
gcloud container clusters get-credentials <cluster name>
```

### Abstract Classes
* Cannot be instantiated
* Used to set up requirements for subclasses.
* Do create a Class when translated to JS, which means we can use it in 'instanceOf' checks.

### Handling User Authentication

* User authentication handling is a challenging problem with microservices.


### Resources

* [Google Cloud Free Trial](https://cloud.google.com/free)
* [Google Cloud SDK Install](https://cloud.google.com/sdk/docs/install-sdk)



