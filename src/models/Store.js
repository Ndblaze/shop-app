const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { STORE_STATUS } = require('../utils/constants');

const StoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    categories: {
        type: [String],
        required: true
    },

    seller: {
        type: mongoose.Types.ObjectId,
        ref: 'seller'
    },

    itemsInStock: {
        type: Number,
        default: 0
    },

    totalSales: {
        type: Number,
        default: 0
    },

    totalIncome: {
        type: Number,
        default: 0
    },

    returns: {
        type: Number,
        default: 0
    },

    preferredColor: {
        type: String
    },

    domainName: {
        type: String
    },

    status: {
        type: String,
        enum: [STORE_STATUS.ONLINE, STORE_STATUS.OFFLINE, STORE_STATUS.DISABLED],
        default: STORE_STATUS.OFFLINE
    }
});

module.exports = mongoose.model('store', StoreSchema);