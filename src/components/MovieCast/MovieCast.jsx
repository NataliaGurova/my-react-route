import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/apiService"
import { useEffect, useState } from "react";

const MovieCast = () => {
  const {movieId} = useParams()
  const [cast, setCast] = useState([]);
  // console.log(getMovieCredits(movieId));
  
  
  useEffect(() => {  
    const fetchMovie = async () => {
      if (!movieId) return;
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData.cast);

      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast.map((el) => 
        <li key={el.id}>
          <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} width={200} />
          <p>Name: {el.name}</p>
            <p>Character: {el.character}</p>
            <p>________________________________________________________</p>
        </li>)}        
      </ul>
    </section>
  )
}

export default MovieCast;