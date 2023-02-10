### Services

* auth: Everything related to user signup/signin/signout
* tickets: Ticket creation/editing. Knows weather a ticket can be updated. 
* orders: Order creation/editing.
* expiration: Watches for orders to be created, cancels them after 15 minutes.
* Handles credit card payments. Cancels orders if payments fails, completes if payments succeeds. 