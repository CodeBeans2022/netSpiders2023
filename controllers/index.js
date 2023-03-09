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

route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});

route.get('/user/:id', (req, res) => {
    user.fetchUsers(req, res);
})

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