const API_KEY = "69edc18ef3fdc7cde61a526d36f1dc12";

const requests = {
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopToday: `/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213&language=en-US&page=1`,
    fetchAmazonOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=10272&language=en-US&page=1`,
    fetchAppleOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=12&language=en-US&page=1`,
    fetchDisneyOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=25&language=en-US&page=1`,
    fetchHboOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=8&language=en-US&page=1`,
    fetchHuluOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=9&language=en-US&page=1`,
    fetchPeacockOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=11&language=en-US&page=1`,
    fetchParamountOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=15&language=en-US&page=1`,
    fetchYoutubeOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=24&language=en-US&page=1`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
