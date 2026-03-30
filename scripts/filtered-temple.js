const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Austin Texas Temple",
    location: "Cedar Park, Texas",
    dedicated: "2024, August, 17",
    area: 10.6,
    imageUrl:
    "https://churchofjesuschristtemples.org/austin-texas-temple/photographs/"
  },
  {
    templeName: "Birmingham Alabama Temple",
    location: "Gardendale, Alabama 35071 United States",
    dedicated:"2000, September, 3",
    area: 5.6, 
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-21774-main.jpg"
  },

  {
    templeName:"Brasilia Brazil Temple",
    location: "Módulo C Asa Norte",
    dedicated:"2020,September, 26",
    area:5.6,
    imageUrl:
    "https://churchofjesuschristtemples.org/brasilia-brazil-temple/photographs/"
  }
];

function acresToFt(acres) {
    return acres * 43560;
}
function createTempleSelection(temple) {
    const figure = document.createElement("figure");
    
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    
    const figcaption = document.createElement("figcaption");
    
    figcaption.innerHTML =
    `<strong>${temple.templeName}</strong><br>
    Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area:${acresToFt(temple.area).toLocaleString()} ft`;
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    return figure;    
}

const container = document.getElementById("templeGallery");
function displayTemples(templesArray) {
    container.innerHTML = "";
    templesArray.forEach(temple => {
        container.appendChild(createTempleSelection(temple));
    });
}

function filterTemple(filter) {
    switch (filter) {
        case "old":
            return temples.filter(t => parseInt(t.dedicated.split(",")[0]) <1900);
        case "new":
            return temples.filter(t => parseInt(t.dedicated.split(",")[0]) >2000);
        case "large":
            return temples.filter(t => acresToFt(t.area) > 90000); 
        case "small":
            return temples.filter(t => acresToFt(t.area) < 10000);
        default:
            return temples;
    }
}

const navMenu = document.getElementById(navMenu);
navMenu.addEventListener("click", (e) => {
    e.preventDefault();
})



