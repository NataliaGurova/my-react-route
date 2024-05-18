
// import { MovieCast } from "../../components/MovieCast/MovieCast"
// import { MovieReviews } from "../../components/MovieReviews/MovieReviews"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetailsById } from "../../api/apiService";
import { useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css"

import { FaCircle } from "react-icons/fa6";


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); 
  const location = useLocation()

  // const backLinkRef = useRef(location.state?.from || '/');
  const backLinkRef = useRef(location.state ?? "/");

  console.log(location.state);
  

  useEffect(() => {  
    const fetchMovie = async () => {
      if (!movieId) return;
      try {
        const movieData = await getMovieDetailsById(movieId);
        setMovie(movieData); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);
  
  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'
  
  return (
    <main>
      <Link to={backLinkRef.current}>Back</Link>
      {movie && (
        <section>
          
          <div className={css.container}>
          {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" width={250}/> : defaultImg}
            <div className={css.listText}>
              <h1 className={css.title}>{movie.title}</h1>
              <ul className={css.genres}>
                {movie.genres.map((genre, index) => (
                  <li key={index}><span className={css.span}><FaCircle size="5px" style={{ marginRight: '7px' }}/>{genre.name}</span></li>
                  ))}
              </ul>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
             
              
            </div>
            </div>
        </section>
      )}
      <h4 className={css.titleInfo}>Additional information</h4>
      <ul>
        <li>
          <Link to="credits">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;