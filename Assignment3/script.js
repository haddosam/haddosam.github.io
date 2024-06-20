// Here I have made an array of audio tracks under the name 'audiotracks'
// Originally, I had made a 'const' for each audio track but it would become too complicated when trying to pause the currenlty playing audio before going on to a new one
// Having this array allows me to do two things:
// 1. Keeps the code a lot simpler and more efficient. Previously, I had a function to play each and every audio track which is quite inefficient and messy.
// 2. It allows me to call each audio track by its key into the second function which I will explain.
const audiotracks = {
  drumBassAudio: new Audio("tracks/Drumsandbass.wav"),
  drumRhythmAudio: new Audio("tracks/Drumsandrhythm.wav"),
  drumLeadAudio: new Audio("tracks/Drumsandlead.wav"),
  drumSoloAudio: new Audio("tracks/Drumssolo.wav"),
  rhythmBassAudio: new Audio("tracks/Rhythmandbass.wav"),
  rhythmLeadAudio: new Audio("tracks/Rhythmandlead.wav"),
  rhythmSoloAudio: new Audio("tracks/Rhythmsolo.wav"),
  leadBassAudio: new Audio("tracks/Leadandbass.wav"),
  leadSoloAudio: new Audio("tracks/Leadsolo.wav"),
  bassSoloAudio: new Audio("tracks/Basssolo.wav"),
  everythingTogetherAudio: new Audio("tracks/Everything.wav"),
};

// This 'let' variable is set to assist with the below function
let currentlyPlayingAudio = null;
// This function is in charge of both playing a piece of audio and muting the currently playing one.
// It does this by first getting the key of the specified audio track in the above array upon clicking one of the buttons on the webpage
// After the key is obtained and it understands what audio track to play, it checks to see if there is already a value set for the 'currenltyplayingAudio' variable.
// If the variable is set to 'null', it simply plays the audio track and does not need to pause anything.
// If 'currentlyPlaying
function playAudio(audioKey) {
  if (currentlyPlayingAudio) {
    currentlyPlayingAudio.pause();
    currentlyPlayingAudio.currentTime = 0;
  }
  currentlyPlayingAudio = audiotracks[audioKey];
  currentlyPlayingAudio.play();
}
