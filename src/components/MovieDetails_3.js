import { useEffect, useState } from "react";

function MovieDetails_3({ selectedId }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { Actors: actors, Director: director } = movie;
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
      <header>
        <section>
          <p>Starring: {actors}</p>
          <p>Directed by: {director}</p>
        </section>
      </header>
    </div>
  );
}

export default MovieDetails_3;
