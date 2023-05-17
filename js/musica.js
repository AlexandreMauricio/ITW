

function stopAudio() {
  var audio = document.getElementById("musica");
  audio.pause();
  document.getElementById("continuarMusica").style.display ="flex"
  document.getElementById("pararMusica").style.display ="none"
}

function playAudio(){
  var audio = document.getElementById("musica");
  audio.play();
  document.getElementById("continuarMusica").style.display ="none"
  document.getElementById("pararMusica").style.display ="flex"
}