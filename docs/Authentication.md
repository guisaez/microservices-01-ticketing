### Handling User Authentication

#### Fundamental Option #1
* Allow individual serines to rely on some centralized authentication service to decide if the user is logged in. 
* Take Token and send it to authentication service.
* The authentication will send the request back in. 
* Same downside as synchronous communication.If the authentication service goes down no user will be able to login. 


#### Fundamental Option #1.1
* Relying on authentication service as a gateway.
* Any request coming into our application will need to go through an authentication service that inspects the requests and decides i the user is authenticated. 
* Downside: We rely 100% on authentication service.


#### Fundamental Option #2
* Teach each individual service to decide if someone is authenticated. 
* No dependance on another service. 
* Downside: Duplicating authentication logic between services. This can be solved by creating authentication library and sharing it across services. 
* Downsides Important: 
    * Services do not have direct connection and they cannot tell when users are banned from the service.

* Solution:
    * Token will be valid for certain amount of time.
    * We can reach out to authentication service and generate a refresh token.
    * Once we reach out the authentication service it will check if the user is banned. 


### Cookies and JWT

* Cookie: 
    * Send by the server using header: Set-Cookie.
    * Sent to the server in followup request.
    * Transport mechanism.
    * Moves any kind of data between browser and server.
    * Automatically managed by the browser.
* JWT: 
    * Arbitrary piece of information (Payload) sent to a JWT creation algorithm.
    * Original object can be accessed.
    * The browser includes JWT token when communicating with the server.
    * We can mix and match and store JWT inside the cookie.
    * Authentication/Authorization Mechanism.
    * Stores data we want.
    We have to manage it manually.

### Requirements for Our Auth Mechanism

* Must be able to tell us details about a user.
* Must be able to handle authorization info.
* Must have a built in, tamper-resistant way to expire or invalidate itself.
* Must be easily understood between different languages.
* must not require some kind of backing data store on the server.


