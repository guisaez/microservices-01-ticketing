## Expiration Options

### How to make the expiration service wait the 15 minutes?

Reminder:
* Our mechanism to track when an order expires is a timestamp that is created every time a new order is created.


Options:
1. setTimeout(() => ...., '15min')
    * this functions stores a timer in memory. If service restarts, all the timers are lost. 

2. Relay on NATS redelivery mechanism.
    * Time to emit? No? Then don't ack.
    * 

3. Message Broker
    * Some other implementation of the event bus. Not NATS.
    * It creates the order-complete event but does not send it until 15 min have passed. 
    * If we were to implement this we will not the the expiration service.

4. Use Bull JS library (used)
    * Expiration Service -> Remind me to do something 15 mins from now -> Bull JS -> Redis Server that contains a list of jobs.
    * 





