const footer = document.createElement('footer');
footer.innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">\
                            <div class="container-fluid">\
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"\
                                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">\
                                    <span class="navbar-toggler-icon"></span>\
                                </button>\
                                <div class="collapse navbar-collapse" id="navbarCollapse">\
                                    <ul class="navbar-nav">\
                                        <li class="nav-item dropup">\
                                            <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown"\
                                                aria-expanded="false">Socials</a>\
                                            <ul class="dropdown-menu" aria-labelledby="dropdown10">\
                                                <li class="d-flex flex-row align-items-center m-1">Alexandre: <a\
                                                        class="dropdown-item container-fluid"\
                                                        href="https://www.instagram.com/alex.mauricio21/" target="_blank"><img\
                                                            src="media/image/instagram.svg" alt="instagram"></a>\
                                                    <a class="dropdown-item  container-fluid"\
                                                        href="https://github.com/AlexandreMauricio?tab=repositories"\
                                                        target="_blank"><img src="media/image/github.svg" alt="github"></a></li>\
                                                <li class="d-flex flex-row align-items-center m-1">Manuel: <a\
                                                        class="dropdown-item container-fluid"\
                                                        href="https://www.instagram.com/necasgjrolo/" target="_blank"><img\
                                                            src="media/image/instagram.svg" alt="instagram"></a>\
                                                    <a class="dropdown-item  container-fluid"\
                                                        href="https://github.com/NecasGJRolo?tab=repositories"\
                                                        target="_blank"><img src="media/image/github.svg" alt="github"></a></li>\
                                                <li class="d-flex flex-row align-items-center m-1">João: <a\
                                                        class="dropdown-item container-fluid"\
                                                        href="https://www.instagram.com/janecadias/" target="_blank"><img\
                                                            src="media/image/instagram.svg" alt="instagram"></a>\
                                                    <a class="dropdown-item  container-fluid" href="https://github.com/JoaoDias28"\
                                                        target="_blank"><img src="media/image/github.svg" alt="github"></a></li>\
                                            </ul>\
                                        </li>\
                                        <li class="nav-item dropup">\
                                            <a class="nav-link" href="#" onClick="stopAudio()" data-bs-toggle="modal" data-bs-target="#exampleModal" id="dropdown20">Sponsors</a>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </nav>\
                        <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                            <div class="modal-dialog">\
                                <div class="modal-content">\
                                    <div class="modal-header">\
                                        <h1 class="modal-title fs-5 mx-auto text-success fw-bolder" id="exampleModalLabel">Our Sponsors - FIA Formula 1</h1>\
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick="playAudio()" aria-label="Close"></button>\
                                    </div>\
                                    <div class="modal-body mx-auto">\
                                        <video id="promoVideo" width="500" controls>\
                                            <source src="media/video/f1Intro.mp4" type="video/mp4">\
                                            <source src="../media/video/f1Intro.mp4" type="video/mp4">\
                                            Your browser does not support the video tag.\
                                        </video>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
document.body.appendChild(footer);



function addMusic(folder) {

    const music = document.createElement('audio');
    music.setAttribute('id', 'musica');
    music.setAttribute('preload', 'auto');
    music.style = 'display: none';
    music.volume = 0.1;
    music.setAttribute('autoplay', 'true');
    music.setAttribute('loop', 'true');
    music.innerHTML = !folder ? '<source src = "media/music/Bandolero.mp3" type = "audio/mp3" >' : '<source src = "../media/music/Bandolero.mp3" type = "audio/mp3" >';

    document.body.appendChild(music);

}



function stopAudio() {
    var audio = document.getElementById("musica");
    audio.pause();
    document.getElementById("continuarMusica").style.display = "flex"
    document.getElementById("pararMusica").style.display = "none"
}

function playAudio() {
    var audio = document.getElementById("musica");
    audio.play();
    audio.volume = 0.1;
    document.getElementById("continuarMusica").style.display = "none"
    document.getElementById("pararMusica").style.display = "flex"
}

