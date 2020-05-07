const redis = require('redis');
const PaymentService = require('./payment.service');
const {REDIS_OPTIONS}  = require('./publisher');

const subscriber = redis.createClient(REDIS_OPTIONS);

const paymentService = new PaymentService();

subscriber.on('message', (channel, validatedOrder) => {
    const order = JSON.parse(validatedOrder)
    console.log('2.OrderValidated : ', order.data);
    paymentService.processPayment(JSON.parse(order.data));
})

subscriber.subscribe('orderValidated');

module.exports = {subscriber};