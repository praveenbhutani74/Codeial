const { request } = require('express');
const express = require('express');
const router = express.Router();

const post_controller=require('../controllers/post_controller');

router.get('/posts',post_controller.posts);

module.exports=router;
