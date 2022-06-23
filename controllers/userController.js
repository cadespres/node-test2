const console = require("console");
const User = require("../models/user");

const getAllUsers = (req, res) => {

    console.log('Received get users request (no params)')
    User.find()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
}

const createUser = (req, res) => {

    console.log('Received post user request (body expected)')
    console.log(req.params);
    console.log(req.body);

    let user = new User(req.body);

    console.log(user);
    user.save()
        .then(result => {
            res.redirect('/users');
        })
        .catch(err => {
            console.log(err.stack);
            console.log(err);
        });
}

const updateUser = (req, res) => {

    console.log('Received put user request (id and body expected)')
    console.log(req.params);
    console.log(req.body);

    res.json('Ok | PUT');

}

module.exports = {
    getAllUsers,
    createUser,
    updateUser
}