
var isUnlocked = false;
function unlock() {
			
	if(isIOS || this.unlocked)
		return;

	// create empty buffer and play it
	var buffer = myContext.createBuffer(1, 1, 22050);
	var source = myContext.createBufferSource();
	source.buffer = buffer;
	source.connect(myContext.destination);
	source.noteOn(0);

	// by checking the play state after some time, we know if we're really unlocked
	setTimeout(function() {
		if((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
			isUnlocked = true;
		}
	}, 0);

}

function setSceneStart() {
  document.getElementById("sceneStart").setAttribute("visible", "true");
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "mapsound");
  
}



function setSceneMap() {
  document.getElementById("sceneStart").setAttribute("visible", "false");
  document.getElementById("sceneMap").setAttribute("visible", "true");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene2hdgd").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene3hdgd").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene4hdgd").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/1-minute-of-silence.mp3t");
  
}

function setScene2() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "true");
  document.getElementById("scene2hdgd").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/human_1.mp3");
  
  
}

function setScene2HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene2hdgd").setAttribute("visible", "true");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/bernie 1.mp3");
}

function setScene5() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "true");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene2hdgd").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/human_2.mp3");
 
  
}

function setScene5HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "true");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/bernie 2.mp3");
  
}


function setScene4() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "true");
  document.getElementById("scene4hdgd").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/human_3.mp3");
  
}

function setScene4HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene4hdgd").setAttribute("visible", "true");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/bernie 3.mp3");

}


function setScene3() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "true");
  document.getElementById("scene3hdgd").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene4hdgd").setAttribute("visible", "false");
  document.getElementById("mapsound").setAttribute("src", "project s audio/human_4.mp3");
  
}

function setScene3HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene3hdgd").setAttribute("visible", "true");
  document.getElementById("mapsound").setAttribute("src", "project s audio/bernie4.mp3");
  

  
}




