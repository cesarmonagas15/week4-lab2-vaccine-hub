const {UnauthorizedError, BadRequestError} =require('../utils/errors')
const db = require("../db")

class User {
    static async login(credentials){




        throw new UnauthorizedError("Invalid email/password combination")
    }

    static async register(credentials){
        
        const requireFields = ["email", "password","location", "date"]
        requireFields.forEach( field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }


        const lowerCasedEmail = credentials.email.toLowerCase()

        const result = await db.query( ` 
        INSERT INTO users (
            email,
            password,
            location,
            date)

            VALUES($1, $2, $3, $4)
            RETURNING id, email, location, date;
        )`, [lowerCasedEmail, credentials.password, credentials.location, credentials.date])

        const user = results.rows[0]
        return user


    }

    static async fetchUserByEmail(email) {
        if (!email){
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }
}

module.exports = User

