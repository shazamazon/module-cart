const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cartItem = require('../database-mongo/index.js')
const PORT = 4200;


const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.post('/seed', (req, res) => {
  const item = new cartItem({
    _id: new mongoose.Types.ObjectId(),
    productId: req.body.productId,
    price: req.body.price
  });
  item.save()
    .then(result => {
      res.status(201).send({
        message: 'handling POST requests to /seed',
        createdProduct: result
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: err});
    });
});

app.get('/item', (req, res) => {
  cartItem.find(req.query.productId === undefined ? null : {price: req.query.productId })
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