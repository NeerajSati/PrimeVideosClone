const API_KEY = "93387002aad15200403aec30390a05a2";
const requests= {
    fetchTrending: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=4`,
    fetchHindi: `/discover/movie?api_key=93387002aad15200403aec30390a05a2&page=3`,
    fetchPrime: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
    fetchRecent:`/discover/movie?api_key=${API_KEY}&primary_release_year=2021&sort_by=popularity.desc`,
    fetchTom:  `/discover/movie?api_key=${API_KEY}&with_networks=1024&with_cast=500`,
    fetchComedy:`/discover/movie?api_key=${API_KEY}&with_networks=1024&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_networks=1024with_genres=18&page=2`,
    fetchGrossing:`/discover/movie?api_key=${API_KEY}&sort_by=revenue.desc&with_networks=1024`,

}
export default requests;

