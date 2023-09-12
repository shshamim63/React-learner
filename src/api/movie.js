import axios from "axios";

const apiKey = "f85a1f20";

export const fetchMovies = async (query, property = {}) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`,
      property
    );
    return response.data?.Response === "True" ? response.data.Search : [];
  } catch (error) {
    if (error.name === "CanceledError") {
      throw new Error("AbortError");
    } else {
      throw new Error("Oops..Something went wrong, please refresh");
    }
  }
};

export const fetchMovieDetails = async (imdbId) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Oops..Something went wrong, please refresh");
  }
};
