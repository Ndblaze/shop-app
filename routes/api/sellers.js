const { Router } = require('express');
const express = require('express');

const router = express.Router();

router.post('/register', (req, res) => {
    return res.send('register seller');
});

module.exports = Router;