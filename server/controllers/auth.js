import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const signup = (req, res, next) => {
    User.findOne({where:{
        email: req.body.email,
    }}).then(dbUser => {
        if(dbUser){
            return res.status(409).json({message: "email already exists"});
        }else if(req.body.email && req.body.password){
            bcrypt.hash(req.body.password, 12, (err, passwordHash) => {
                if(err){
                    return res.status(500).json({message: "couldnt hash the password"});
                }else if(passwordHash){
                    return User.create(({
                        email: req.body.email,
                        name: req.body.name,
                        password: passwordHash,
                    })).then(() => {
                        res.status(200).json({message: "user created"});
                    }).catch(err => {
                        console.log(err);
                        res.status(502).json({message:"error while creating the user"});
                    });
                };
            });
        }else if(!req.body.password){
            return res.status(400).json({message: "password not provided"});
        }else if(!req.body.email){
            return res.status(400).json({message: "email not provided"});
        };
    }).catch(err => {
        console.log('error', err);
    });
};

const login = (req, res, next) => {
    User.findOne({where: {
        email: req.body.email,
    }}).then(dbUser => {
        if(!dbUser){
            return res.status(404).json({message: "user not found"});
        }else{
            bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => {
                if(err){
                    res.status(502).json({message: "error while checking user password"});
                }else if(compareRes){
                    const token = jwt.sign({
                        email: req.body.email }, 'secret', {expiresIn: '1h'
                    });
                    res.status(200).json({message: "user logged in", "token": token});
                }else{
                    res.status(401).json({message: "Invalid Credentials"});
                };
            });
        };
    }).catch( err => {
        console.log('error', err);
    });
};

const isAuth = (req, res, next) => {
    const authHeader = re.get("Authorization");
    if(!authHeader){
        return res.status(401).json({message: "not authenticated"});
    };
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, 'secret');
    }catch(err){
        return res.status(500).json({message: err.message || "could not decode the token"});
    };
    if(!decodedToken){
        res.status(401).json({message: 'unauthorized'});
    }else{
        res.status(401).json({message: "here is your resource"});
    };
};

export { signup, login, isAuth };