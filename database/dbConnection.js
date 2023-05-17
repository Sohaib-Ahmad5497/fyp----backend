const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            family: 4,
        });
         console.log("Connection Established Successfully", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log("Error to connect the DB : ", error);
        process.exit(1);
    }
}
module.exports = connectDb;