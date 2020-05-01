const express = require('express');
const subscriber = require('./shipping/subscriber');

const app = express();

app.use('/' , (req,res) => {
    res.status(200).json({data: 'Shipping service is up'});
})

app.listen(5000, () => {
    console.log('---Shipping Service is listening on the port 5000----');
})