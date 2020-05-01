const {publisher} = require('./publisher');

class ShippingService {

    shipOrder = (order) => {
        //Fetch the shipping address from the customer service
        const custAddress = {custId: 'cust-1000', address: {
            city: 'Mumbai',
            state: 'MH',
            zipCode: '111111111',
            street: 'Street 1',
            name: 'Customer 1'
        }};

        const shippedData = {
            ...custAddress,
            courierDetail: {
                'shippedTime': new Date().toISOString(),
                'name': 'XYZ Courier'
            }
        };
        // Trigger shippedEvent
        publisher.publish('orderDispatched', JSON.stringify(shippedData))
    }
}

module.exports = ShippingService;