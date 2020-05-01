const redis = require('redis');

const publisher = redis.createClient();

module.exports = {publisher};