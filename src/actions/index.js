import axios from 'axios';

const API_KEY = 'be356de2c3ebcab7a4e3c39363dbb783';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/city?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  // action creaator! ^
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
