class OrderController {

    constructor(orderService){
        this.orderService = orderService;
    }

    get = (req, res) => {
        const data =  this.orderService.get();
        return res.status(200).json(data);
    }

    init = (req, res) => {
        // console.log('--Order---', req.body);
        const order = req.body.order;
        const data = this.orderService.orderInitiated(order);
        return res.status(200).json({data: 'Order is being validated'});
    }
}

module.exports = OrderController;