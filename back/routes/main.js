const express = require('express')
const router = express.Router()
const middle = require("../middleware/main")

const controller = require('../controllers/databaseControllers')
const validator = require('../middleware/validators')

const {createProduct, getAll, getSingle, deleteProduct} = require("../controllers/main")
const {registerUser, loginUser} = require("../controllers/databaseControllers")

router.post("/create", middle.validateProduct, createProduct)
router.get("/all", getAll)
router.get("/single/:id", getSingle)
router.get("/delete/:id", deleteProduct)

router.post('/registerUser', validator.validateUsersRegistration, registerUser)
router.post('/loginUser', loginUser)

module.exports = router