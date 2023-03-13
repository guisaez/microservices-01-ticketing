## NATS Streaming Service

### Notes:

* [Link to Documentation](https://docs.nats.io)
* NATS and NATS Streaming Service are two different things.
* NATS Streaming implements some extraordinarily important design decisions for our application.
* We are going to run the official 'nets-streaming' docker image in kubernetes. Need to read the image's docs.
* [Docker Image](https://hub.docker.com/_/nats-streaming) for Command Line options.

* We will be suing the node-nats-streaming npm library

### Port Forward
```shell
k port-forward nats-depl-84746dfb54-8df26 4222:4222
```

```shell
 port-forward nats-depl-84746dfb54-8df26 8222
2:8222
```

* Go to [localhost:8222/streaming](localhost:8222/streaming)

### Solving Concurrency Problem in NATS

* We are working with a poorly designed system and relying on NATS to somehow save us.
* We should revisit the service design.
* If we re-design the system, a better solution to this concurrency stuff will present itself.

| Property | Type | Goal|
| subject | string | Name of the channel this listener is going to listen to |
| onMessage | (event: eventData) => void | Function to run when a message is received |
| client | Stan | Pre-initialized NATS client |
| queueGroupName | string | Name of the queue group listener this listener will join |
| ackWait | number | Number of seconds this listener has to ack a message |
| subscriptionOptions | SubscriptionOptions | Default subscription options | 
| listen | () => void | Code to set up the subscription |
| parseMessage | (msg: M) => any | Helper function to parse a message | 




