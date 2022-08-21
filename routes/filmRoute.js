const { sequelize, Film } = require('../models');
const { newFilmValidation, updateFilmValidation } = require("../validator");
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


route.get('/films', (req, res) => {

    Film.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.get('/films/:id', (req, res) => {

    Film.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/films', (req, res) => {

    const validEntry = newFilmValidation.validate(req.body);

    if(validEntry.error){
        es.status(422).json({ msg: validEntry.error.message })
    }
    else{
    Film.create({ 
        name: req.body.name, 
        description: req.body.description,
        rating: req.body.rating,
        trajanje: req.body.trajanje,
        UserId: req.user.id
     })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    }
});
route.put('/films/:id', (req, res) => {


    const validEntry = updateFilmValidation.validate(req.body);
    // if(validEntry.error){
    //     res.status(422).json({ msg: validEntry.error.message })
    // }
    if(false){}
    else{
    Film.findOne({ where: { id: req.params.id } })
        .then( film => {
            film.description = req.body.description;
            film.rating = req.body.rating;
            //film.UserId= req.user.id
            
            film.save()
                .then( rows => res.json(rows) )
                // .catch( err => res.status(400).json({msg: "No such film1"}) );
                .catch( err => res.status(400).json({msg: JSON.stringify(film)}));
        })
        .catch( err => res.status(400).json({msg: "No such film2"}) );
    }
});

route.delete('/films/:id', (req, res) => {

    Film.findOne({ where: { id: req.params.id } })
        .then( film => {
            film.destroy()
                .then( rows => res.json(rows) )
                .catch( err =>  res.status(500).json(err) );
        })
        .catch( err =>  res.status(500).json(err) );
    
});

module.exports = route;