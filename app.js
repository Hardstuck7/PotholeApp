const express = require('express');

const app = express();

// ROUTES
app.get('/', (req,res) => {
    res.send({
        "lat": -28.64,
        "lng": 153.61,
        "pic": "goofy aah.png"
    });
});

app.listen(5500);