import {useEffect, useState} from 'react';
import getData from "../../cityData";
import ForecastItem from "../ForecastItem/ForecastItem";


async function saveForecast(cityShow, setForecasts) {
    const forecasts = await getData(cityShow, 'forecast')
    setForecasts(forecasts)
}

function Forecast({cityShow, weather}) {
    const [forecasts, setForecasts] = useState()

    useEffect(() => {
        saveForecast(cityShow, setForecasts)
    }, [cityShow])

    if (forecasts) {
        const forecastsList = forecasts.list.map((forecast) => <ForecastItem forecast={forecast} key={forecast.dt}/>)
        return (
            <div className="weather_info_item info-forecast">
                <div className="weather_location location">
                    {weather.name}
                </div>
                <div id="forecasts">
                    {forecastsList}
                </div>
            </div>
        )
    } else {
        return (
            <p></p>
        )
    }

}

export default Forecast
