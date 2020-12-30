const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'seller'
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    dateAdded: {
        type: Date,
        default: new Date()
    },

    imageUrl: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);