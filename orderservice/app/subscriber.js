const redis = require('redis');
const {orderPublisher} = require('./publisher');
const OrderValidatorService = require('./order/order.validator');

const orderValidatorService = new OrderValidatorService();
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const REDIS_OPTIONS = {
    host: REDIS_HOST,
    port: REDIS_PORT
}

const orderSubscriber = redis.createClient(REDIS_OPTIONS);

const paymentConfirmedSubscriber = redis.createClient(REDIS_OPTIONS);
const orderDispatchedSubscriber = redis.createClient(REDIS_OPTIONS);

orderSubscriber.on('message', (channel, orderRequested) => {
    console.log('1.OrderRequested : '+orderRequested);
    const data =orderValidatorService.validateOrder(orderRequested);
    orderPublisher.publish('orderValidated', JSON.stringify({data: orderRequested}));
    // console.log('Order Validated Message has been published');
})

paymentConfirmedSubscriber.on('message', (channel, paymentConfirmed) => {
    console.log('3.PaymentConfirmed : ',JSON.parse(paymentConfirmed));
    orderPublisher.publish('orderConfirmed', JSON.stringify({data: paymentConfirmed}));
})

orderDispatchedSubscriber.on('message', (channel, orderDispatched) => {
    console.log('5.OrderDispatched : ', JSON.parse(orderDispatched));
})

orderSubscriber.subscribe("orderRequested");
paymentConfirmedSubscriber.subscribe('paymentConfirmed');
orderDispatchedSubscriber.subscribe('orderDispatched');
module.exports = {orderSubscriber};