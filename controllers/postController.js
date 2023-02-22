const router = require('express').Router();
const {Post} = require('../db/models');

router.get('/', async(req, res)=>{
    try{
        const posts = await Post.findAll();
        res.json({
            status: 200,
            data: posts
        })
    }catch(err){
        res.send(err);
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const post = await Post.findByPk(req.params.id)
        res.json({
            status: 200, 
            data: post
        })
    }catch(err){
        res.json({
            status: 500,
            data: err
        })
    }
})

router.post('/', async(req, res)=>{
    try{
        const newPost = await Post.create(req.body);
        res.json({
            status: 200,
            data: newPost
        })
    }catch(err){
        res.json({
            status: 500,
            data: err
        })
    }
})

router.put('/:id', async (req, res)=>{
    try{
        await Post.update({ text: req.body.text }, {
            where: {
              id: req.params.id
            }
        });;
        res.json({
            status: 204,
            data: {}
        })
    }catch(err){
        res.json({
            status: 500,
            data: err
        })
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        await Post.destroy({
            where: {
              id: req.params.id
            }
        });
        res.json({
            status: 200,
            data: {}
        })
    }catch(err){
        res.json({
            status: 500,
            data: err
        })
    }
})


module.exports = router;