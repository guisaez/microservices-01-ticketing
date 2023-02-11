### Difficulty in Error Handling.

* We must have a structured response from all server, no matter what went wrong.
* A billion things can go wrong, not just validation of inputs to a request handler. These need to be handled consistently


### Solutions:
* Write an error handling middleware to process errors, giv them a consistent structure, and send back to the browser. 
* Make suer we capture all possible errors using Express's errors handling mechanism (call the 'next' function)
* We want an object like an 'Error', but we want to add in some more custom properties to it.