const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shazam-cart', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected');
});

const cartSchema = new mongoose.Schema({
  name: mongoose.Schema.Types.ObjectId
}, { collection: 'cart-data' });

const cartItem = mongoose.model('cartItem', cartSchema);

module.exports = { cartItem };