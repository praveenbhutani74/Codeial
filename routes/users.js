const express = require('express');
const router = express.Router();

const user_contrller = require("../controllers/users_controller")






router.get('/profile', user_contrller.profile);
router.get('/sign-up', user_contrller.signUp);
router.get('/sign-in', user_contrller.signIn);
router.post('/create', user_contrller.create);

module.exports = router;