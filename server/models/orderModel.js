const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Order name required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    userid: {
        type: String,
        required: true
    },
    orderitems: [],
    shippingAddress: {
        type: String,
        required: true
    },
    orderAmount: {
        type: String,
        required: true
    },
    isDelivered: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);