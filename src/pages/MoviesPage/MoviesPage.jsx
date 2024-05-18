import { useEffect, useState } from "react";
import { getSearchMovie } from "../../api/apiService";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // getSearchMovie(value)
    // console.log(getSearchMovie(value));
    
    setLoading(true);
    if (value === "") return;
    const fetchSearchMovie = async () => {
    try {
    const moviesData = await getSearchMovie(value);
    setMovies(moviesData);
        console.log(moviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchMovie();
    
  }, [value])
  
  const handleSubmit= value => {
    setSearchParams({ query: value });
    console.log(value);    
};

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} /> }
      </div>
  )
}

export default MoviesPage;