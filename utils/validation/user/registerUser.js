const Validator = require('validator');
const isEmpty = require('../../isEmpty');

module.exports = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be from 2 to 30 characters long!';
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Full name is required!';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email address';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email address is required!';
    }

    if (!Validator.isLength(data.password, { min: 8 })) {
        errors.password = 'Password must be at least 8 characters long!'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required!';
    }
    
    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords do not match!';
    }
    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Please confirm your password!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};