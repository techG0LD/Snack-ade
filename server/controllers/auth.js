const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {


     // Find all users in the database
     let users = await User.findAll({
        where: {email: req.body.email}
    })

    // Initialize the result variable
    let result = null;
    let correctEmail = null

    // Loop over the users array
    for (const user of users) {
        // Check if the user's password matches the request password
        if (await bcrypt.compare(req.body.password, user.pass)) {
            // Encode the user's id as a token
            result = await jwt.encode(process.env.JWT_SECRET, {id: user.user_id})
            correctEmail = user
            // Break out of the loop
            break;
        }
    }

    // Check if the result is null or not
    if (result === null) {
        // No user matched the password
        res.status(404).json({
            message: `Could not find a user with the provided username and password`})
    }  else {
        // Send the user and the token as a response
        res.json({user: correctEmail, token: result.value})
    }
})






    // console.log('IN HERE')
//     let user = await User.findOne({
//         where: {email: req.body.email}
//     })

//     if(!user || !await bcrypt.compare(req.body.password, user[0].pass)) {
//         res.status(404).json({
//             message: `Could not find a user with the provided username and password`})
//     }  else {
//         const result = await jwt.encode(process.env.JWT_SECRET, {id: user.user_id})
//         res.json({user: user, token: result.value})
//     }
// })

router.get('/profile', async (req, res) => {

         res.json(req.currentUser)
    })
    


module.exports = router