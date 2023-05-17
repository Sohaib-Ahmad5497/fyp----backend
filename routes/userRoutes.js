


const authMiddleware = require('../middleware/authMiddleware.js');

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userControllers.js');

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get("/protectedRoute", authMiddleware, (req, res) => {
//   res.send("This is a protected route.");
// });

module.exports = router;
