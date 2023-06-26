const express = require('express')
const User = require("../models/user")
const router = express.Router()

router.post("/login", async (req,res, next) => {
    try {
        // take user password and try to authenticate

    } catch (error) {
        next(error)
    }
})

router.post("/register", async (req,res,next) =>{
    try {
        // take user email, password, rsvp, # of guests and 

    } catch (error) {
        next(error)
    }
})

module.exports = router

