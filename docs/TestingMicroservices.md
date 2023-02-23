### Microservices Testing

#### What is our scope?
* Test a single piece of code in isolation.
    * Example: Single middleware
* Test how different pieces of code work together.
    * Example: Request flowing through multiple middlewares to a request handler.
* Test how different components work together.
    * Example: Make request to service ,ensure write to database.
* Test how different services work together.
    * Example: Creating a 'payment' at the 'payments' service should affect the 'orders' service.

We are focusing on testing services in isolation.

### How will we run these tests?

* We are going to run these tess directly from our terminal without using docker.
* This implies that our local environment is capable of running eac service.
* Simple enough now, but more complex project might make this hard!






