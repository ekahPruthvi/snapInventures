var loadingScreen = document.querySelector(".logo");
var page = document.querySelector(".page");

/*window.addEventListener('animationstart', function() {
    page.style.display = 'none';
})

window.addEventListener('animationend', function() {
    loadingScreen.style.display = 'none';
    page.style.display = 'block';
})*/

window.addEventListener('load', function() {
  loadingScreen.style.display = 'none';
})

function move() {
  const element = document.getElementById("abt");
  element.scrollIntoView();
}