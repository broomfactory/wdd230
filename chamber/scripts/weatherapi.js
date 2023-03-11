// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const locationName = document.querySelector('#location');
const windChillSpan = document.getElementById("windchill");
const windSpeedSpan = document.getElementById("windspeed");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&units=imperial&appid=820126b92d63a61a74ac0cc794ea53c5';
// SLC "lat":40.7596198,"lon":-111.8867975'


function displayResults(weatherData) {

    let temperature = Number(weatherData.main.temp);
    let windspeed = Number(weatherData.wind.speed);
    
    currentTemp.innerHTML = `${Number(weatherData.main.temp).toFixed(1)} &deg;F`;
    locationName.textContent = `${weatherData.name} Weather`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    let words = desc.split(' ');
    
    for (let i=0; i<words.length; i++) {        
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    };
    const descCaps = words.join(' ');

    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',descCaps);
    captionDesc.textContent = descCaps;
    
    let windchill = "N/A";

    if (temperature <= 50 && windspeed > 3.0) {
        windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * temperature * Math.pow(windspeed,0.16)    
        windchill = Math.round(windchill*10)/10;        
    }

    windChillSpan.innerHTML = `${windchill.toFixed(1)} &deg;F`;
    windSpeedSpan.textContent = `${windspeed.toFixed(1)} mph`;
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();          
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  


  apiFetch();