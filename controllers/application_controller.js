var models  = require('../models');
var express = require('express');
var router  = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  var nextURL = "http://api.sportradar.us/nfl-ot1/games/2016/REG/schedule.json?api_key=8q2kce5ggj98vjs2dfb2r3yk"
	// var obj = {1: '11', 2: '22'};
	// var arr = Object.keys(obj).map(function(key) {
	// 	return obj[key];
	// });
	// res.send(arr);
	var schedule = [];
	request(nextURL, function (error, response, body) {
		if (error) throw error;
		var parsed = (JSON.parse(response.body)).weeks;
		var arr = Object.keys(parsed).map(function(key) {
			return parsed[key];
		})
		// res.send(arr);

		var weeknumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//		//this is how to compare time for NFL schedule
		// if(Date() < arr[0].games[0].scheduled) {
		// 	res.send("true");
		// } else {
		// 	res.send("false");
		// }

		
		//console.log(arr[0].games[1].home.alias + " vs. " + arr[0].games[1].away.alias);
		for (var i = 0; i < 16; i++) {
			schedule.push(arr[0].games[i].home.alias + " vs. " + arr[0].games[i].away.alias);
			console.log(schedule);
		}
	})
	res.render('fantasy/index');
	next();
});

module.exports = router;
