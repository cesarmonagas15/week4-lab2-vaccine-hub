require("dotenv").config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 3002

function getDatabaseURI (){
    const dbUser = process.env.DATABASE_USER || "posgress"
    const dbPass = process.env.DATABASE_PASS || "posgress"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "vaccine_hub"


    return process.env.DATABSE_URL || `postgresql://${dbUser}:${dbPass}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

module.exports = {PORT, getDatabaseURI}