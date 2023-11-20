const users = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
 const {Op} = require('sequelize')
const { User } = db





//All users
users.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})


//All user emails
users.get('/emails', async (req, res) => {
    console.log('getting emails')
    const users = await User.findAll()
    // Map the users array to an array of emails
    const emails = users.map(user => user.email)
    // Send the emails array as a JSON response
    res.json(emails)
})



//Get One User
users.get('/:user_id', async (req,res) => {
    const data =  JSON.parse(req.params.user_id)  //parse used to json.stringify
    console.log(data)
    console.log('request - getting user for update Page')
    const id = data.user_id
    //  console.log(email)
    const where = {
            user_id: {
                [Op.iLike] : id
                }

            }
    try {
        const foundUser = await User.findOne({
            where: {
                user_id: id
            }
        });
        res.status(200).json(foundUser)

    }  catch(e) {
        res.status(500).json(e)
    }
})



//Add new user

users.post('/', async (req, res) => {
    
    let {password,role, ...rest} = req.body;
    let newPass = bcrypt.hash(password,10)
    if(role == "") {
            req.body.role = 'buyer'
        }

      console.log(req.body)  
    try{
        const user = await User.create({
        ...rest,
        role: req.body.role,
        pass: newPass
    })
    res.json(user)

    }catch(error){
        res.status(500).json(error)
    }
    
})







//UPDATE A User
users.put('/:user_id', async(req,res) => {
    const {user_id} = req.params
    console.log(req.body.pass)
    // get the current password hash from the database
    const currentHash = await User.findOne({
        where: {
            user_id: user_id
        },
        attributes: ['pass']
    });

    // check if the user exists
    if (!currentHash) {
        // send a 404 response
        res.status(404).json({message: 'User not found'});
        return;
    }

    console.log(currentHash.pass)
    // compare the hashes using bcrypt
    const isMatch = await bcrypt.compare(req.body.pass, currentHash.pass);
    console.log(isMatch)
    // if the hashes do not match, update the password
    if(!isMatch){
        // hash the new password using bcrypt
        req.body.pass = await bcrypt.hash(req.body.pass,10);
    } else {
        req.body.pass = currentHash.pass
    }

    // update the user with the specified properties
    try{
        const updatedUser = await User.update(req.body, {
            where: {
                user_id: user_id
            }
        });
        // redirect to the user profile page
        // res.redirect(`http://localhost:3000/profile/${user_id}`)
        res.redirect(`https://snack-ade.onrender.com/profile/${user_id}`)
    } catch(error) {
        // send a 500 response
        res.status(500).json(error)
    }
})

   







//Delete User
users.delete('/:user_id', async(req,res) => {
    const {user_id} = req.params
    console.log(user_id)

    try{
        const deleteUser= await User.destroy({
            where: {
                user_id: user_id
            }
        });
        // res.redirect('http://localhost:3000/')
        res.redirect('https://snack-ade.onrender.com/')
    } catch(error) {
        res.status(500).json(error)
    }


})

module.exports = users