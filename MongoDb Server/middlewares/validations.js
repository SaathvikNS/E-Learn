const { check, validationResult, } = require('express-validator');

exports.signupvalidation = [
    check("name").trim().not().isEmpty().withMessage("Enter Name!").isLength({min:3, max:20}).withMessage("Name must be 3 to 20 characters long."),
    check("email").normalizeEmail().trim().not().isEmpty().withMessage("Enter Email!").isEmail().withMessage("Enter valid email!"),
    check("password").trim().not().isEmpty().withMessage("Enter Password!").isLength({min:8, max:20}).withMessage("Password must be 8 to 20 characters long.")
]

exports.loginvalidation = [
    check('email').normalizeEmail().trim().not().isEmpty().withMessage("Enter Email!").isEmail().withMessage("Enter valid email!"),
    check("password").trim().not().isEmpty().withMessage("Enter Password!").isLength({min:8, max:20}).withMessage("Password must be 8 to 20 characters long.")
]

exports.validate = (req, res, next) => {
    const error = validationResult(req).array()
    if(!error.length) return next()

    res.status(400).send({success: false, error: error[0].msg})
}