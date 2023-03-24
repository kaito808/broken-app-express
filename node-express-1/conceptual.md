### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

callbacks, promises, and async functions with await

- What is a Promise?

what is promised to be completed in the future

- What are the differences between an async function and a regular function?

async functions can implement promises instead of immidiate returns, as well as await.

- What is the difference between Node.js and Express.js?

node.js is a server side development and express.js is the framework to direct routes

- What is the error-first callback pattern?

the function's first parameter will be error and catches errors first

- What is middleware?

the code which runs in between request and response

- What does the `next` function do?

'next' allows to pass down the control of one middleware to another. Also it allows errors to be passed down so that functions still run

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
probably it is better to use promise all for those 3 users