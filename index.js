function setSceneStart() {
  document.getElementById("sceneStart").setAttribute("visible", "true");
  document.getElementById("sceneMap").setAttribute("visible", "false");
  
}


function setSceneMap() {
  document.getElementById("sceneStart").setAttribute("visible", "false");
  document.getElementById("sceneMap").setAttribute("visible", "true");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "project s audio/human_1.mp3");
  
 
}

function setScene2() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "true");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "project s audio/human_2.mp3");


  
}

function setScene3() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "true");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "false");
  
}

function setScene4() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "true");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  
}

function setScene5() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "true");
  document.getElementById("scene4").setAttribute("visible", "false");
  
}
