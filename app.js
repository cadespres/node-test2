const console = require("console");
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.listen(3000);

app.use('/users', userRoutes);


