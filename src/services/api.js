import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";

const fetchImages = async (query) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      per_page: 10,
    },
  });
  return response.data;
};

export default fetchImages;
