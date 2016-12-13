// Dependencies
// ===========================================================
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Data
// ===========================================================

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character

// Routes
// ===========================================================
app.get('/', function (req, res) {
	res.send('Welcome to the Star Wars Page!');
});

var nextURL = "http://api.sportradar.us/nfl-ot1/games/2016/REG/schedule.json?api_key=8q2kce5ggj98vjs2dfb2r3yk"

app.get('/nfl', function (req, res) {
  var schedule = [];
	var p1 = new Promise(
    function(resolve, reject){
      request(nextURL, function (error, response, body) {
  		var parsed = (JSON.parse(response.body)).weeks;
  		var arr = Object.keys(parsed).map(function(key) {
  			return parsed[key];
  		})
  		var weeknumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      for (var i = 0; i < 16; i++) {
  			schedule.push(arr[0].games[i].home.alias + " vs. " + arr[0].games[i].away.alias);
        resolve(schedule);
  		} // closes for loop
  	}) // closes request
  }) // closes promise
  p1.then(function(answer){
    res.send(answer);
    })
    .catch(
    function(err){
      console.log(err);
    })
  });


// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
