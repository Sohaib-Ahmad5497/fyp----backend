const asyncHandler = require('express-async-handler');
const Image = require('../models/imageModels.js');

const addImage = asyncHandler(async (req, res) => {
  const { image } = req.body;
  console.log("========request body=========", req.body);

  const img = await Image.create({
    image,

  });
  console.log("=====", img);
  res.status(201).json({
    message: 'Image uploaded successfully!',
  });
});

module.exports = addImage;  