const express = require('express');
const router = express.Router();
const Passport = require('passport');

const Comment_controller = require('../controllers/comments_controller');


router.post('/create', Passport.checkAuthentication, Comment_controller.create);
router.get('/destroy/:id', Passport.checkAuthentication, Comment_controller.destroy);
module.exports = router;