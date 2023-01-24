const { check, validationResult } = require('express-validator');

exports.validateSigninUser  = [
    check('name').trim().not().isEmpty().withMessage("Name missing!").isLength({min: 3, max: 20}).withMessage("Name must be of 3 to 20 characters long..."),
    check('email').normalizeEmail().isEmail().withMessage("Invalid Email!"),
    check('password').trim().not().isEmpty().withMessage("Password missing!").isLength({min: 8, max: 20}).withMessage("Password must be of 8 to 20 characters long...")
];

exports.validateLoginUser = [
    check('email').trim().not().isEmpty().withMessage("Email Missing!").normalizeEmail().isEmail().withMessage("Invalid Email!"),
    check('password').trim().not().isEmpty().withMessage("Password Missing!").isLength({min: 8, max: 20}).withMessage("Password must be of 8 to 20 characters long...")
]

exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
    if(!error.length) return next();
    res.status(400).json({success: false, error: error[0].msg})
}