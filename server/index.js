const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('')

app.listen(4200, () => console.log('connected on port 4200'));