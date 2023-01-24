const express = require('express');
const { validateSigninUser, validateLoginUser, validate } = require('../middlewares/validator');
const { createUser, loginUser } = require('../controllers/controller');

const router = express.Router();

router.post('/create', validateSigninUser, validate, createUser)
router.post('/login', validateLoginUser, validate, loginUser)

module.exports = router;