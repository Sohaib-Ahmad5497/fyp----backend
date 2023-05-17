// const mongoose = require('mongoose');

// const petSchema = new mongoose.Schema({
//   nickName: {
//     type: String,
//     required: true,
//   },
//   petType: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   color: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   group: {
//     type: String,
//     required: true,
//   },
//   training: {
//     type: String,
//     required: true,
//   },
//   energy: {
//     type: String,
//     required: true,
//   },
//   grooming: {
//     type: String,
//     required: true,
//   },
//   remarks: {
//     type: String,
//     require: true,
//   },
//   image: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Image',
//     require: true
//   },
//   phoneNo: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Pet', petSchema);

const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  petType: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  training: {
    type: String,
    required: true,
  },
  energy: {
    type: String,
    required: true,
  },
  grooming: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    require: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  phoneNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Pet', petSchema);
