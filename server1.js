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
	// var obj = {1: '11', 2: '22'};
	// var arr = Object.keys(obj).map(function(key) {
	// 	return obj[key];
	// });
	// res.send(arr);
	request(nextURL, function (error, response, body) {
		var parsed = (JSON.parse(response.body)).weeks;
		var arr = Object.keys(parsed).map(function(key) {
			return parsed[key];
		})
		//res.send(arr);

		var weeknumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//		//this is how to compare time for NFL schedule
		// if(Date() < arr[0].games[0].scheduled) {
		// 	res.send("true");
		// } else {
		// 	res.send("false");
		// }

		//console.log(arr[0].games[1].home.alias + " vs. " + arr[0].games[1].away.alias);
		for (var i = 0; i < 16; i++) {
			console.log(arr[0].games[i].home.alias + " vs. " + arr[0].games[i].away.alias);
		}
	})
});


// app.get('/nfl', function (req, res) {
// 	request(nextURL, function (error, response, body) {
// 	  var parsed = (JSON.parse(response.body)).weeks;
// 	   parsed.forEach(function(el){
// 	     res.send(el.games[0].away.alias)
// 	   })
// 	})
// });

// router.get('/nfl', function(req, res, next){
//  request(resourceURL, function(err, response, body){
//    // var parsed = (JSON.parse(response.body)).weeks[0].games[0].home.alias;
//    var parsed = (JSON.parse(response.body)).weeks;
//    parsed.forEach(function(el){
//      res.send(el.games[0].home.alias)
//    })
//  }) // this closes request ()
// }) // this closes get request
// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});