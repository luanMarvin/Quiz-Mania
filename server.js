const express = require('express')
const routes = require('./routes')

const app = express();
app.set('view engine' , 'ejs');
//app.use(express.static(path.join(__dirname, "public")));
//app.use(express.urlencoded({ extended: true }));
app.use('/', routes)

app.listen(8080);