const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ganeshshatrugna:rj8DyBUfzjaTdO2k@mornon.gdze2yg.mongodb.net/userdetails')
    .then(() => { console.log("Database gg connected") })
    .catch((error) => { console.log(error) })

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

