// Variables
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const sliders = player.querySelectorAll(".player__slider");

//Actions
function playVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// This function updates the play/pause icon depending on video state
function updatePlayButton() {
  this.paused ? toggle.textContent = "►" : toggle.textContent = "pause";
}
//Connect Event Listeners
video.addEventListener("click", playVideo);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
toggle.addEventListener("click", playVideo);
