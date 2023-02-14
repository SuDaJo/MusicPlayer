import { config } from "./apikey.js";

const baseURI = "https://deezerdevs-deezer.p.rapidapi.com/";
const API_KEY = config.apikey;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const useFetch = async (name) => {
  return fetch(`${baseURI}${name}`, options)
    .then((response) => response.json())
    .then((response) => {return response.data})
    .catch((err) => console.error(err));
};

export default useFetch;
