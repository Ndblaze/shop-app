const Validator = require('validator');
const isEmpty = require('../isEmpty');

module.exports = (data) => {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.category = !isEmpty(data.category) ? data.category : '';
    data.imageUrl = !isEmpty(data.imageUrl) ? data.imageUrl : [];

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Product name is required!';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Product description is required!';
    }

    if (!Validator.isNumeric(data.price.toString()) || parseInt(data.price.toString()) <= 0) {
        errors.price = 'Invalid price!';
    }

    if (Validator.isEmpty(data.price.toString())) {
        errors.price = 'Product price is required!';
    }

    if (Validator.isEmpty(data.category)) {
        errors.category = 'Product category is required!';
    }

    if (data.imageUrl.length === 0) {
        errors.imageUrl = 'Please upload at least one image for your product';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};