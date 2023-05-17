
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController.js')

router.post("/addCart", cartController.addCart);
router.get("/getCart", cartController.getCart);
router.delete("/deleteCart/:id" , cartController.deleteCart)

module.exports = router;
