
const asyncHandler = require('express-async-handler');
// const cartModels = require('../models/cartModels.js');

const Cart = require('../models/cartModels.js');

const addCart = asyncHandler(async (req, res) => {

  try {
    const { nickName, petType, price, age } = req.body;
    const cart = await Cart.create({
      nickName,
      petType,
      price,
      age,
    });

    console.log("=========req body", req.body);
    const createdCart = await cart.save();
    res.status(201).json(createdCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Cart creation failed.' });
  }
});

const getCart = async (req, res) => {
  try {
    const cartData = await Cart.find()
    res.status(200).json({ data: cartData })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const deleteCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log("============", id);
  try {
    const cart = await Cart.findById(id);
    console.log("=======here is cart ", cart);
    if (cart) {
      await Cart.findByIdAndRemove(id);
      res.json({ message: 'Cart item deleted' });
    } else {
      res.status(401).json({ message: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Cart deletion failed.' });
  }
});

module.exports = { addCart, getCart, deleteCart };
