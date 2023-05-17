const Pet = require('../models/petModels.js');
const asyncHandler = require('express-async-handler');
const petModels = require('../models/petModels.js');

const addPet = asyncHandler(async (req, res) => {
    const {
        nickName, petType, gender, price, color,
        age, group, training, energy, grooming,
        remarks, phoneNo, address,
        // imageUpload,
    } = req.body;

    // if (!nickName || !petType || !gender || !price || !color || !age || !group || !training || !energy || !grooming || !remarks || !imageUpload || !phoneNo || !address) {
    //     res.status(400);
    //     throw new Error("All Fields To Fill Is Mendatory........");
    // }
    if (!nickName || !petType || !gender || !price || !color || !age || !group || !training || !energy || !grooming || !remarks || !phoneNo || !address) {
        res.status(400);
        throw new Error("All Fields To Fill Is Mendatory........");
    }

    // const path = require("path");
    // const imagePath = path.join(__dirname, "..", "uploads");

    const pet = await Pet.create({

        nickName,
        petType,
        gender,
        price,
        color,
        age,
        group,
        training,
        energy,
        grooming,
        remarks,
        // imageUpload,
        // image: imagePath,
        phoneNo,
        address
    });
    console.log("=========req body", req.body);
    const createdPet = await pet.save();
    res.status(201).json(createdPet);
});

const getPet = async (req, res) => {
    try {
        const petData = await petModels.find()
        res.status(200).json({ data: petData })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const singlePet = async (req, res) => {
    Pet.findById(req.params.id).then((singleData) => {
        if (!singleData) {
            return res.status(404).send();
        }
        res.send(singleData)
    }).catch((error) => {
        res.status(500).send(error)
    })
}

module.exports = { addPet, getPet, singlePet };


// const Pet = require('../models/petModels.js');
// const asyncHandler = require('express-async-handler');
// const petModels = require('../models/petModels.js');
// const mongoose = require('mongoose');
// const crypto = require('crypto');

// const addPet = asyncHandler(async (req, res) => {
//     const {
//         nickName, petType, gender, price, color,
//         age, group, training, energy, grooming,
//         remarks, phoneNo, address
//     } = req.body;

//     if (!nickName || !petType || !gender || !price || !color || !age || !group || !training || !energy || !grooming || !remarks || !phoneNo || !address) {
//         res.status(400);
//         throw new Error("All Fields To Fill Is Mendatory........");
//     }

//     const image = req.files.image;
//     const imageBuffer = Buffer.from(image.data);

//     const pet = await Pet.create({
//         nickName,
//         petType,
//         gender,
//         price,
//         color,
//         age,
//         group,
//         training,
//         energy,
//         grooming,
//         remarks,
//         image: imageBuffer,
//         phoneNo,
//         address,
//     });

//     const createdPet = await pet.save();
//     res.status(201).json(createdPet);
// });

// const getPet = async (req, res) => {
//     try {
//         const petData = await petModels.find()
//         res.status(200).json({ data: petData })
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

// module.exports = { addPet, getPet };
