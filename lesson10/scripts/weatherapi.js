// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const locationName = document.querySelector('#location');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=820126b92d63a61a74ac0cc794ea53c5';
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&units=imperial&appid=820126b92d63a61a74ac0cc794ea53c5';
// SLC "lat":40.7596198,"lon":-111.8867975'


function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${Number(weatherData.main.temp).toFixed(1)}</strong>`;
    locationName.textContent = weatherData.name;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    let words = desc.split(' ');
    console.log(words);
    for (let i=0; i<words.length; i++) {
        console.log(words[i]);
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    };
    const descCaps = words.join(' ');

    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',descCaps);
    captionDesc.textContent = descCaps;
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  


  apiFetch();