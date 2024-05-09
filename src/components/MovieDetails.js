import { useEffect, useState } from "react";
import Loader from "./Loader";

function MovieDetails({ selectedId }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    Title: title,

    Poster: poster,
    Runtime: runtime,
    imdbRating,

    Released: released,

    Genre: genre,
  } = movie;

  const KEY = "69e90392";

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <header>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
            <button className="btn-add">+ Add to the List</button>
          </div>
        </header>
      )}
    </div>
  );
}

export default MovieDetails;
