const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../../models/User');

const validateRegisterUser = require('../../utils/validation/user/registerUser');
const validateLoginUser = require('../../utils/validation/user/loginUser');

// Register New User
router.post('/register', async (req, res) => {
    try {
        const { errors, isValid } = validateRegisterUser(req.body);

        if (!isValid) {
            return res.status(406).json(errors);
        }

        const { name, email, password } = req.body;
        
        // Check if user already exists
        const oldUser = await User.findOne({ email: email.toLowerCase() });
        if (oldUser) {
            return res.status(409).json({ email: 'User already exists!' });
        }

        // Hash user password and save
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = new User({
            name: name.toUpperCase(),
            email: email.toLowerCase(),
            password: hash
        });

        const doc = await user.save();
        return res.status(201).json({
            _id: doc._id,
            name: doc.name,
            email: doc.email,
            createdAt: doc.createdAt
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Something went wrong' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { errors, isValid } = validateLoginUser(req.body);
        if (!isValid) {
            return res.status(406).json(errors);
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            errors.email = 'User not registered!';
            return res.status(404).json(errors);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            errors.password = 'Incorrect password!';
            return res.status(401).json(errors);
        }

        const secretOrKey = process.env.SECRET_OR_KEY;

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address1: user.address1,
            address2: user.address2,
            createdAt: user.createdAt
        };

        jwt.sign(payload, secretOrKey, { expiresIn: 30 }, (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: 'Something went wrong' });
            }
            return res.status(202).json({
                msg: 'User logged in',
                token: `Bearer ${token}`
            });
        });
    } catch (err) {}
});

module.exports = router;