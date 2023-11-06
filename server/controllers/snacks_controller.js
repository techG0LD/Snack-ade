const snacks = require('express').Router()
const db = require('../models')
const { Snack } = db


//Get All Snacks
snacks.get('/',async (req,res) => {
    try {
        const foundSnacks = await Snack.findAll()
        res.status(200).json(foundSnacks)
    } catch (err){
        res.status(500).send('Server error')
        console.log(err)
    }
})

module.exports = snacks