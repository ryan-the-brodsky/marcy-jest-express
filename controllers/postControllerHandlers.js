const {Post} = require('../db/models');

const postsIndexHandler = async (req, res) => {
    try{
        const posts = await Post.findAll();
        res.json({
            status: 200,
            data: posts
        })
    }catch(err){
        console.log(err)
        res.json({
            status: 500,
            data: err
        })
    }
}

module.exports = {
    postsIndexHandler
}