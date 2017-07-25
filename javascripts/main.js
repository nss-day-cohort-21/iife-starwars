console.log("main.js");

let resistanceLocation = "D'Qar";

let getLocation = document.getElementById("checkLocation");
getLocation.addEventListener("click", () => {
	console.log("Hey Darth, we are located at:", resistanceLocation);
});

let objButton = document.getElementById("checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event){
	console.log("Starwars IIFE", Starwars);
}

let darkButton = document.getElementById("getDarkPlayers");
darkButton.addEventListener("click", getDarkPlayers);

function getDarkPlayers(event){
	Starwars.getEvil();
}

let locbtn = document.getElementById("btn-getLocationD");
locbtn.addEventListener("click", () => {
	Starwars.getLocation(locbtn.getAttribute("whoIsIt"));
});


let locbtnL = document.getElementById("btn-getLocationL");
locbtnL.addEventListener("click", () => {
	Starwars.getLocation(locbtnL.getAttribute("whoIsIt"));
});


let addPlayer = document.getElementById("btn-signup");
addPlayer.addEventListener("click", () => {
	let newPlayerName = document.getElementById("newperson").value;
	let whichselected;
	var radios = document.getElementsByName("whichside");
	for (let i =0; i < radios.length; i++){
		//1 = good, 2 = evil, 0 = jedi
		if (radios[i].checked){
			whichselected = radios[i].value;
			break;
		}
	}
	console.log("whichselected", whichselected);

	if (whichselected == 0){
		Starwars.addJedi(newPlayerName);
	}else if(whichselected == 1){
		Starwars.addKeyPlayer(newPlayerName);
	}else if(whichselected == 2){
		Starwars.addEvil(newPlayerName);
	}
});

let removeJedi = document.getElementById("btn-removeanakin");
removeJedi.addEventListener("click", function(){
	Starwars.removeJedi("Anakin Skywalker", "Darth Vader");
});

let removeJedi2 = document.getElementById("btn-removeobiwan");
removeJedi2.addEventListener("click", function(){
	Starwars.removeJedi("Obi-Wan Kenobi");
});








