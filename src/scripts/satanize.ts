/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Do you want to terrorize your slack channels? I know you do.
//
// Configuration:
//   None
//
// Commands:
//   hubot satanize - responds spotify link
//
// Author:
//   Juan Jose Guevara <juanjose@acklenavenue.com>

		var httpClient = require('request-promise');
		var elMatador = "http://open.spotify.com/track/5a12LL01YPhltXHeuWjSnG";
		var exorcismoVaginal = "http://open.spotify.com/track/4tP693KeihraWyXWbbEb3q";
		var hossanasInExtremis = "http://open.spotify.com/track/2hUwEPLWLJdRd2RrIz9L7F";
		var listOfSongs = [
			"http://open.spotify.com/track/7ElPauPXk7wMql5UKKRbIa",
			hossanasInExtremis,
			"http://open.spotify.com/track/0e6k96DbVt0zMPhKKrcf7V",
			"http://open.spotify.com/track/3YQNfZu6ni0zSmkhgaOfRt",
			"http://open.spotify.com/track/2un5OefoU69ySqpidFL7GO",
			"http://open.spotify.com/track/5Yq6o938MU67LT4XeqjiTT",
			"http://open.spotify.com/track/30MjH15gCJ7hcUig0eDAKf",
			"http://open.spotify.com/track/30MjH15gCJ7hcUig0eDAKf",
			"http://open.spotify.com/track/317n6YtLvomEvtW2Ovq265",
			"http://open.spotify.com/track/2Q73wKbwLLcGS404gkTfjH",
			exorcismoVaginal
		];
		var happyBirthday = "https://open.spotify.com/track/66geAKf15gnNqTTuOJCN2u";
function Satanize(robot: any) {
	robot.respond(/satanize/i, (msg: any) => {
		var date = new Date();
		
		if(date.getDate() === 20 && date.getMonth === 3){
			msg.send("Search For Jesus!")
			msg.send(happyBirthday);
		}
		else{
			msg.send("Armageddon Comes!")
			msg.send(listOfSongs[Math.floor(Math.random() * listOfSongs.length)]);
		}
	});

	robot.hear(/te estan buscando matador/i, (msg: any) => {
		msg.send(elMatador);
	}); 
}

export = Satanize;