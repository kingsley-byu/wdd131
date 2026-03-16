const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", function(){
navMenu.classList.toggle("open");
});

const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;