const express = require('express');

const app = express();

// ROUTES
app.get('/', (req,res) => {
    res.send({
        center: { lat: -28.64, lng: 153.61 },
        zoom: 12,
        mapTypeId: 'hybrid',
    });
});

app.listen(5500);