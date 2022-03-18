import SearchInput from "../SearchInput/SearchInput";
import Tabs from "../Tabs/Tabs";
import FavoriteList from "../FavoriteList/FavoriteList";
import {useState, useEffect} from 'react';
import getData from '../../cityData.js'


function Weather() {
    const [cityShow, setCityShow] = useState('Dubai');
    const [weather, setWeather] = useState();
    const [favoriteCities, setFavoriteCities] = useState(new Set())

    useEffect(() => {
        showWeather()
    }, [cityShow])

    return (
        <main className="wrapper">
            <div className="wrapper_container">
                <SearchInput setCityShow={setCityShow}/>
                <Tabs weather={weather} cityShow={cityShow} setFavoriteCities={setFavoriteCities} favoriteCities={favoriteCities} />
                <FavoriteList favoriteCities={favoriteCities} setCityShow={setCityShow} setFavoriteCities={setFavoriteCities}/>
            </div>
        </main>
    )

    async function showWeather() {
        const weatherData = await getData(cityShow, 'weather')
        setWeather(weatherData)
    }
}

export default Weather