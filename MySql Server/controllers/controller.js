const { createUser } = require('../database/database');
const bcrypt = require('bcrypt');
const pool = require('../database/conn');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createUser = async (req, res) => {
    const {email, name, password} = req.body;
    const hash = await bcrypt.hash(password, 10);
    try {
        const newUser = await createUser(email, name, hash);
        return res.status(201).send(newUser)
    } catch (err) {
        if(err.code == 'ER_DUP_ENTRY' || err.errno == 1062)
        {
            return res.status(400).json({success: false, error: "mail id already exists"})
        }
    }
}

exports.loginUser = async  (req, res) => {
    const  {email, password} = req.body;

    query = `SELECT * FROM login_db.users WHERE email = "${email}"`;

    pool.query(query, function(error, data){

        if(data.length > 0)
        {
            for(var count = 0; count < data.length; count++)
            {
                const compare = bcrypt.compareSync(password, data[count].password)
                if(compare)
                {
                    pool.query('SELECT * FROM login_db.users where email = ?', email, (err, result) => {
                        if(err){
                            return res.status(400).send({success: false, error: err});
                        }else{
                            const fetchedid = result[0].id;
                            const fetchedemail = result[0].email;
                            const fetchedname = result[0].name;
                            const fetchedpassword = result[0].password;

                            const token = jwt.sign({userId: fetchedid}, process.env.JWT_SECRET_KEY, {
                                expiresIn: '1d'
                            })
                            // res.status(200).send(`Hello! ${fetchedname}\nLogin Successful...\nFetched Details:\nid: ${fetchedid}\nE-mail: ${fetchedemail}\nEncrypted Password: ${fetchedpassword}`);
                            res.status(200).send({success: true, name: fetchedname, email: fetchedemail, id: fetchedid, token})
                        }
                    })
                }
                else
                {
                    res.status(401).send('Incorrect Password');
                }
            }
        }
        else
        {
            res.status(404).send('Incorrect Email Address');
        }
    })
}