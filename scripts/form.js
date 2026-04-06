const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  }
];

const selectElement = document.querySelector('#choice');
products.forEach(function(product) {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
}
);

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", function(){
navMenu.classList.toggle("open");
});

// Get current count from localStorage
let reviewCount = localStorage.getItem("reviews");

// If no value exists, start from 0
if (reviewCount === null) {
    reviewCount = 0;
}

// Convert to number and increment
reviewCount = Number(reviewCount) + 1;

// Save back to localStorage
localStorage.setItem("reviews", reviewCount);

// Display it on the page (optional)
document.getElementById("reviewCount").textContent = reviewCount;

const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;


 