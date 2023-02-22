require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db/models');
const postController = require('./controllers/postController')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/posts', postController)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("express is running, better go catch it!")
})