const redis = require('redis');
const ShippingService = require('./shipping.service');

const shippingService = new ShippingService();
const subscriber = redis.createClient();

subscriber.on('message', (channel, confirmedOrder) => {
    const order = JSON.parse(confirmedOrder);
    const data = JSON.parse(order.data);

    console.log('4.OrderConfirmed : ',data);
    shippingService.shipOrder(data);
})

subscriber.subscribe('orderConfirmed');

module.exports = {subscriber};