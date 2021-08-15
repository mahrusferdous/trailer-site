const API_KEY = "69edc18ef3fdc7cde61a526d36f1dc12";

const requests = {
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
