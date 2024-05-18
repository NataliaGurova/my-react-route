import {useState, useEffect} from "react"
import { getTrendingMovies } from "../../api/apiService";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader"
import css from "./HomePage.module.css"

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    setLoading(true);
    const fetchTrendingMovies = async () => {
      try {
        const moviesData = await getTrendingMovies();
        setMovies(moviesData);      
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
    
  }, [])
  
  return (
    <main className={css.container}>
      <h1 className={css.text}>Trending today</h1>
      {loading && <Loader />}
      {error && <p>An error has occurred</p>}
      <MovieList className={css.list} movies={movies} />
    </main>
  )
}

export default HomePage;
