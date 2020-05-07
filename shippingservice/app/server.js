const express = require('express');
require('dotenv').config();

const SHIPPING_SERVICE_PORT = process.env.SHIPPING_SERVICE_PORT || 5000;

const subscriber = require('./shipping/subscriber');

const app = express();

app.use('/' , (req,res) => {
    res.status(200).json({data: 'Shipping service is up'});
})

app.listen(SHIPPING_SERVICE_PORT, () => {
    console.log(`---Shipping Service is listening on the port ${SHIPPING_SERVICE_PORT}----`);
})