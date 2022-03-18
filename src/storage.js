function setFavoriteCity(cities) {
    localStorage.setItem('favoriteCities', JSON.stringify(cities))
}

export default setFavoriteCity()