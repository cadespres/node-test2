const console = require("console");
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const fs = require("fs");
const User = require('./models/user');



const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://mongoadmin:BJm2Bp6b4ZY0nqY5@cluster0.zsf5f.mongodb.net/crm?retryWrites=true&w=majority'

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));


app.listen(3001);

app.use('/users', userRoutes);


app.get('/db-test-save', async (req, res) => {
    let data = fs.readFileSync('./resources/people.json');
    let user = new User(JSON.parse(data));

    console.log(user);
    user.save()
        .then(result => {
            res.json('Ok | save');
        })
        .catch(err => {
            console.log(err);
            res.json('Not ok | save');
        });

    // res.json('Ok | save');
});

app.get('/db-test-read', async (req, res) => {

    User.find()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });


    // res.json('Ok | read');
});

app.get('/db-test-update', async (req, res) => {

    try {
        const id = '62b476599df5b213345aa781';
        await User.findByIdAndUpdate(id, {
            sex: 'Yes, everyday please'
        });
    } catch (err) {
        console.log(err);
    }

    res.json('Ok | update');
});
