const Console = require("console");
const console = require("console");

const getAllUsers = (req, res) => {

    console.log('Received get users request (no params)')
    console.log(req.params);
    console.log(req.body);

    res.json('Ok | GET');
}

const createUser = (req, res) => {

    console.log('Received post user request (body expected)')
    console.log(req.params);
    console.log(req.body);

    res.json('Ok | POST');

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