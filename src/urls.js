'use strict'
const serverUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '4cde9ea698316f3b8e816f377ad1723e';


function getUrl(type,cityName) {
       return `${serverUrl}${type}?q=${cityName}&appid=${apiKey}&units=metric`
}


export default {getUrl}