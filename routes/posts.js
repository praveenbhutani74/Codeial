const express = require('express');
const router = express.Router();
const Passport = require('passport');

const Post_controller = require('../controllers/posts_controller');


router.post('/create', Passport.checkAuthentication, Post_controller.create);
router.get('/destroy/:id', Passport.checkAuthentication, Post_controller.destroy);

module.exports = router;