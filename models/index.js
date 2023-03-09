const db = require('../config');
const {hash, compare, hashSync} = require('bcrypt');
const {createToken} = require('../middleware/authenticatedUser.js');

class User {
login(req, res) {
    const {emailAdd, userPass} = req.body;
    const verifyQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, userProfile, joinDate from Users where emailAdd = '${emailAdd};'`;

    db.query(verifyQuery, async (err, data) => {
        const userLog = data
        if(err) throw err, console.log(err);
        if((!data) || (data == null)) {
            res.status(401).json({err: 'You have entered the wrong email address'})
        }
    })
}

fetchUsers(req, res) {
        const fetchUsersQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, userProfile, joinDate, userImg from Users;`;
    
        db.query(fetchUsersQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results:data});
        });
    };
fetchUser(req, res) {
        const fetchUserQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, userProfile, joinDate, userImg from Users where userID = ?;`;
        
        db.query(fetchUserQuery, [req.params.id], (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data});
        });
    };
};

class Community {
fetchCommunities(req, res) {
        
    }
};

class newsArticle {

};

class Reviews {

};

class commChatRoom {

};

class devChatRoom {

};

class Profile {

}

module.exports = {User, Developer, Community, newsArticle, Reviews, commChatRoom, devChatRoom, Profile};