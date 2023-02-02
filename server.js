const express = require('express');
const routes = require('./routes');
const path = require('path')

const app = express();
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.urlencoded({ extended: true }));
app.use('/', routes)

const port = 8080;
app.listen(port, (console.log(`Application online at localhost port: ${port}`)));