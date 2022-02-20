const usersDb = require('../models/usersSchema')
//const itemsDb = require('../schemas/itemsSchema')
const {nanoid} = require('nanoid')

module.exports = {
    registerUser: async (req, res) => {
        const {email, passwordOne} = req.body
        const userExists = await usersDb.findOne({email})

        if(!!userExists) return res.send({message: "Email already registered."})

        const user = new usersDb
        user.email = email
        user.password = passwordOne
        user.secret = nanoid()
        user.money = 1000
        await user.save()
        res.send({userRegistered: true, user})
    },
    loginUser: async (req, res) => {
        const {email, password} = req.body
        const user = await usersDb.findOne({email, password})
        if(!!user) {
            res.send({loggedIn: true, user})
        } else {
            res.send({loggedIn: false, message: "Bad credentials."})
        }
    },
   
}