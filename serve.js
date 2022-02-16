const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const indexFile = path.join(__dirname, './build', '/index.html');

app.use(express.static('build'));

app.listen(8000, () => {
    console.log(indexFile);
    console.log('server is listening on port 8000');
})