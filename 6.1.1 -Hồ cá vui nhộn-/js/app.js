var left = document.getElementById("left");
var right = document.getElementById("right");
var vol = document.getElementById("vol");
var music = document.getElementById("music");
var bg = document.getElementById("bg");
bgs = ["url(../img/undersea.jpg) no-repeat", "url(../img/undersea2.jpg) no-repeat", "url(../img/undersea3.jpg) no-repeat","url(../img/undersea4.jpg) no-repeat"];
index = 0;
function leftbg() {
    if (index > 0) index--;
    bg.style.background = bgs[index];
    bg.style.backgroundSize = "200vh 100vh";
}
function rightbg() {
    if (index < bgs.length - 1) index++;
    bg.style.background = bgs[index];
    bg.style.backgroundSize = "200vh 100vh";
    console.log(index)
    
}
function playPause() {
    if (music.paused)
    {
        music.play();
    } else {
        music.pause();
    }
    console.log(music.paused)
};
