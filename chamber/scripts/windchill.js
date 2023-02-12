let windspeed = parseFloat(document.getElementById("windspeed").textContent);
let temperature = parseFloat(document.getElementById("temperature").textContent);

let windchill = "N/A";

if (temperature <= 50 && windspeed > 3.0) {
    windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * temperature * Math.pow(windspeed,0.16)    
    windchill = Math.round(windchill*10)/10;
}

document.getElementById("windchill").textContent = windchill;