
  // for (var i = 0; i < 16; i++) {
  //   var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=" + i + "&position=QB&format=json";

  //   $.ajax({url: queryURL, method: "GET"}).done(function(response) {
  //     console.log(response);
  //   })
  // }

    var nextURL = "http://api.sportradar.us/nfl-ot1/games/2016/REG/schedule.json?api_key=8q2kce5ggj98vjs2dfb2r3yk"

      $.ajax({
        url: nextURL,
        method: "GET",
        datatype: "jsonp"
      }).done(function(response) {
        console.log(response);
      })


// var nextURL = "http://www.fantasyfootballnerd.com/service/schedule/json/dgpcq78rmqze/"

// $.ajax({url: nextURL, method: "GET"}).done(function(response) {
//   for (var i = 0; i < response.Schedule.length; i++) {
//     if (response.Schedule[i].awayTeam == teamName) {
//       if (response.Schedule[i].gameWeek == 6){
//         $("#qbRightnextOpponent").text(JSON.stringify(response.Schedule[i].homeTeam));
//       }
//     } else if (response.Schedule[i].homeTeam == teamName) {
//       if (response.Schedule[i].gameWeek == 6){
//         $("#qbRightnextOpponent").text(JSON.stringify(response.Schedule[i].awayTeam));
//       }
//     }
//   }
// });
