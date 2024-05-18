import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/apiService";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {  
    const fetchMovie = async () => {
      if (!movieId) return;
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData.results);

      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <section>
      {reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </section>
  );
}

export default MovieReviews;