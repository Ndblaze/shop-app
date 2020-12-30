const express = require('express');
const passport = require('passport');

const router = express.Router();

const Product = require('../../models/Product');

const validateAddProduct = require('../../utils/validation/addProduct');

// Create product item
router.post('/', passport.authenticate('jwt-user', { session: false }), async (req, res) => {
    console.log(req);
    try {
        const { errors, isValid } = validateAddProduct(req.body);
        if (!isValid) {
            return res.status(406).json(errors);
        }
        const product = new Product({...req.body});
        const newProduct = await product.save();
        return res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
});

module.exports = router;