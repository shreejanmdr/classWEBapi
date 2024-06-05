const router = require('express').Router();
const productController = require('../controllers/productControllers')

router.post('/create', productController.createProduct)

// fetch all products
router.get('/get_all_products', productController.getAllProducts)


//fetch single product
router.get('/get_single_product/:id', productController.getSingleProduct)

//delete single product
router.delete('/delete_product/:id', productController.deleteProduct)


module.exports = router