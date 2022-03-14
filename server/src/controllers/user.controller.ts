"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../models/User");
export async function getUsers(req, res) {
    const { email } = req.query;
    const { password } = req.query;
    if (email != undefined && password != undefined) {
        const query = {
            email: email,
            password: password
        };
        await Users_1.default.findOne(query)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                return res.json({ message: 'Error deleting user by Id and password' });
            });
    } else {
        await Users_1.default.find()
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                return res.json({ message: 'Error getting all users' });
            });
    }
    return res;
}

export async function getUser(req, res) {
    const { id } = req.params;
    await Users_1.default.findById(id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return res.json({ message: 'Error getting user' });
        });
    return res;
}

export async function createUser(req, res) {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    const newUser = {
        username: username,
        email: email,
        password: password,
        role: role
    };
    //console.log(newUser);
    const user = new Users_1.default(newUser);
    await user.save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return res.json({ message: 'Error creating user' });
        });
    return res;
}

export async function deleteUser(req, res) {
    const { id } = req.params;
    await Users_1.default.findByIdAndRemove(id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return res.json({ message: 'Error deleting user' });
        });
    return res;
}

export async function updateUser(req, res) {
    const { id } = req.params;
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    try {
        const updatedUser = await Users_1.default.findByIdAndUpdate(id, {
            username,
            email,
            password,
            role
        }, { new: true });
        return res.json(updatedUser);
    } catch (err) {
        return res.json({ message: 'Error updating user' });
    }
}
