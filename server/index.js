const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { cartItem } = require('../database-mongo/index.js');
const PORT = 4200;


const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.get('/item', (req, res) => {
  cartItem.find(req.query.productId === undefined ? null : { ProductId: req.query.productId })
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).send(doc);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: err });
    });
});

app.listen(PORT, () => console.log('connected on port 4200'));