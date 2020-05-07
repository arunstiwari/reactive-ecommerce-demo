const redis = require('redis');
const ShippingService = require('./shipping.service');
const {REDIS_OPTIONS} = require('./publisher');
const shippingService = new ShippingService();

const subscriber = redis.createClient(REDIS_OPTIONS);

subscriber.on('message', (channel, confirmedOrder) => {
    const order = JSON.parse(confirmedOrder);
    const data = JSON.parse(order.data);

    console.log('4.OrderConfirmed : ',data);
    shippingService.shipOrder(data);
})

subscriber.subscribe('orderConfirmed');

module.exports = {subscriber};