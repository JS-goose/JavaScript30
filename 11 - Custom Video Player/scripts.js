// Variables
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipBtns = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');

//Actions
function playVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//Connect Event Listeners