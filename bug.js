const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(err => {
    // Error handling missing here. Express.js doesn't automatically handle errors in async functions within route handlers
    console.error('Error:', err);
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      const randomError = Math.random() < 0.5 ? new Error('Simulated error') : null;
      if (randomError) {
        reject(randomError);
      } else {
        resolve();
      }
    }, 1000);
  });
}