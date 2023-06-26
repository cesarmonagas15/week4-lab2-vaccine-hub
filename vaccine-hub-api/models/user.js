const {UnauthorizedError} =require('../utils/errors')
const db = require("../db")

class User {
    static async login(credentials){




        throw new UnauthorizedError("Invalid email/password combination")
    }

    static async register(credentials){

    }
}

module.exports = User

