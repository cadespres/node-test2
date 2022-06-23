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
        .then(() => {
            res.redirect('/users');
        })
        .catch(err => {
            console.log(err.stack);
            console.log(err);
        });
}

async function updateUser(req, res) {

    console.log('Received put user request (id and body expected)')
    console.log(req.params);
    console.log(req.body);

    try {
        const id = '62b476599df5b213345aa781';
        await User.findByIdAndUpdate(id, req.body);
    } catch (err) {
        console.log(err);
    }

    res.redirect('/users');
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser
}