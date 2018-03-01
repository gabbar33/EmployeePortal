
const { User } = require('./Database/Schema/userModel');
const signIn = function (req, res) {
    User.findOne({ UserId: req.body.userId }).exec(function (err, result) {
        if (err) {
            console.log('error during signin');
        } else {
            if (!result) {
                console.log('Invalid UserId');
            } else {
                if (result.Password === req.body.password) {
                    console.log('Sucessful login');
                } else {
                    console.log('Incorrect password');
                }
            }
        }
    });
}

module.exports = {
    signIn
}