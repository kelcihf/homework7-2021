var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume *100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("New speed's" + video.playbackRate);
});

// here
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute Video");
		video.muted = true;
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute Video");
		video.muted = false;
	}
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding Up Video");
	video.playbackRate /= 0.95;
	console.log("New speed's" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip forward");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	video.play();
	console.log(video.currentTime);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});
