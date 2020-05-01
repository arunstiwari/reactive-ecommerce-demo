const redis = require('redis');
const {orderPublisher} = require('./publisher');
const OrderValidatorService = require('./order/order.validator');

const orderValidatorService = new OrderValidatorService();

const orderSubscriber = redis.createClient();
const paymentConfirmedSubscriber = redis.createClient();
const orderDispatchedSubscriber = redis.createClient();

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