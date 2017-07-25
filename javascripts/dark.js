console.log("dark.js");

var Starwars = (function(){
	let location = "The Unknown Regions";
	let keyPlayers = ["Jabba The Hutt", "Count Dooku", "Darth Maul", "General Grievous", "Greedo", "Jango Fett", "Darth Sidious"];

	return {
		getEvil: function(){
			console.log("Evil List of Players:", keyPlayers);
			return keyPlayers;
		},
		getDarkLocation: function(){
			return location;
		},
		addEvil: function(who){
			keyPlayers.push(who);
			console.log("evil players", keyPlayers);
		}

	}

})();