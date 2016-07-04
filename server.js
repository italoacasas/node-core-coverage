'use strict';

const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.NODE_PORT || 80;

app.use(compression());

app.use(express.static(path.join(__dirname, 'out')));

app.listen(port, '0.0.0.0', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server running in port ${port}`);
})
