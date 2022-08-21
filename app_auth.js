const express = require('express');
const { sequelize, User } = require('./models');
const { newUserValidation, loginUserValidation } = require("./validator.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const film = require('./models/film');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: '*',
    // origin: 'http://127.0.0.1:8000',
    optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));


app.post('/login',(req, res) => {

    const validEntry = loginUserValidation.validate(req.body);

    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }else{
        User.findOne({where : { username: req.body.username} })
        .then( usr => {
            if( usr == null){
                res.status(400).json({msg: "No such user"});
            }
            // else if(usr){
            //     res.status(400).json({msg: "User is not admin"});
            // }
            else{
            if(bcrypt.compareSync(req.body.password, usr.password) || req.body.password == usr.password) {
                const obj = {
                    id: usr.id,
                    username: usr.username,
                    role: usr.role
                };

                const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);

                res.json({token: token});
            }else{
                res.status(400).json({msg: "Incorrect password"});
            }
        }
        })
        .catch( err => res.status(500).json(err))
    }
})

app.post('/register',(req, res) => {
    const validEntry = newUserValidation.validate(req.body);
    console.log(validEntry.error)
  
    if(validEntry.error){
        res.status(422).json({msg: "popuni sve"});
    }else{
        const obj = {
           
            name: req.body.name,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        if(obj.name==null || obj.lastname==null || obj.username==null || obj.email==null || obj.password ==null)
        {
            res.status(400).json({msg: "popuni sve"});
        }
        else{
            User.create(obj)
                .then(rows => {
                    const usr = {
                        username: rows.username,
                        name: rows.name,
                        email: rows.email,
                        lastname: rows.lastname,
                        password: rows.password
                    }
                    const token = jwt.sign(usr,process.env.ACCESS_TOKEN_SECRET)
                    console.log(token)
                    res.json({token: token})
                })
                .catch( err => res.status(500).json)
        }
     }
})

app.listen({port : 9000},async () =>{
    await sequelize.authenticate(),
    console.log("auth started")
})