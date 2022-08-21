const { sequelize, Role } = require('../models');
const { newRoleValidation, updateRoleValidation } = require("../validator");
const express = require('express');
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


route.get('/roles', (req, res) => {

    Role.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.get('/roles/:id', (req, res) => {

    Role.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/roles', (req, res) => {

    const validEntry = newRoleValidation.validate(req.body);

    if(validEntry.error){
        es.status(422).json({ msg: validEntry.error.message })
    }
    else{
    Role.create({ 
        roleType: req.body.roleType, 
        UserId: req.body.UserId
     })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    }
});
route.put('/roles/:id', (req, res) => {


    const validEntry = updateRoleValidation.validate(req.body);

    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }
    else{
    Role.findOne({ where: { id: req.params.id } })
        .then( rol => {
            rol.roleType = req.body.roleType;

            rol.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(400).json({msg: "No such role"}) );
        })
        .catch( err => res.status(400).json({msg: "No such role"}) );
    }
});

route.delete('/roles/:id', (req, res) => {

    Role.findOne({ where: { id: req.params.id } })
        .then( rol => {
            rol.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
    
});

module.exports = route;