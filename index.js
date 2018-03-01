
require('./Module/config/config');
let signUpModule = require('./Module/sign-up');
let signInModule = require('./Module/sign-in');
let express = require('express');
let bodyparser = require('body-parser');

let PORT = process.env.PORT || 3000;
let app = express();

app.use(bodyparser.json());
app.get('/test', function (req, res) {
  res.send("Hello world new");
});

app.post('/login', signInModule.signIn);

app.post('/register', signUpModule.signUp);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at Port ${PORT}`);
});