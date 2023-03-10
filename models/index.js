const db = require('../config');
const { hash, compare, hashSync } = require('bcrypt');
const { createToken } = require('../middleware/authenticatedUser.js');

class User {
    login(req, res) {
        const { emailAdd, userPass } = req.body;
        const verifyUserQuery = `select firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, joinDate from Users where emailAdd = '${emailAdd}';`;
        console.log(emailAdd, userPass);
        db.query(verifyUserQuery, async (err, data) => {
            const userLog = data
            if (err) throw err, console.log(err);
            if ((!data) || (data == null)) {
                res.status(401).json({ 
                    err: 'You have entered the wrong email address' 
                })
            } else {
                console.log(data);
                await compare(userPass, data[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr, console.log(cErr);

                    const jwToken = createToken({
                        emailAdd,
                        userPass
                    });
                    if(cResult) {
                        res.status(200).json({
                            msg: 'Logged In!', jwToken, result: data
                        })
                    } else {
                        res.status(401).json({
                            err: 'You entered an invalid password or have not registered.'
                        });
                    };
                });
            };
        });
    };

    fetchUsers(req, res) {
        const fetchUsersQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, joinDate, userImg from Users;`;

        db.query(fetchUsersQuery, (err, data) => {
            if (err) throw err, console.log(err);
            else res.status(200).json({ 
                results: data 
            });
        });
    };
    fetchUser(req, res) {
        const fetchUserQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, joinDate, userImg from Users where userID = ?;`;

        db.query(fetchUserQuery, [req.params.id], (err, data) => {
            if (err) throw err, console.log(err);
            else res.status(200).json({ 
                results: data 
            });
        });
    };
async createUser(req, res) {
    const details = req.body;

    details.userPass = await hash(details.userPass, 15);

    const user = {
        emailAdd: details.emailAdd,
        userPass: details.userPass
    }

    const createUserQuery = `insert into Users set ?;`;

    db.query(createUserQuery, [details], (err) => {
        if(err) {
            res.status(401).json({err});
        } else {
            const jwToken = createToken(user);

            res.cookie('User found in database!', jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.status(200).json({
                msg: 'A user was saved to database.'
            });
        };
    });
};
updateUser(req, res) {
    const data = req.body;
    if(data.userPass !== null || data.userPass !== undefined)
    data.userPass = hashSync(data.userPass, 15);

    const updateUserQuery = `update Users set ? where userID = ?;`;

    db.query(updateUserQuery, [data, req.params.id], (err) => {
        if(err) throw err, console.log(err);
        res.status(200).json({
            msg: 'User information was updated.'
        });
    });
};
deleteUser(req, res) {
    const deleteUserQuery = `delete from Users where userID = ?;`;

    db.query(deleteUserQuery, [req.params.id], (err) => {
        if(err) throw err, console.log(err);
        res.status(200).json({
            msg: 'User was removed from the database'
        });
    });
};    
};

class Community {
    fetchCommunities(req, res) {
        const fetchAllCommQuery = `select commID, commName from communities;`;

        db.query(fetchAllCommQuery, (err, results) => {
            if(err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchCommunity(req, res) {
        const fetchCommQuery = `select commID, commName from communities where id = ?;`;

        db.query(fetchCommQuery, [req.params.id], (err, results) => {
            if(err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addCommunity(req, res) {
        const addCommQuery = `insert into communities set ?;`;

        db.query(addCommQuery, [req.body], (err) => {
            if(err) {
                res.status(400).json({
                    err: 'Unable to insert a new record'
                }), 
                console.log(err);
            } else {
                res.status(200).json({
                    msg: 'Community Saved.'
                });
            };
        });
    };
    updateCommunity(req, res) {
        const updateCommQuery = `update communities set ? where commID = ?;`;

        db.query(updateCommQuery, [req.body, req.params.id], (err) => {
            if(err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Product updated.'
                });
            };
        });
    };
    deleteCommunity(req, res) {
        const deleteCommQuery = `delete from communities where commID = ?;`;

        db.query(deleteCommQuery, [req.params.id], (err) => {
            if(err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'Community was removed from database!'
            })
        });
    };
};

class newsArticle {
    fetchArticles(req, res) {
        const fetchArticlesQuery = `select articleID, articleTitle, articleText, articleLink from newsArticle;`;

        db.query(fetchArticlesQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({
                results: data
            });
        });
    };

    addArticle(req, res) {
        const addArticleQuery = `insert into newsArticle set ?;`;

        db.query(addArticleQuery, [req.body], (err) => {
            if(err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                });
            } else{
                res.status(200).json({
                    msg: 'Article Saved!'
                });
            };
        });
    };
    updateArticle(req, res) {
        const updateArticleQuery = `update newsArticle set ? where articleID = ?;`;

        db.query(updateArticleQuery, [req.body, req.params.id], (err) => {
            if(err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Article Updated'
                });
            };
        });
    };
    deleteArticle(req, res) {
        const deleteArticleQuery = `delete from newsArticle where articleID = ?;`;

        db.query(deleteArticleQuery, [req.params.id], (err) => {
            if(err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'An article was deleted!'
            });
        });
    };
};

class Reviews {
    fetchReviews(req, res) {
        const fetchReviewsQuery = `select reviewID, userID, rating from Reviews inner join Users using(userID);`;

        db.query(fetchReviewsQuery, (err, results) => {
            if(err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addReview(req, res) {
        const addReviewQuery = `insert into Reviews set ?;`;

        db.query(addReviewQuery, [req.body], (err) => {
            if(err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Review saved'
                });
            };
        });
    };
    updateReview(req, res) {
        const updateReviewQuery = `update Reviews set ? where id = ?;`;

        db.query(updateReviewQuery, [req.body, req.params.id], (err) => {
            if(err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else{
                res.status(200).json({
                    msg: 'Review updated.'
                });
            };
        });
    };
    deleteReview(req, res) {
        const deleteReviewQuery = `delete from Reviews where id = ?;`;

        db.query(deleteReviewQuery, [req.params.id], (err) => {
            if(err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A review was deleted'
            });
        });
    };
};

class Profile {
    fetchUserProfile(req, res) {
        const fetchProfileQuery = `select userID, userImg, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, joinDate from userProfile where id = ?;`;

        db.query(fetchProfileQuery, [req.params.id], (err, results) => {
            if(err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addUserProfile(req, res) {
        const addUserQuery = `insert in userProfile set ?;`;

        db.query(addUserQuery, [req.body], (err) => {
            if(err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                });
            } else {
                res.status(200).json({
                    msg: 'User Profile Created'
                });
            };
        });
    };
    updateUserProfile(req, res) {
        const updateUserPQuery = `update userProfile set ? where id = ?;`;

        db.query(updateUserPQuery, [req.body, req.params.id], (err) => {
            if(err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update user profile.'
                });
            }else {
                res.status(200).json({
                    msg: 'User Profile Updated'
                });
            };
        });
    };
    deleteUserProfile(req, res) {
        const deleteUserPQuery = `delete from userProfile where id = ?;`;

        db.query(deleteUserPQuery, [req.params.id], (err) => {
            if(err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'User Profile was deleted!'
            });
        });
    };
};

class commChatRoom {

};

class devChatRoom {

};

module.exports = { User, Community, newsArticle, Reviews, commChatRoom, devChatRoom, Profile };