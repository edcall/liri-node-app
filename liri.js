require("dotenv").config();
console.log('this is loaded');

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv.slice(3).join(' ')


 
if(command === "spotify-this-song"){
  spotifyThis();
}
// if(command === "movie-this"){
//   //run the other funcitn
// }


function spotifyThis(){
  spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0].name); 
  console.log(data.tracks.items[0].artists[0]); 
  });  
}

// console.log(process.argv)
//node process.argv[0];
//fileName.js process.argv[1];

// var input = process.argv[3];

console.log("my command is: " + command);

//my heart will go on

//for loop
//slice-join
//join
//process.argv --terminal [ "my", "heart", "wil", ""]


// var input = '';
// for(var i = 3; i< process.argv.length; i++){
// input += process.argv[i] + " ";
// }
// var input;
// console.log("my input is: " + input)