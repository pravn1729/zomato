let logger = require('../helpers/logger');
import db from '../models';

let service = {};

service.getOrders = async () => {
    return await db.Order.findAll({});
};

module.exports = service;