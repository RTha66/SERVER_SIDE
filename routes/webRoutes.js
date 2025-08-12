const express = require('express');
const router = express.Router();

const db = require('../config/db');
const pController = require('../controllers/productController');

router.get('/', pController.getProductsView);

module.exports = router;