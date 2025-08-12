const express = require('express');
const router = express.Router();

const pController = require('../controllers/productController');

// Get all products

router.get('/products', pController.getAllProducts);

// Get product by ID

router.get('/products/:id', pController.getProductById);

// Search product by keyword

router.get('/products/search/:keyword', pController.searchProducts);

// Create product

router.post('/products', pController.createProduct);

// Update product

router.put('/products/:id', pController.updateProduct);

// Soft delete product

router.delete('/products/:id', pController.softDeleteProduct);

// Restore product

router.put('/products/restore/:id', pController.restoreProduct);

module.exports = router;