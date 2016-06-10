'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.NODE_PORT || 80;

app.use(express.compress());

app.use(express.static(path.join(__dirname, 'out')));

app.listen(port, '0.0.0.0', err => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(`Server running in port ${port}`);
})
