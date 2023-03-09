const db = require('../config');
const { hash, compare, hashSync } = require('bcrypt');
const { createToken } = require('../middleware/authenticatedUser.js');

class User {
    login(req, res) {
        const { emailAdd, userPass } = req.body;
        const verifyQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, userProfile, joinDate from Users where emailAdd = '${emailAdd};'`;

        db.query(verifyQuery, async (err, data) => {
            const userLog = data
            if (err) throw err, console.log(err);
            if ((!data) || (data == null)) {
                res.status(401).json({ err: 'You have entered the wrong email address' })
            } else {
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
            else res.status(200).json({ results: data });
        });
    };
    fetchUser(req, res) {
        const fetchUserQuery = `select userID, firstName, lastName, gender, cellNumber, emailAdd, userPass, userRole, joinDate, userImg from Users where userID = ?;`;

        db.query(fetchUserQuery, [req.params.id], (err, data) => {
            if (err) throw err, console.log(err);
            else res.status(200).json({ results: data });
        });
    };
async createUser(req, res) {
    const details = req.body;

    details.userPass = await hash(details.userPass, 15);

    const user = {
        emailAdd: details.emailAdd,
        userPass: details.userPass
    }

    const createQuery = `insert into Users set ?;`;

    db.query(createQuery, [details], (err) => {
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

    const updateQuery = `update Users set ? where userID = ?;`;

    db.query(updateQuery, [data, req.params.id], (err) => {
        if(err) throw err, console.log(err);
        res.status(200).json({
            msg: 'User information was updated.'
        });
    });
};
deleteUser(req, res) {
    const deleteQuery = `delete from Users where userID = ?;`;

    db.query(deleteQuery, [req.params.id], (err) => {
        if(err) throw err, console.log(err);
        res.status(200).json({
            msg: 'User was removed from the database'
        });
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

module.exports = { User, Community, newsArticle, Reviews, commChatRoom, devChatRoom, Profile };