const express = require('express')
const cors = require('cors')
const morgan = require("morgan")
const { PORT } = require("./config")
const authRoutes = require("./routes/auth")


const { NotFoundError } = require("./utils/errors")


const app = express()



app.use(express.json())

app.use((req,res,next) =>{
    return next(new NotFoundError())
})

app.use((err,req,res,next) =>{
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error : {message,status}
    })
})

app.use(cors())

app.get('/', (req,res) =>{
    res.send("<h1>Virtual vaccine hub </h1>")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})