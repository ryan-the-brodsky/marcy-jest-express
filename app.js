require('dotenv').config();
const express = require('express');
const app = express();
const postController = require('./controllers/postController')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use((req, res, next)=>{
    console.log(`Request coming in at ${req.url}`);
    next();
})
app.use('/posts', postController)

module.exports = app;