const meows = [
  {
    "mp3": "14740.mp3",
    "title": "路边花坛里小猫的叫声",
    "src": "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format&dpr=2"
  },
]

var currentPlayMp3 = null; 
var currentAudioPlayer = null;

function playMeow(mp3Id) {

  // 正在播放中就暂停
  if (currentPlayMp3 && currentPlayMp3 === mp3Id) {
    currentPlayMp3 = null;
    currentAudioPlayer.pause();
    return;
  }

  var mp3 = process.env.PUBLIC_URL + '/mp3/' + mp3Id
  var audio = new Audio(mp3);
  audio.loop = true;
  audio.play();

  currentPlayMp3 = mp3Id
  currentAudioPlayer = audio
}

export { meows, playMeow };