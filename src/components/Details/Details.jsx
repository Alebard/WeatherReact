
function getSunTime (unixTime){
    const date = new Date(unixTime* 1000)
    return date.getHours()+':'+ date.getMinutes()
}


function Details({weather}) {
    const sunRise = getSunTime(weather.sys.sunrise)
    const sunSet = getSunTime(weather.sys.sunset)

    return (
        <div className="weather_info_item info_details">
            <div className="weather_location location   ">
                {weather.name}
            </div>
            <div className="weather_parameters">
                <div id="parameters_temp">Temperature: <span
                    className="weather_temp parameters_temp">{weather.main.temp.toFixed()}°</span>
                </div>
                <div id="parameters_feels-like">Feels like: <span
                    className="parameters_feels-like">{weather.main.feels_like.toFixed()}°</span></div>
                <div id="parameters_weather">Weather: <span className="parameters_weather">{weather.weather[0].main}</span>
                </div>
                <div>Sunrise: <span id="parameters_sunrise" className="parameters_sunrise">{sunRise}</span></div>
                <div>Sunset: <span id="parameters_sunset" className="parameters_sunset">{sunSet}</span></div>
            </div>
        </div>
    )

}

export default Details