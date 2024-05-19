const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const muteUnmuteImg = document.querySelector("#volume-on-off-img");
var volumeControl = document.getElementById("volumeslider");
video.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// This is the Mute/Unmute Function that is linked to the button id = volumne-on-off-img
// It works by reading if the video element is muted first with the 3 "=" signs. If it is not muted, the video will become muted and the image will change to the no audio image.
// If the video is muted, the video will become unmuted and change the picture to the full audio picture to indicate the status of the video's volume
function muteUnmute() {
  if (video.muted === false) {
    video.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    video.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}

// This is the section of code for the volume slider
// I have created a variable called changeVolume that acts as a function that changes the volume of the video
// To make the volume level accurate, I have made sure that the volume is out of a total 100 as my slider in HTML is set to a maximum value of 100 as well
var changeVolume = function () {
  video.volume = this.value / 100;
};

// Here I have created two event listeners.
// One reads the value of the slider upon letting go of the slider which is an "input"
// The other reads the value of the slider as it is moving around in real time without letting go of the mouse button which is categorised as "change"
// I have created this "change" event listener as if you only have the "input" event listener, the volume only changes when you let go after setting the volume level
// With both event listeners active, the volume will always be read and will therefore accurately change the volume in real time
volumeControl.addEventListener("input", changeVolume);
volumeControl.addEventListener("change", changeVolume);
