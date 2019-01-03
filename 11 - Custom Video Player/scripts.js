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
  this.paused ? (toggle.textContent = "►") : (toggle.textContent = "pause");
}

function skip() {
  if (this.dataset.skip === "-10") {
    video.currentTime -= 10;
  }

  if (this.dataset.skip === "25") {
    video.currentTime += 25;
  }
}

function updateSlider() {
  if (this.name === "volume") {
    video.volume = this.value;
  }

  if (this.name === "playbackRate") {
    video.playbackRate = this.value;
  }
}

function updateVideoProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percentage}%`;
}

function videoScrub(e) {
  const percent = (e.layerX / progress.offsetWidth) * video.duration;
  video.currentTime = percent;
}

//Connect Event Listeners
video.addEventListener("click", playVideo);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", updateVideoProgress);
toggle.addEventListener("click", playVideo);
skipBtns.forEach((item) => item.addEventListener("click", skip));
sliders.forEach((item) => item.addEventListener("change", updateSlider));
progress.addEventListener("click", videoScrub);
let mousedown = false;
progress.addEventListener("mousemove", (e) => mousedown && videoScrub(e) );
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);