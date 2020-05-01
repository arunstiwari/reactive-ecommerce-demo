const express = require('express');

const app = express();
const {subscriber} = require('./payment/subscriber');

app.use('/', (req,res) => {
    res.status(200).json({data: 'Payment service is running'})
})

app.listen(4000, () => {
    console.log('---Payment service is running on port 4000');
})