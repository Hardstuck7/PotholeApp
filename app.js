const express = require('express');

const app = express();

// ROUTES
app.get('/', (req,res) => {
    res.send('we are at home');
});

app.listen(5500);