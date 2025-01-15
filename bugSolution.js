const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await doSomethingAsync();
    res.send('OK');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Something broke!'); // Send an appropriate error response
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function doSomethingAsync() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomError = Math.random() < 0.5 ? new Error('Simulated error') : null;
      if (randomError) {
        reject(randomError);
      } else {
        resolve();
      }
    }, 1000);
  });
}