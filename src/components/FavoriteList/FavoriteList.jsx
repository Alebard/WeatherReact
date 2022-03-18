function FavoriteList({favoriteCities, setCityShow, setFavoriteCities}) {
    function deleteCity(cityDelete) {
        const cities = [...favoriteCities]
        const newCities = cities.filter((city)=>{
            if (city !== cityDelete){
                return city
            }
        })

        setFavoriteCities(new Set(newCities))
    }

    const favoriteList = [...favoriteCities].map((city) => {
        return (
            <div className="list_item" key={city}>
                <span className="list_title" onClick={() => setCityShow(city)}>{city}</span>
                <span className="list_close" onClick={()=> deleteCity(city)}>✖</span>
            </div>
        )
    })
    return (
        <div id="list">
            <div id="list_title">
                Added Location
            </div>
            <div id="list_items">
                {favoriteList}
            </div>
        </div>
    )
}

export default FavoriteList