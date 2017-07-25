console.log("light.js");

var Starwars = (function(originalStarwars){
	let location = "D'Qar";
	let keyPlayers = ["Princess Leia", "Han Solo", "Chewbacca", "Admiral Ackbar", "Jar Jar Binks"];
	let jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"];

	originalStarwars.getLocation = function(whoAsks){
		console.log("whoAsks", whoAsks);
		let tell = true;
		let evilPlayers = Starwars.getEvil();
		evilPlayers.forEach(function(item){
			if (item === whoAsks){
				tell = false;
			}
		});

		if (tell){
			console.log(whoAsks, "is on the good side. Location:", location);
		}else{
			console.log("You are Evil, cannot tell you!");
		}
	};

	originalStarwars.addJedi = function(who){
		jedi.push(who);
		console.log("jedi list", jedi);
	};

	originalStarwars.addKeyPlayer = function(who){
		keyPlayers.push(who);
		console.log("players List", keyPlayers);
	};

	originalStarwars.removeJedi = function(who, name){
		let whichIndex;
		jedi.forEach(function(item, index){
			if (item === who){
				whichIndex = index;
				jedi.splice(whichIndex, 1);
				console.log("jedi after death", jedi);

				if(name){
					Starwars.addEvil(name);
				}
			}
		});
	};





	return originalStarwars;

})(Starwars);



