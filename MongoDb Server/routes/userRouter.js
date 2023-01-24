const router = require('express').Router();
const { createUser, login, verifyemail, forgotPassword, resetPassword } = require('../controllers/controller');
const { signupvalidation, validate, loginvalidation } = require('../middlewares/validations');
const { isResetTokenValid } = require('../middlewares/validresettoken')

router.post('/create', signupvalidation, validate, createUser);
router.post('/verify-email', verifyemail);
router.post('/login', loginvalidation, validate, login);
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', isResetTokenValid, resetPassword)

module.exports = router;