const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'new request is accepted';
  res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
