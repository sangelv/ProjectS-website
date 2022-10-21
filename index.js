function setSceneStart() {
  document.getElementById("sceneStart").setAttribute("visible", "true");
  document.getElementById("sceneMap").setAttribute("visible", "false");
  
}


function setSceneMap() {
  document.getElementById("sceneStart").setAttribute("visible", "false");
  document.getElementById("sceneMap").setAttribute("visible", "true");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene2hdgd").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene3hdgd").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene4hdgd").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  
  
 
}

function setScene2() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "true");
  document.getElementById("scene2hdgd").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  
  
}

function setScene2HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene2hdgd").setAttribute("visible", "true");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
}



function setScene3() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "true");
  document.getElementById("scene3hdgd").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene4hdgd").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  
}

function setScene3HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene3hdgd").setAttribute("visible", "true");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  

  
}

function setScene4() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "true");
  document.getElementById("scene4hdgd").setAttribute("visible", "false");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  
}

function setScene4HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("scene4hdgd").setAttribute("visible", "true");
  document.getElementById("scene3").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");

  
}

function setScene5() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "true");
  document.getElementById("scene5hdgd").setAttribute("visible", "false");
  document.getElementById("scene2").setAttribute("visible", "false");
  document.getElementById("scene2hdgd").setAttribute("visible", "false");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  
}

function setScene5HG() {
  document.getElementById("sceneMap").setAttribute("visible", "false");
  document.getElementById("scene5").setAttribute("visible", "false");
  document.getElementById("scene5hdgd").setAttribute("visible", "true");
  document.getElementById("scene4").setAttribute("visible", "false");
  document.getElementById("human1").setAttribute("src", "");
  
}
