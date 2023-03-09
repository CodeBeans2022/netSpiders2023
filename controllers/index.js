const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const route = express.Router();
const {User, Community, newsArticle, Reviews, commChatRoom, devChatRoom, Profile} = require('../models');
const user = new User();
const community = new Community();
const profile = new Profile();
const article = new newsArticle();
const review = new Reviews();
const commRoom = new commChatRoom();
const devRoom = new devChatRoom();


// USERS ROUTES

route.get('^/$|/netSpiders', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

route.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
});

route.post('/register', bodyParser.json(), (req, res) => {
    user.createUser(req, res);
});

route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});

route.get('/user/:id', (req, res) => {
    user.fetchUser(req, res);
});

route.put('/user/:id', bodyParser.json(), (req, res) => {
    user.updateUser(req, res);
});

route.delete('/user/:id', (req, res) => {
    user.deleteUser(req, res);
});

// DEVELOPER ROUTES

route.get('/developers', (req, res) => {
    developer.fetchDevelopers(req, res);
});

route.get('developer/:id', (req, res) => {
    developer.fetchDeveloper(req, res);
})

// COMMUNITY ROUTES

route.get('/communities', (req, res) => {
    community.fetchCommunities(req, res);
})

module.exports = route;