const { sequelize, Zanr } = require('../models');
const { newZanrValidation, updateZanrValidation } = require("../validator");
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


route.get('/zanrs', (req, res) => {

    Zanr.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.get('/zanrs/:id', (req, res) => {

    Zanr.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/zanrs', (req, res) => {

    const validEntry = newZanrValidation.validate(req.body);

    if(validEntry.error){
        es.status(422).json({ msg: validEntry.error.message })
    }
    else{
    Zanr.create({ 
        tipZanra: req.body.tipZanra, 
        FilmId: req.body.FilmId
     })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    }
});
route.put('/zanrs/:id', (req, res) => {


    const validEntry = updateZanrValidation.validate(req.body);

    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }
    else{
    Zanr.findOne({ where: { id: req.params.id } })
        .then( zan => {
            zan.tipZanra = req.body.tipZanra;
            zan.FilmId = req.body.FilmId;

            zan.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(400).json({msg: "No such zanr"}) );
        })
        .catch( err => res.status(400).json({msg: "No such zanr"}) );
    }
});

route.delete('/zanrs/:id', (req, res) => {

    Zanr.findOne({ where: { id: req.params.id } })
        .then( zan => {
            zan.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
    
});

module.exports = route;