const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErr = require('../middleware/catchAssyncError');
const sendToken = require('../utils/jswtToken');

const jwt = require('jsonwebtoken')


router.post("/register", (req, res) => {
    const { name, email, password } = req.body

    try {
        const newUser = new User({ name, email, password })
        newUser.save()
        res.status(200).json({
            success: true,
            message: 'Register success',
            data: newUser
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
})

const secret = "test"

router.post('/login', async (req, res) => {
    console.log('i am apiii', req.body)
    const { email, password } = req.body;
    try {
        console.log('i am apiii', req.body)
        const user = await User.find({ email, password });
        console.log(user)
        const token = jwt.sign({ email: user.email, id: user._id }, secret
            , { expiredIn: "1h" });
        if (user) {
            const currentUser = {
                success: true,
                token: token,
                user,
            }
            res.status(200).send(currentUser);
        } else {
            res.status(400).json({
                message: 'Login Failed'
            })
        }


    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
})

module.exports = router;