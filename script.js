let snare = document.getElementById("snare");
let kick = document.getElementById("kick");
let crash = document.getElementById("crash");
let tom = document.getElementById("tom");
function playsound(id) {
  // console.log(id+" is clicked")
  let audio = new Audio(`sounds/${id}.mp3`);
  audio.play();
}

function playkick(id) {
  // console.log(id+" is clicked")
  let audio = new Audio(`sounds/${id}.wav`);
  audio.play();
}
function active(id, className) {
  id.classList.add(className);
  setTimeout(() => {
    id.classList.remove(className);
  }, 400);
}
document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "s":
      active(snare, "active1");
      let audio1 = new Audio(`sounds/snare.mp3`);
      audio1.play();
      break;

    case "b":
      active(tom, "active4");
      let audio2 = new Audio(`sounds/tom.mp3`);
      audio2.play();
      break;

    case "c":
      active(crash, "active3");
      let audio3 = new Audio(`sounds/crash.mp3`);
      audio3.play();
      break;

    case "k":
      active(kick, "active2");
      let audio4 = new Audio(`sounds/kick.wav`);
      audio4.play();
      break;
  }
});
