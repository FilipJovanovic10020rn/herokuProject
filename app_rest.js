
const express = require('express');
const { sequelize, Users } = require('./models');
const cors = require('cors');



const joi = require('joi');
const http = require('http');
const { Server } = require("socket.io");







const filmRout = require('./routes/filmRoute');
const userRout = require('./routes/userRoute');
const zanrRout = require('./routes/zanrRoute');
const roleRout = require('./routes/roleRoute');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'PUT'],
        credentials: true
    },
    allowEI03: true
});







var corsOptions = {
    origin: '*',
    // origin: "http://localhost:8080",
    optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));

app.use('/admin', filmRout);
app.use('/admin', userRout);
app.use('/admin', zanrRout);
app.use('/admin', roleRout);



function authSocket(msg, next){
    if(msg[1].token == null){
        next(new Error('Not authentichated'))
    }
    else{
        jwt.verify(msg[1].token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) {
                next(new Error(err));
            }
            else{
                msg[1].user = user;
                next();
            }
        });
    }
}

io.on('connection', socket => {
    socket.use(authSocket);

    socket.on('comment', msg =>{
        Film.findOne({ where: { id: msg.id } })
        .then( film => {
            film.description = msg.description;
            film.rating = msg.rating;
            //film.UserId= req.user.id
            
            film.save()
                .then( rows => io.emit('comment', JSON.stringify(rows)) )
                // .catch( err => res.status(400).json({msg: "No such film1"}) );
                .catch( err => socket.emit('error', err.message));
        })
        .catch( err => socket.emit('error', err.message) );
    });
    socket.on('error', err => socket.emit('error', err.message));
});


app.listen({ port: 8090 }, async () => {
    await sequelize.authenticate();
    console.log('Connection established - Rest API');
});