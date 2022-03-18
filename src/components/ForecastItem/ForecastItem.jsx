function ForecastData(data) {
    this.date = timeConvert(data.dt);
    this.weatherHour = this.date.hour
    this.weatherMinutes = this.date.minutes
    this.weatherDay = this.date.day
    this.weatherMonth = this.date.month
    this.temp = Math.round(data.main.temp);
    this.feelsLike = Math.round(data.main.feels_like);
    this.weatherStatus = data.weather[0].main;
    this.weatherIcon = data.weather[0].icon;
}

function timeConvert(unixTime) {

    const date = new Date(unixTime * 1000)
    return {
        day: date.getDate(),
        month: date.getMonth(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
    }
}

function ForecastItem({forecast}) {
    const data = new ForecastData(forecast)
    return (
        <div className="forecast_item">
            <div className="forecast_date-and-time">
                <div className="forecast_date">{data.weatherDay} {data.weatherMonth}</div>
                <div className="forecast_time">{data.weatherHour}:{data.weatherMinutes}</div>
            </div>
            <div className="forecast_info">
                <div className="forecast_param">
                    <div>Temperature: <span className="weather_temp parameters_temp">{data.temp}°</span></div>
                    <div>Feels like: <span className="parameters_feels-like">{data.feelsLike}°</span></div>
                </div>
                <div className="forecast_status">
                    <span className="parameters_weather">{data.weatherStatus}</span>
                    <div className="weather_img forecast_weather__image"
                         style={{backgroundImage: `url("https://openweathermap.org/img/wn/${data.weatherIcon}@4x.png")`}}></div>
                </div>
            </div>
        </div>
    )
}

export default ForecastItem