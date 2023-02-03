const express = require('express');
const routes = require('./routes');
const path = require('path');
const database = require('./database');
const mongoose = require('mongoose');

//Express set's
const app = express();
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use('/', routes)

//Database
mongoose.set('strictQuery', false);
database.databaseConnect();

const port = 8080;
app.listen(port, (console.log(`Application online at localhost port: ${port}`)));