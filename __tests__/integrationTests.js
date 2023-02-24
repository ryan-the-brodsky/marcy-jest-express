require('dotenv').config();
const { postsIndexHandler } = require('../controllers/postControllerHandlers');
const {Post, sequelize} = require('../db/models')


describe('the route handlers for posts', ()=>{
    beforeAll(()=>{
        return Post.bulkCreate([
            {"text": "I'm a test only post, whoopee!"},
            {"text": "I'm a test only post, whoopee!"},
            {"text": "I'm a test only post, whoopee!"}
        ]);
    });
    afterAll(()=>{
        return Post.truncate();
    })
    test('the index route handler', async()=>{
        // Create fake request and response objects since we're isolating it from the rest of the server
        req = {};
        // We expect the controller to call the .json method on the res object
        // Therefore, we make the method testable by storing its input on the object
        res = {
            "json": function(input){ this.responseObject = input }
        }
        await postsIndexHandler(req, res);
        expect(res.responseObject.status).toBe(200);
        expect(res.responseObject.data.length).toBe(3);
    });
})