
let viewer = document.querySelector(".imgViewer");
let btn = document.querySelector('.closeView')

function imgPop(img) {
  viewer.style.opacity = 1;
  viewer.style.display = "flex";
  document.getElementById('main').src = img.classList[1];
};

btn.onclick = function (event) {
    closeViewer();
};

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    closeViewer();
  }
});

function closeViewer() {
  viewer.style.opacity = 0;
  viewer.style.display = "none";
  document.getElementById('main').src = ""
};