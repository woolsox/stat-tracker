// https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
// used the above as a guideline to practice working with tidier file structure
// some great bits in there to help reduce clutter, this was a perfect project
// to employ that.

// declerations can be tidied up by using const once + commas to continue.
const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      port = 3000,
      Stats = require('./model/statModel'),
      bodyParser = require('body-parser');

// setting up mongoose, 2nd line links us to our new DB (Stats)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Statsdb');

// pulls in bodyParser for use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// The snippet below helps to redirect and respond whenever a wrong route is entered on the site.
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// pulls in routes so we don't need them all in here making for
// a cluttered piece of shit.
const routes = require('./routes/statRoutes');
routes(app);

// "do you believe in ports after life? i can feel port 3000 inside me saying, I really
// do think you're connected enough - ohhh!"
app.listen(port, function() {
 console.log('Stat Tracker running...')
});
