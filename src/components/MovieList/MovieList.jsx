
import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

export const MovieList = ({ movies }) => {

const location = useLocation();
console.log( location);

  return (    
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listItem}>
          <NavLink to={`/movies/${movie.id}`} state={location}>
            <div>
                  <div className={css.listImg}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                      alt={movie.title}
                      // width={300}
                      // height={120}
                    />
                  </div>
                  <div className={css.listText}>
                    <b className={css.title}>
                      {movie.title} ({movie.release_date.slice(0, 4)})
                    </b>
                    <p className={css.rating}>
                      User Score: {Math.round(movie.vote_average * 10)}%
                    </p>
                  </div>
                </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// state={{ from: location }}
