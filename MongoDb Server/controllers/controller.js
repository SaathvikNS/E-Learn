const User = require('../model/userSchema');
const verificationtoken = require('../model/verificationtoken');
const ResetToken = require('../model/resetToken');
const jwt = require('jsonwebtoken');
const { generateOtp, mailTransport, createRandomBytes } = require('../utils/utils');
const { otpMailTemplate, welcomeMail, forgotPasswordMail, resetSuccessMail, } = require('../utils/emailtemplates');
const { isValidObjectId } = require('mongoose');
require('dotenv').config();

exports.createUser = async (req, res) =>  {
    const {name, email, password} = req.body;
    const user = await User.findOne({email})
    if(user) return res.status(400).send({success: false, error: "User email already registered"})

    const newUser = new User({
        name,
        email,
        password
    })

    const otp = generateOtp();
    
    const verificationToken = new verificationtoken({
        owner: newUser._id,
        token: otp,
    })

    await verificationToken.save();
    await newUser.save();

    mailTransport().sendMail({
        from: "noreply@gmail.com",
        to: newUser.email,
        subject: "Verification Code",
        html: otpMailTemplate(otp),
    })

    res.send({success: true, user: {name: newUser.name, email: newUser.email, id: newUser._id, verified: newUser.verified}});
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email})
    if(!user) return res.status(400).send({success: false, error: 'User not found!'});

    const isMatched = await user.comparePassword(password);
    if(!isMatched) return res.status(401).send({success: false, error: 'Email/Password does not match'});

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    })

    res.status(200).send({success: true, user: {name: user.name, email: user.email, id: user._id, token}})
}

exports.verifyemail = async (req, res) => {
    const {userid, otp} = req.body
    if(!userid || !otp) return res.status(400).send({success: false, error: 'Invalid request! Missing Parameters'})

    if(!isValidObjectId(userid)) return res.status(400).send({success: false, error: 'Invalid User Id!'})

    const user = await User.findById(userid)
    if(!user) return res.status(400).send({success: false, error: 'User not found.'})

    if(user.verified) return res.status(401).send({success: false, error: 'User already verified.'})

    const token = await verificationtoken.findOne({owner: user._id})
    if(!token) return res.status(400).send({success: false, error: "OTP not generated or is expired"})

    const isMatched = await token.compareToken(otp)
    if(!isMatched) return res.status(400).send({success: false, error: "Enter the valid OTP"})

    user.verified = true;

    await verificationtoken.findByIdAndDelete(token._id);
    await user.save()

    mailTransport().sendMail({
        from: "noreply@gmail.com",
        to: user.email,
        subject: "Welcome On-board",
        html: welcomeMail(user.name),
    })

    res.status(200).send({success: true, justification: "User verified successfully!"})
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    if(!email) return res.status(400).send({success: false, error: "Please enter the email!"})

    const user = await User.findOne({email});
    if(!user) return res.status(400).send({success: false, error: "User not found, please enter a valid email..."})

    const token = await ResetToken.findOne({owner: user._id});
    if(token) return res.status(400).send({success: false, error: "You can request for another mail after 1 hr!"})

    const randomBytes = await createRandomBytes()
    const resetToken = new ResetToken({owner: user._id, token: randomBytes})
    await resetToken.save();

    mailTransport().sendMail({
        from: "no-reply@gmail.com",
        to: user.email,
        subject: "Reset Password",
        html: forgotPasswordMail(`http://localhost:3000/reset-password?token=${randomBytes}&id=${user._id}`)
    })

    res.status(200).send({success: true, message: "Reset password link sent to your mail."})
}

exports.resetPassword = async (req, res) => {
    const {password} = req.body;

    const user = await User.findById(req.user._id)
    if(!user) return res.status(400).send({success: false, error: "User not found"})

    const passMatched = await user.comparePassword(password)
    if(passMatched) return res.status(400).send({success: false, error: "New password must be different from the old password"});

    if(password.trim().length < 8 || password.trim().length > 20)
    return res.status(400).send({success: false, error: "Password must be 8 to 20 characters long."})

    user.password = password.trim()
    user.save();

    await ResetToken.findOneAndDelete({owner: user._id})

    mailTransport().sendMail({
        from: "noreply@gmail.com",
        to: user.email,
        subject: "Reset Password Successfull",
        html: resetSuccessMail()
    })

    res.status(200).send({success: true, message: "Password Reset Successfull"})
}

exports.getuser = async(req, res) => {
    const {userid} = req.body;
    console.log(userid)

    const user = await User.findById(userid)
    if(!user) return res.status(400).send({success: false, error: 'User not found.'})

    res.status(200).send({username: user.name, email: user.email})
}