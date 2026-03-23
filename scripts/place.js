const temperature = 15;
const windSpeed = 15;

function calculateWindChill(temp, speed){
    return 13.12 + (0.6215*temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8){
    const windChill = calculateWindChill(temperature, windSpeed);
    windChill.textContent = windChill.toFixed(1) + " °C";
}
else{
    windChillElement.textContent = "N/A"
}


const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;