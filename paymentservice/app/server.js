const express = require('express');
require('dotenv').config();

const PAYMENT_SERVICE_PORT = process.env.PAYMENT_SERVICE_PORT || 4000;

const app = express();
const {subscriber} = require('./payment/subscriber');

app.use('/', (req,res) => {
    res.status(200).json({data: 'Payment service is running'})
})

app.listen(PAYMENT_SERVICE_PORT, () => {
    console.log(`---Payment service is running on port  ${PAYMENT_SERVICE_PORT}`);
})