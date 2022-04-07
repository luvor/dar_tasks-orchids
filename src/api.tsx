import axios from "axios";
export const api = axios.create({
  baseURL: "https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab",
  timeout: 1000,
});
export const tmdb = axios.create({
  baseURL: "https://image.tmdb.org/t/p/original",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "image/jpeg",
  },
  timeout: 1000,
});
