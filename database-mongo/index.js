const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jkconno:K1er4n1%21@cluster0-uubnq.mongodb.net/shazamazon?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected');
});

const cartSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProductId: Number,
  Price: Number
 }, {collection: 'cart' });

const cartItem = mongoose.model('cartItem', cartSchema);

module.exports = { cartItem };
