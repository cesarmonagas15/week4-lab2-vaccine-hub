const express = require('express')
const User = require("../models/user")
const router = express.Router()

router.post("/login", async (req,res, next) => {
    try {
        // take user password and try to authenticate
        const user = await User.login(req.body)
        return res.status(200).json({user})
    } catch (error) {
        next(error)
    }
})

router.post("/register", async (req,res,next) =>{
    try {
        // take user email, password, rsvp, # of guests and 
        const user = await User.register(req.body)
        return res.status(201).json({user})
    } catch (error) {
        next(error)
    }
})

module.exports = router

