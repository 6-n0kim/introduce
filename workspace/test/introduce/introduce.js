var pics = document.getElementsByClassName(
  "pic");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById(
  "lightboxImage");

for (i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  bigLocation = this.getAttribute("data-src");
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
  body.style. opacity = "0.5";
}
lightbox.onclick = function () {
  lightbox.style.display = "none";
}
