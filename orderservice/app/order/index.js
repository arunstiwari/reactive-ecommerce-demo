const express = require('express');
const OrderController = require('./order.controller');
const OrderService = require('./order.service');

const orderService = new OrderService();
const orderController = new OrderController(orderService);
const router = express.Router();

router.get('', orderController.get);

router.post('/initiated', orderController.init);

module.exports = router;