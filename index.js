const express = require('express');
const app = express();


const mongoose = require('mongoose');
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");


const todoRoute = require('./routes/Todo')

dotenv.config();


const port = process.env.PORT || 3000;

const DBconnect = async() => {
    
try {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB connected")
} catch (error) {
    console.log(error)
}

}

DBconnect();

//meddleware
app.use(express.json()); 
app.use(helmet());
app.use(morgan("common"));

app.use('/api/task',todoRoute)

app.listen(3000, () => {
   console.log(`server started ${port}`) 
})