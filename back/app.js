const cors = require('cors')
const express = require("express")
const app = express()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.listen(4000)

mongoose.connect("mongodb+srv://Vitalzukas:Vitalzukas@cluster0.msty5.mongodb.net/finalAssignmentDB?retryWrites=true&w=majority")
    .then(res => {
        console.log('DB is running. Super!')
    }).catch(error => {
    console.log('DB is not running.', error)
})

const router = require("./routes/main")
app.use("/", router)
