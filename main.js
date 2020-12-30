const express = require('express');
const passport = require('passport');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

// Load Config
dotenv.config({ path: './config/config.env' });

connectDB();

const users = require('./routes/api/users');
// const carts = require('./routes/api/carts');
const products = require('./routes/api/products');

const app = express();

// Passport config
require('./config/passport');

// Initialize Passport
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', users);
// app.use('/api/carts', carts);
app.use('/api/products', products);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));