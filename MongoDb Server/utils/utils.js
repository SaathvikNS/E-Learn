const nodemailer = require('nodemailer');
require('dotenv').config();
const crypto = require('crypto');

exports.generateOtp = () => {
    let otp = ''
    for (let i = 0; i < 6; i++) {
        const randVal = Math.round(Math.random() * 9)
        otp = otp + randVal;
    }
    return otp;
}

exports.mailTransport = () => nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    }
  });

exports.createRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomBytes(30, (err, buff) => {
    if(err) reject(err);

    const token = buff.toString('hex');
    resolve(token)
  })
})