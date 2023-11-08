//Dependencies
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const defCurrentUser = require('./middleware/defCurrentUser')
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Configuration / MiddleWare
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.json())
// app.use(express.json());
app.use('/authentication',require('./controllers/auth'))
app.use(express.urlencoded({extended: true}));
app.use(defCurrentUser)

//Controllers
const snacksController = require('./controllers/snacks_controller');
app.use('/api/Snacks', snacksController)

//Listen
app.listen( 4005 || process.env.PORT, () => {
    console.log(`Server is runnning on port ${(4005 || process.env.PORT )}`)
})