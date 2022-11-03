const express = require('express');
const _= require('lodash');
const mongoose = require('mongoose');

const timeRoutes = require('./routes/timeRoutes');
const dbURI = require('./MongooseKey');

const app = express();


app.set('view engine', 'ejs');

mongoose.connect(dbURI)
.then((result) => app.listen(3001))
.catch((err) => console.log(err));


app.use(timeRoutes);

app.use((req, res) => {
    res.status(404).render('404');
})
