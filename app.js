const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


mongoose.connect('mongodb+srv://Hardstuck7:Pothole123@cluster0.lnql6.mongodb.net/?retryWrites=true&w=majority');

app.use(cors());

// ROUTES
app.get('/', (req,res) => {
    res.send({
        "lat": -28.64,
        "lng": 153.61,
        "pic": "/goofy ahh.png"
    });
});

app.listen(3000);