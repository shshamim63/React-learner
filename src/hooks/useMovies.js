import { useState, useEffect } from "react";

import { fetchMovies } from "../api/movie";

export const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const searchResult = await fetchMovies(query, {
          signal: controller.signal,
        });
        if (!searchResult.length) throw new Error("Movie Not found");
        setMovies(searchResult);
        setError("");
      } catch (error) {
        if (error.message !== "AbortError") {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, error, isLoading };
};
