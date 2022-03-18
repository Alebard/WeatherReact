function Now({weather, setFavoriteCities, favoriteCities}) {
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`

        function addFavoriteCity() {
            setFavoriteCities(new Set([...favoriteCities, weather.name]))

        }
        return (
            <div className="weather_info_item active-screen info_now">
                <div className="weather_temp">
                    {weather.main.temp.toFixed()}°
                </div>
                <div className="weather_img">
                    <img className="weather_icon" src={weatherIconUrl} alt="weatherIcon"/>
                </div>
                <div className="weather_location">
                    <span className="location" id="locationName">{weather.name}</span>
                    <button id="add-to-favorites" onClick={addFavoriteCity}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.54"
                                  d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                                  stroke="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        )

}

export default Now