const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 8000
const cors = require("cors")
const helmet = require("helmet")


app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// <-- Database Connection -->
const dbConnect = require("./config/dataBase")
dbConnect()

// <-- Import Route -->
const paymentRoute = require("./routes/Payment.routes")

// <-- API Mount -->
app.use("/api/v1/payment", paymentRoute)

// <-- Server Start -->
app.listen(PORT, ()=>{
    console.log("Server listening on port number " + PORT);
})

// <-- Default route -->
app.get("/", (req, res) => {
    res.send("Hello Ji ❤️")
})
