const express = require('express');
const router = express.Router()

const { v4: uuidv4 } = require('uuid')

router.post('/placeorder', async (req, res) => {
    const { token, subTotal, currentUser, cartItems } = req.body

})

