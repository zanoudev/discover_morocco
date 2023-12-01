function hoverImage() {
  document.querySelector(".tajine-image").src = "images/tajine-open.png";
  // Play the audio
  var audio = document.getElementById("hoverSound");
  audio.play();
}

function unhoverImage() {
  document.querySelector(".tajine-image").src = "images/tajine-close.png";
}
