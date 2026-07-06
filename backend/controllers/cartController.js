const Cart = require("../models/Cart");

// Add to Cart
const addToCart = async (req, res) => {
  try {

    const { userId, productId } = req.body;

    const existingItem = await Cart.findOne({
      user: userId,
      product: productId,
    });

    if (existingItem) {

      existingItem.quantity += 1;

      await existingItem.save();

      return res.json({
        message: "Quantity Updated",
      });

    }

    const cartItem = await Cart.create({
      user: userId,
      product: productId,
      quantity: 1,
    });

    res.status(201).json(cartItem);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Cart
const getCart = async (req, res) => {
  try {

    const cart = await Cart.find({
      user: req.params.userId,
    }).populate("product");

    res.json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Delete Item
const deleteCartItem = async (req, res) => {

  try {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Removed",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  addToCart,
  getCart,
  deleteCartItem,
};