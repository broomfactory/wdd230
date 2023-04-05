// select HTML elements in the document
const spanTemperature = document.querySelector('#temperature');
const spanHumidity = document.querySelector('#humidity');
const SpanConditions = document.querySelector('#conditions');
const weatherIcon = document.querySelector('#weathericon');
const divForecast = document.querySelector('#forecast');

// Carlsbad CA USA  33.1581° N, 117.3506° W
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.16&lon=-117.35&units=imperial&appid=820126b92d63a61a74ac0cc794ea53c5';
const urlforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.16&lon=-117.35&units=imperial&appid=820126b92d63a61a74ac0cc794ea53c5';

function displayCurrent(weatherData) {

    let temperature = Number(weatherData.main.temp);
    let humidity = Number(weatherData.main.humidity);
    
    spanTemperature.innerHTML = `${temperature.toFixed(0)}&deg;F`;
    spanHumidity.innerHTML = `${humidity}% Humidity`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    let words = desc.split(' ');
    
    for (let i=0; i<words.length; i++) {        
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    };
    const descCaps = words.join(' ');

    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',descCaps);
    SpanConditions.textContent = descCaps;
        
}

function displayForecast(forecastData) {
    /* 5 day forecast in feed, data every 3 hours
       So next 3 days will be indices 8, 16, 24 */

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    for (let i=8; i<=24; i+=8) {
        let temp = Number(forecastData.list[i].main.temp);
        let dt = Number(forecastData.list[i].dt) * 1000;  //Unix to ms
        
        divDay = document.createElement('div');
        divDay.classList.add('forecastday');

        pName = document.createElement('p');
        let day = new Date(dt);
        let dayOfWeek = weekday[day.getDay()];
        pName.textContent = dayOfWeek;
        divDay.appendChild(pName);

        pTemp = document.createElement('p');
        pTemp.innerHTML = `${temp.toFixed(0)}&deg;F`;
        divDay.appendChild(pTemp);

        divForecast.appendChild(divDay);        
    }
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();  
        displayCurrent(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

async function fetchForecast() {
    try {
      const response = await fetch(urlforecast);
      if (response.ok) {
        const data = await response.json();  
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}  


apiFetch();
fetchForecast();
