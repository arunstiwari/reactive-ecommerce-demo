const redis = require('redis');

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const REDIS_OPTIONS = {
    host: REDIS_HOST,
    port: REDIS_PORT
}


const orderPublisher = redis.createClient(REDIS_OPTIONS);


module.exports = {orderPublisher};