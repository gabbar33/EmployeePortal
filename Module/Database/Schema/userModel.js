
const bcrypt = require('bcrypt');
const { mongoose } = require('./../connection');
let Schema = mongoose.Schema;
let userSchema = new Schema({
    UserId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    EmployeeId: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    Password: {
        type: String,
        required: true,
        trim: true
    },
    IsAdmin: {
        type: Boolean,
        required: true
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.Password, 10, (err, hash) => {
        if (err) {
            console.log('Error during bcryption');
        }
        this.Password = hash;
        next();
    });
});
let User = mongoose.model('users', userSchema);

module.exports = {
    User
}