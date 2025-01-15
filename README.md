# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications where asynchronous operations within route handlers lack proper error handling.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` file demonstrates an Express.js application with an asynchronous route handler.  The asynchronous operation (`doSomethingAsync()`) might fail, but the original code lacks proper error handling within the route handler.  If the promise rejects, the error is only logged to the console.  The client receives no indication of the failure.

## Solution

The `bugSolution.js` file corrects the issue by using a `try...catch` block within the route handler. This ensures that if any error occurs during the asynchronous operation, the error can be handled gracefully, and an appropriate error response is sent to the client.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express` to install dependencies.
4. Run `node bug.js`.
5. Observe the behavior (errors are logged to the console, but not handled gracefully).
6. Run `node bugSolution.js` to see the corrected version.