const express = require('express');
const router = express.Router()
const petController = require("../controllers/petController")
const addImage = require("../controllers/imageController")
const upload = require('../middleware/multer');

router.post("/addPet", petController.addPet);

// router.post("/addImage", upload.single('image'), addImage);

router.get("/getPet", petController.getPet);
 
router.get("/getSinglePet/:id", petController.singlePet);


module.exports = router