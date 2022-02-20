const validator = require("email-validator");

module.exports = {
    validateUsersRegistration: (req, res, next) => {
        const {email, passwordOne, passwordTwo} = req.body

        const validEmail = validator.validate(email);

        if(!validEmail) return res.send({message: "Email is OK!"})
        if(passwordOne !== passwordTwo) return res.send({message: "Passwords does not match!"})
        
        next()
    },

    // // validateUsersMoney: (req, res, next) => {
    // //     const {money, price} = req.body
        
    // //     if(money < price) return res.send({error: true, message: "You don't have enought money."})
        
    //     next()
    // },

  
       
    
   
}