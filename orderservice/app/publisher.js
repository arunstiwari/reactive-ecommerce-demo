const redis = require('redis');

const orderPublisher = redis.createClient();


module.exports = {orderPublisher};