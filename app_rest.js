
const express = require('express');
const { sequelize, Users } = require('./models');
const cors = require('cors');

const filmRout = require('./routes/filmRoute');
const userRout = require('./routes/userRoute');
const zanrRout = require('./routes/zanrRoute');
const roleRout = require('./routes/roleRoute');

const app = express();

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

app.listen({ port: 8090 }, async () => {
    await sequelize.authenticate();
    console.log('Connection established - Rest API');
});