const request = require('supertest');
const app = require('../app');
const {Post} = require('../db/models')

describe("The index route", ()=>{
    beforeAll(()=>{
        return Post.bulkCreate([
            {"text": "hello I'm a post"},
            {"text": "hello I'm a post too!"},
            {"text": "hello I'm a post also"}
        ]);
    })
    afterAll(()=>{
        return Post.truncate();
    })
    test("does it return an array of posts", ()=>{
        return request(app)
            .get('/posts')
            .then((response)=>{
                expect(response.body.status).toBe(200)
                expect(response.body.data.length).toBe(3)
            })
    })
})