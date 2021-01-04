const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: [String]
    },

    activated: {
        type: Boolean,
        default: false
    },

    disabled: {
        type: Boolean,
        default: false
    },

    idUrl: {
        type: String,
    },

    lastSeen: {
        type: Date
    },

    createdAt: {
        type: Date,
        default: new Date()
    },

    updated: {
        type: Date
    },

    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'store'
    }
});

module.exports = mongoose.model('Seller', SellerSchema);