import axios from "axios";

const apiKey = "f85a1f20";

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    );
    return response.data?.Response === "True" ? response.data.Search : [];
  } catch (error) {
    throw new Error("Oops..Something went wrong, please refresh");
  }
};
