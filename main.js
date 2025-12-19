"use strict"

const apiKey = 'your-api-key';

// Получаем элементы
const input = document.getElementById('input-text');
const form = document.querySelector('.form__input');
const searchBtn = document.querySelector('.form__button');
const temp = document.getElementById('temp');      
const city = document.getElementById('city');         
const wind = document.getElementById('wind');
const humidity = document.getElementById('hum');              

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cityName = input.value.trim();
      getWeather(cityName);


});

async function getWeather(cityName) 
{
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    temp.textContent = Math.round(data.main.temp) + '°C';
    city.textContent = data.name;
    wind.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity}%`;
}

