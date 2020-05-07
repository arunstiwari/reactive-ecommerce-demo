const express = require('express');
const orderRouter = require('./order');
require('dotenv').config();

const ORDER_SERVICE_PORT = process.env.ORDER_SERVICE_PORT || 3100 ;
const app = express();

console.log('---process ---',process.env);
app.use(express.json());

const {orderSubscriber} = require('./subscriber');

app.use('/orders', orderRouter);

app.use('/', (req,res) => {
    res.status(200).json({data: 'Order service is up'});
})

app.listen(ORDER_SERVICE_PORT, () => {
    console.log(`OrderService is running on port ${ORDER_SERVICE_PORT}`);
})