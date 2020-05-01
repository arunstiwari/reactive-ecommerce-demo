class OrderValidator {
    validateOrder = (order) => {
        // console.log('--Order has been validated---', order);
        return {data: 'Order Validated'}
    }
}

module.exports = OrderValidator;