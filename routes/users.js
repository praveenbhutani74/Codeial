const express = require('express');
const router = express.Router();

const user_contrller = require("../controllers/users_controller")

router.get('/profile', user_contrller.profile);

module.exports = router;