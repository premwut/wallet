const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const indexFile = path.join(__dirname, './build', '/index.html');

app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(
    'index.html',
    {
      root: path.join(__dirname, './build'),
    })
})

app.listen(8000, () => {
  console.log('server is listening on port 8000');
})