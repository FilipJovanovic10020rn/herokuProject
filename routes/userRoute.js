const { sequelize, User } = require('../models');
const { newUserValidation, updateUserValidation } = require("../validator");
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ msg: err });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

        if (err) return res.status(403).json({ msg: err });

        req.user = user;

        next();
    });
}

// route.use(authToken);


route.get('/users', (req, res) => {

    User.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.get('/users/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/users', (req, res) => {

    const validEntry = newUserValidation.validate(req.body);

    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }
    else{
        const obj = {
            name: req.body.name, 
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            lastname: req.body.lastname
        }
    //if(obj.name != null && obj.password != null && obj.email != null && obj.lastname != null && obj.username != null ){
    User.create(obj)
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    }
    
});
route.put('/users/:id', (req, res) => {


    const validEntry = updateUserValidation.validate(req.body);

    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }
    else{
    User.findOne({ where: { id: req.params.id } })
        .then( usr => {
            if(req.body.username != null)
            usr.username = req.body.username;
            if(req.body.email != null)
            usr.email = req.body.email;
            if(req.body.password != null)
            usr.password = bcrypt.hashSync(req.body.password, 10);

            usr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(400).json({msg: "No such user"} ));
        })
        .catch( err => res.status(400).json({msg: "No such user"} ));
    }
});

route.delete('/users/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then( usr => {
            usr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
    
});

module.exports = route;