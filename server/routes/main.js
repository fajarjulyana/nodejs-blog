const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
/**
 * GET /
 * HOME
 */
router.get('',(req, res) => {
    const locals = {
        title: "Nodejs Blog",
        description: "Simple Blog created with Nodejs, Express & MongoDb."
    }
    res.render('index', { locals });
});



function insertPostData () {
    Post.insertMany([
        {
            title: "Building a Blog",
            body: "this is a body text"
        },
        {
            title: "Make a Simple Arduino Projects",
            body: "emoticon dot Matrix"
        }
    ])
}

insertPostData();









router.get('/about',(req, res) => {
    res.render('about');
});

module.exports = router;