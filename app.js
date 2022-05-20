const express = require('express');
const cors = require('cors');
const app = express();

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