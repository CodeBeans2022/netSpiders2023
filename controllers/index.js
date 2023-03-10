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

// COMMUNITY ROUTES

route.get('/communities', (req, res) => {
    community.fetchCommunities(req, res);
});

route.get('/community/:id', (req, res) => {
    community.fetchCommunity(req, res);
});

route.post('/community', bodyParser.json(), (req, res) => {
    community.addCommunity(req, res)
});

route.put('/community/:id', bodyParser.json(), (req, res) => {
    community.updateCommunity(req, res);
});

route.delete('/community/:id', (req, res) => {
    community.deleteCommunity(req, res);
});

// ARTICLE ROUTES

route.get('/articles', (req, res) => {
    article.fetchArticles(req, res);
});

route.post('/article', bodyParser.json(), (req, res) => {
    article.addArticle(req, res);
});

route.put('/article/:id', bodyParser.json(), (req, res) => {
    article.updateArticle(req, res);
});

route.delete('/article/:id', (req, res) => {
    article.deleteArticle(req, res);
});

// REVIEWS ROUTES

route.get('/reviews', (req, res) => {
    review.fetchReviews(req, res);
});

route.post('/review', bodyParser.json(), (req, res) => {
    review.addReview(req, res);
});

route.put('/review/:id', bodyParser.json(), (req, res) => {
    review.updateReview(req, res);
});

route.delete('/review/:id', (req, res) => {
    review.deleteReview(req, res);
});

// USER PROFILE ROUTES
// Routes not needed because of user routes
route.get('/profile/:id', (req, res) => {
    profile.fetchUserProfile(req, res);
});

route.post('/profile', bodyParser.json(), (req,res) => {
    profile.addUserProfile(req, res);
});

route.put('/profile/:id', bodyParser.json(), (req, res) => {
    profile.updateUserProfile(req, res);
});

route.delete('/profile/:id', (req, res) => {
    profile.deleteUserProfile(req, res);
});

module.exports = route;