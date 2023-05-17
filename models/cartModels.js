const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  petType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Cart', cartSchema);
