exports.otpMailTemplate = (otp) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
            * { box-sizing: border-box; }
            body {
                background-color: #fafafa;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .wrapper {
                width: 40vw;
                min-width: 350px;
                border-radius: 40px;
                overflow: hidden;
                box-shadow: 0px 7px 22px 0px rgba(0, 0, 0, .1);
            }
            .header_container {
                background-color: #0fd59f;
                width: 100%;
                height: 60px;
            }
            .header {
                font-size: 23px;
                font-family: 'Open Sans';
                height: 60px;
                line-height: 60px;
                margin: 0;
                text-align: center;
                color: white;
            }
            .content_container {
                width: 100%;
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                background-color: #fff;
                padding: 15px;
            }
            .content {
                font-size: 15px;
                text-align: center;
                color: #343434;
                margin-top: 0;
            }
            .otp_container {
                display: flex;
                width: 60%;
                padding: 20px;
                justify-content: center;
            }
            .otp{
                text-align: center;
                font-size: 50px;
                font-family: 'Open Sans';
                font-weight: bolder;
                letter-spacing: 10px;
            }
            .footer {
                font-size: 15px;
                text-align: center;
                color: #343434;
                margin-top: 0;
            }
    
            .text-title {
            font-family: 'Open Sans';
            }
            .text-center {
            text-align: center;
            }
            .text-italic {
            font-style: italic;
            }
            .opacity-30 {
            opacity: 0.3;
            }
            .mb-0 {
            margin-bottom: 0;
            }
        </style>
    </head>
    <body>
        
        <div class="wrapper">  
            <div class="header_container">
                <h1 class="header">Verify your E-mail</h1>
            </div>
            <div class="content_container">
                <p class="content text-title">
                    Your One-Time-Password is
                </p>
                <div class="otp_container">
                    <span class="otp">${otp}</span>
                </div>
                <p class="footer text-italic opacity-30 text-title mb-0">Verification code is valid only for 1 hour</p>
            </div>
        </div>
    </body>
    </html>`
}

exports.welcomeMail = (user) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
            * { box-sizing: border-box; }
            body {
                background-color: #fafafa;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .wrapper {
                width: 100%;
                min-width: 350px;
            }
            .header_container {
                background-color: #0fd59f;
                width: 100%;
                height: 60px;
            }
            .header {
                font-size: 23px;
                font-family: 'Open Sans';
                height: 60px;
                line-height: 60px;
                margin: 0;
                text-align: center;
                color: white;
            }
            .content_container {
                width: 100%;
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                background-color: #fff;
                padding: 15px;
            }
            .content {
                font-family: 'Open Sans';
                font-size: 15px;
                text-align: center;
                color: #343434;
                margin-top: 0;
            }
            .otp_container {
                display: flex;
                width: 60%;
                padding: 20px;
                justify-content: center;
            }
            .otp{
                text-align: center;
                font-size: 50px;
                font-family: 'Open Sans';
                font-weight: bolder;
                letter-spacing: 10px;
            } 
        </style>
    </head>
    <body>
        
        <div class="wrapper">  
            <div class="header_container">
                <h1 class="header">Welcome ${user}</h1>
            </div>
            <div class="content_container">
                <p class="content">
                    Thankyou for choosing our platform. Hope we have a great time together for a long time...
                </p>
                <div class="otp_container">
                    <h1 class="otp">Welcome</h1>
                </div>
            </div>
        </div>
    </body>
    </html>`
}

exports.forgotPasswordMail = (url) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
            *{
                box-sizing: border-box;
            }
            body {
                background-color: #fafafa;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .wrapper {
                margin: none;
                width: 100%;
                min-width: 350px;
            }
            .header_container {
                background-color: #0fd59f;
                width: 100%;
                height: 60px;
            }
            .header {
                font-size: 23px;
                font-family: 'Open Sans';
                height: 60px;
                line-height: 60px;
                margin: 0;
                text-align: center;
                color: white;
            }
            .content_container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                background-color: #fff;
                padding: 15px;
            }
            .content {
                font-family: 'Open Sans';
                font-size: 15px;
                text-align: center;
                color: #343434;
            }
            .otp_container {
                display: flex;
                width: 60%;
                padding: 20px;
                justify-content: center;
            }
            .button{
                height: 35px;
                width: 150px;
                border: none;
                overflow: hidden;
                background-color: #0fd59f;
                border-radius: 4px;
                color: white;
                font-size: 20px;
                font-family: 'Open Sans';
                font-weight: 700;
                text-decoration: none;
                text-align: center;
                line-height: 35px;
            }
            .button:hover{
                background-color: #1fe5af;
                cursor: pointer;
            }
            .otp{
                text-align: center;
                font-size: 50px;
                font-family: 'Open Sans';
                font-weight: bolder;
                letter-spacing: 10px;
            }
        </style>
    </head>
    <body>
        
        <div class="wrapper">  
            <div class="header_container">
                <h1 class="header">Reset Password</h1>
            </div>
            <div class="content_container">
                <p class="content text-title">
                    Click below to reset your password
                </p>
                <div class="otp_container">
                    <a href="${url}" class="button">Click here</a>
                </div>
            </div>
        </div>
    </body>
    </html>`
}

exports.resetSuccessMail = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
            * { box-sizing: border-box; }
            body {
                background-color: #fafafa;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .wrapper {
                width: 100%;
                min-width: 350px;
            }
            .header_container {
                background-color: #0fd59f;
                width: 100%;
                height: 60px;
            }
            .header {
                font-size: 23px;
                font-family: 'Open Sans';
                height: 60px;
                line-height: 60px;
                margin: 0;
                text-align: center;
                color: white;
            }
            .content_container {
                width: 100%;
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                background-color: #fff;
                padding: 15px;
            }
            .content {
                font-family: 'Open Sans';
                font-size: 15px;
                text-align: center;
                color: #343434;
                margin-top: 0;
            }
            .otp_container {
                display: flex;
                width: 60%;
                padding: 20px;
                justify-content: center;
            }
            .otp{
                text-align: center;
                font-size: 50px;
                font-family: 'Open Sans';
                font-weight: bolder;
                letter-spacing: 10px;
            } 
        </style>
    </head>
    <body>
        
        <div class="wrapper">  
            <div class="header_container">
                <h1 class="header">Password Reset Successfull</h1>
            </div>
            <div class="content_container">
                <p class="content">
                    Your password has been reset successfully.<br>You can now login using your new password.
                </p>
            </div>
        </div>
    </body>
    </html>`
}