const users = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
// const {Op} = require('sequelize')
const { User } = db

//Get One User
users.get('/:name', async (req,res) => {
    const data =  JSON.parse(req.params.name)  //parse used to json.stringify
    
    const name = data.name
     console.log(name)
    const where = {
            name: {
                [Op.iLike] : name
                }

            }
    try {
        const foundSnack = await Snack.findOne({
            where: {
                name: name
            }
        });
        res.status(200).json(foundSnack)

    }  catch(e) {
        res.status(500).json(e)
    }
})

//UPDATE A Sncak
users.put('/', async(req,res) => {
    const {name} = req.params
    try{
        const updatedSnack= await Snack.update(req.body, {
            where: {
                name: name
            }
        });
        res.redirect(`http://localhost:3000/profile/`)
    } catch(error) {
        res.status(500).json(error)
    }
})


users.post('/', async (req, res) => {
    let {password,role, ...rest} = req.body;
    if(role == "") {
            req.body.role = 'buyer'
        }
    const user = await User.create({
        ...rest,
        role: req.body.role,
        pass: await bcrypt.hash(password,10)
    })
    res.json(user)
})


users.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})



module.exports = users