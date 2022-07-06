document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body"),
    particle = document.createElement("span"),
    x = e.offsetX,
    y = e.offsetY;

  particle.style.left = x + "px";
  particle.style.top = y + "px";

  let sz = Math.random() * 8;
  particle.style.width = 2 + sz + "px";
  particle.style.height = 2 + sz + "px";

  let tfValue = Math.random() * 360;
  particle.style.transform = "rotate("
    + tfValue + "deg)";

  body.appendChild(particle);

  setTimeout(function () {
    particle.remove()
  }, 2000);
});
