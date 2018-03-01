
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, (error) => {
    if (error) {
        console.log('Error during database connection', error)
    } else {
        console.log('Database connected succesfully');
    }
});

module.exports = {
    mongoose
}

