require('dotenv').config();
const express = require('express');
const app = express();
const postController = require('./controllers/postController')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/posts', postController)

module.exports = app;