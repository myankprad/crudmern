const express = require("express")
const connection = require("./congig/db.js")
const app = express()
const cors = require('cors')

const userRoutes = require("./route/userRoutes.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection()

app.use(cors())



app.use("/", userRoutes)

module.exports = app;



 