//function need
//Need lyrics time maching

lyrics = [
"[00:02.33]Woo, ey",
"[00:17.68]Woo, ey",
"[00:23.05]You can feel it in the streets",
"[00:25.92]On a day like this, the heat",
"[00:28.44]It feel like summer",
"[00:32.99]I feel like summer",
"[00:36.86]I feel like summer",
"[00:42.00]You can feel it in the streets",
"[00:48.55]On a day like this, the heat",
"[00:51.36]I feel like summer (ey)",
"[00:56.66]She feel like summer",
"[01:02.34]This feel like summer",
"[01:06.06]I feel like summer",
"[01:10.30]Seven billion souls that move around the sun",
"[01:15.58]Rolling faster, faster, not a chance to slow down",
"[01:21.80]Slow down",
"[01:30.07]Men who made machines that want what they decide",
"[01:38.80]Parents tryna tell the children please slow down",
"[01:46.18]Slow down",
"[01:52.89]I know",
"[01:54.19]Oh, I know you know that pain",
"[01:59.91]I'm hopin' that this world will change",
"[02:05.84](Ooo, I hope this world will change)",
"[02:09.83]But it just seems the same",
"[02:12.21](It feels like the same)",
"[02:15.21]You can feel it in the streets",
"[02:18.30]On a day like this, the heat",
"[02:20.65]It feel like summer",
"[02:24.24](I feel like summer)",
"[02:26.69]I feel like summer",
"[02:30.32](I feel like summer)",
"[02:32.44]I feel like summer",
"[02:35.38]Every day gets hotter than the one before",
"[02:45.39]Running out of water, it's about to go down",
"[02:52.80]Go down",
"[02:59.55]Air that kill the bees that we depend upon",
"[03:07.99]Birds were made for singing, wakin' up to no sound",
"[03:14.42]No sound",
"[03:20.69]I know",
"[03:23.54]Oh, I know you know my pain (woah, no no no)",
"[03:29.89]I'm hopin' that this world will change",
"[03:35.28](This world will change, yeah)",
"[03:37.69]But it just seems the same (woah)",
"[03:41.40]I know",
"[03:47.50]Oh, I hope we change",
"[03:52.56]I really thought this world could change",
"[03:58.42]But it seems like the same",
"[04:04.45]I know",
"[04:09.91]Oh, my mind is still the same",
"[04:15.88]I'm hoping that this world will change",
"[04:21.19]But it just seems the same",
"[04:26.90]I know",
"[04:32.47]Oh, I hope we change"
];



var song = document.createElement("audio");
song.src = "summer.mp4";

//make a function that chacks what lyrics on on what time scape stamp it. 
var currentTimestamp = 0;
var i = 0;
setInterval(function() {
	if (i + 1 == lyrics.length) {
		
	}
	else {
		timestamp = lyrics[i + 1].substring(0,10);
		lyricWords = lyrics[i + 1].substring(10);
		timestamp = convertToSeconds(timestamp);
		if (song.currentTime >= timestamp) {
			currentTimestamp = timestamp;
			i ++;
            appearText();
		}
	}
}, 10);
function convertToSeconds(timestamp) {
    var timeParts = timestamp.substring(1, timestamp.length - 1).split(':');
    var minutes = parseInt(timeParts[0], 10);
    var seconds = parseFloat(timeParts[1]);

    var totalSeconds = minutes * 60 + seconds;

    return totalSeconds;
}


//function that make text appear on the screen


function appearText() {
  var text = document.createElement("p");
  text.innerHTML = lyrics[i].substring(10);
  randomColor(text);
  console.log(currentTimestamp);
  
  if (((currentTimestamp >= convertToSeconds("[01:52.89]") && currentTimestamp <= convertToSeconds("[02:12.21]"))) || ((currentTimestamp >= convertToSeconds("[03:20.69]") && currentTimestamp <= convertToSeconds("[04:32.47]")))) {
    text.style.fontFamily = "Cedarville Cursive";
  }
  else {
    text.style.fontFamily = "Dancing Script";
  }
  /*
  if (currentTimestamp >= convertToSeconds("[03:23.54]") && currentTimestamp <= convertToSeconds("[04:32.47]")) {
    text.style.fontFamily = "Dancing Script";
  }
  */
    document.body.appendChild(text);
  setTimeout(function() {
    text.remove();
  }, 25000);

  
  
  
}
//function that make text disappear on the screen
function disappearText() {
  var text = document.querySelector("p");
  text.remove();
}
//function that lyrics change into random color
function randomColor(t) {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  t.style.color = "#" + randomColor;
}
//FUNCTION THAT MAKES IT PLAY THE SONG AND STOP THE SONG
function playSong() {
  if (song == null || song.paused) {
    song.play();
    appearText();
  } else {
    song.pause();
    disappearText();
  }
}


