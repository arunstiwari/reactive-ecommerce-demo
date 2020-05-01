const {publisher} = require('./publisher');

class PaymentService {

    processPayment = (order) => {
        const customerRecord = {customerId: 'cust-100'};// Call customer service to fetch the customer data
        
        //Here we have to call the payment gateway and based on the transaction status we have to raise an event
        const paymentStatus = {orderId: order.id, status: 'Successful'};
        publisher.publish('paymentConfirmed', JSON.stringify({data: paymentStatus}));
        // console.log('---Payment Confirmation event published for order id :'+order.id);
    }
}

module.exports = PaymentService;