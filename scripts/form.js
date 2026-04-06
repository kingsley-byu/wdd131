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

// ------------------------------
// Review counter (ONLY runs on review.html)
// ------------------------------
const reviewDisplay = document.querySelector("#reviewCount");

if (reviewDisplay) {
    let reviewCount = localStorage.getItem("reviews");

    if (reviewCount === null) {
        reviewCount = 0;
    }

    reviewCount = Number(reviewCount) + 1;

    localStorage.setItem("reviews", reviewCount);

    reviewDisplay.textContent = reviewCount;
}

// ------------------------------
// Footer info
// ------------------------------
const yearElement = document.querySelector("#currentYear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.querySelector("#lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent =
        "Last Modified: " + document.lastModified;
}