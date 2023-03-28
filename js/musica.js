var audio = document.getElementById("musica");

function stopAudio() {
  audio.pause();
  document.getElementById("continuarMusica").style.display ="flex"
  document.getElementById("pararMusica").style.display ="none"
}

function playAudio(){
  audio.play();
  document.getElementById("continuarMusica").style.display ="none"
  document.getElementById("pararMusica").style.display ="flex"
}