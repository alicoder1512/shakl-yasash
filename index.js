let width = document.getElementById("width");
let height = document.getElementById("height");
let color = document.getElementById("color");
let border = document.getElementById("border");
let speed = document.getElementById("speed");
let startBtn = document.querySelector(".startBtn");
let result = document.querySelector(".result");

startBtn.addEventListener("click", () => {
  if (width.value > 500 || height.value > 500) {
    alert("500 dan kichikroq razmer kiriting");
  } else {
    //   alert("Salom Jahongir");
    //   result.style.background = "blue";
    result.style.background = color.value;
    result.style.transition = speed.value + "s";
    result.style.width = width.value + "px";
    result.style.height = height.value + "px";
    result.style.borderRadius = border.value;
  }
});
