import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const apikey = import.meta.env.VITE_API_KEY;
export const endPoints = {
  popular: 'popular',
  nowplaying: 'now_playing',
  comingsoon: 'upcoming',
  toprated: 'top_rated',
  airingtoday: 'airing_today',
  ontheair: 'on_the_air'
};

async function fetchMoviesTvShows(category, type , pageParam) {
  let response = await axios.get(
    `${BASE_URL}${type}/${endPoints[`${category}`]}?api_key=${apikey}&language=en-US&page=${pageParam}`
  );
  return response.data;
}

async function fetchTrends(type) {
  let response = await axios.get(`${BASE_URL}trending/${type}/week?api_key=${apikey}`);
  return response.data;
}

export {fetchMoviesTvShows, fetchTrends}