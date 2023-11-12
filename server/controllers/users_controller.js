const users = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
// const {Op} = require('sequelize')
const { User } = db




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