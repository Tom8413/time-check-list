const express = require('express');
const _= require('lodash');
const mongoose = require('mongoose');

const timeRoutes = require('./routes/timeRoutes');

const app = express();

app.set('view engine', 'ejs');

const dbURI = "mongodb+srv://tomasz:tomasz@nodetut.jphc8ap.mongodb.net/node-tut?retryWrites=true&w=majority";
mongoose.connect(dbURI)
.then((result) => app.listen(3001))
.catch((err) => console.log(err));


app.get('/', (req, res) => {

    res.render('index');
});

app.use(timeRoutes);

app.use((req, res) => {
    res.status(404).render('404');
})
