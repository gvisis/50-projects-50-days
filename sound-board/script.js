const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    // When setting this property, the playback will jump to the specified position
    song.currentTime = 0;
  });
}
