
const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the directory to save the uploaded file
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original file name
    }
  })
});

module.exports = upload;