import {useState} from 'react';
import Now from "../Now/Now";
import Forecast from "../Forecast/Forecast";
import Details from "../Details/Details";

const tabsBtns = ['Now', 'Details', 'Forecast'];

function Tabs({weather, cityShow, favoriteCities, setFavoriteCities}) {
    const [activeTab, setActiveTab] = useState('Now')

    function changeTab(tab) {
        setActiveTab(tab)
    }
    const tabsNav = tabsBtns.map((tab) => {
        return <button key={tab} className={`nav_btn ${tab === activeTab && 'active-btn'}`} id="nav_now" onClick={() => changeTab(tab)}>{tab}</button>
    } )
    if (weather) {
        return (
            <div id="tab">
                <div className="weather_info">
                    {activeTab === 'Now' && <Now weather={weather} favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities}/>}
                    {activeTab === 'Details' && <Details weather={weather}/>}
                    {activeTab === 'Forecast' && <Forecast cityShow={cityShow} weather={weather} />}
                </div>
                <nav id="weather_nav">
                    {tabsNav}
                </nav>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}

export default Tabs