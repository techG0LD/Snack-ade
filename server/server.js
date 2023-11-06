//Dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Configuration / MiddleWare
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Controllers
const snacksController = require('./controllers/snacks_controller');
app.use('/api/Snacks', snacksController)

//Listen
app.listen(process.env.PORT || 4005, () => {
    console.log('Server is runnning on port 4005')
})