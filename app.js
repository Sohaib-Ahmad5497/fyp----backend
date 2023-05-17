const express = require('express');
const app = express();

require('dotenv').config();

const connectDb = require('./database/dbConnection.js');
const petRoutes = require('./routes/petRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');

var bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;

var fs = require('fs');
var path = require('path');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());



app.use(express.json());
connectDb();
app.use(cors());
app.use("/api/pet", petRoutes)
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);






app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(port, () => {
    console.log(`Server is Running : ${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set EJS as templating engine
app.set("view engine", "ejs");