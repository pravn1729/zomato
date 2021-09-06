var express = require('express');
var router = express.Router();
let logger = require('../helpers/logger');
let orderService = require('../service/order');

router.get('/', async (req, res) => {
  try {
    let orders = await orderService.getOrders();
    return res.status(200).json({success: true, data: orders });    
  } catch (err) {
    logger.error(err.message);
    return res.status(404).json({success: false, message: err.message});
  }
}); 

module.exports = router;
