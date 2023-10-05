const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
// const mongoose = require("mongoose");

const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json()) ;


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://piyushgautam433:zQEHbU03kQArDdv4@cluster0.o9nlzqg.mongodb.net/?retryWrites=true&w=majority");
        console.log(`Mongo db connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
app.use("/api/user" , userRoutes)

connectDB();
app.listen(5000 , console.log("server started"));
