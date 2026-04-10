const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", function(){
navMenu.classList.toggle("open");
});