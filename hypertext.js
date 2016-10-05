alert("You are about to enter a super spooky website.  Are you sure you want to continue?");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var firstBox = document.getElementById("box1");

firstBox.addEventListener("mousedown", changeBg);

function changeBg(){

	firstBox.style.backgroundColor = "rgb(15, 184, 173)";

	// if box is teal, change it back to blue
	if(firstBox.style.backgroundColor === "rgb(15, 184, 173)"){
		firstBox.style.backgroundColor = "rgb(44, 181, 232)";
		return;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var soundicon = document.getElementById("soundicon");

soundicon.addEventListener("mouseover", playVid, pauseVid)

var audio = new Audio('audio.mp3');
audio.play();

