
const { User } = require('./Database/Schema/userModel');
const signUp = function (req, res) {
    let newUser = new User({
        UserId: req.body.userId,
        EmployeeId: req.body.employeeId,
        Password: req.body.password,
        IsAdmin: req.body.isAdmin
    });
    newUser.save().then((doc) => {
        res.send('Data inserted successfully ' + doc);
    }, (error) => {
        res.send('Error during data insert ' + error);
    });
}

module.exports = {
    signUp
}