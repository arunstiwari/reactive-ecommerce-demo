const {orderPublisher} = require('../publisher');

class OrderService {

    get = () => {
        return {data: 'orders endpoint is working'}
    }

    orderInitiated = (order) => {
        // console.log('--order----',order);
        orderPublisher.publish('orderRequested', JSON.stringify(order));
        return {data: 'Order is in validation phase'}
    }
}

module.exports = OrderService;