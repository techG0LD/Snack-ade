const snacks = require('express').Router()
const db = require('../models')
const {Op} = require('sequelize')
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


//INDIVIDUAL SNACK PAGE 
snacks.get('/:name', async (req,res) => {
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




//Post new Snack
snacks.post('/', async(req,res) => {
    console.log(req.body.name)  //value is shown in backend/api data

    const newSnack = await Snack.create(req.body)


      res.redirect(`http://localhost:3000/snacks/${req.body.name}`)

})

//UPDATE A Sncak
snacks.put('/:name', async(req,res) => {
    const {name} = req.params
    console.log(req.body)
    try{
        const updatedSnack= await Snack.update(req.body, {
            where: {
                name: name
            }
        });
        res.redirect(`http://localhost:3000/snacks/${req.body.name}`)
    } catch(error) {
        res.status(500).json(error)
    }
})



//delete snack
snacks.delete('/:name', async(req,res) => {
    const {name} = req.params
    console.log(name)

    try{
        const deleteSnack= await Snack.destroy({
            where: {
                name: name
            }
        });
        res.redirect('http://localhost:3000/')
        //  res.redirect('http://localhost:4005/recipes')   for testing on device (not deployed)
        
        // res.status(200).json({
        //     message: Successfully deleted restaurant id ${id},})
    } catch(error) {
        res.status(500).json(error)
    }


})



module.exports = snacks