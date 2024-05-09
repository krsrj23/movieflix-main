import { useState, useEffect } from "react";
import "./App.css";
import "./main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SearchMovieSlider from "./components/SearchMovieSlider";
import MovieDetail from "./components/MovieDetail";
import WatchedSection from "./components/WatchedSection";
import Trending from "./components/Trending";
import Missing from "./components/Missing";
import FooterSection from "./components/FooterSection";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const KEY = "69e90392";
function App() {
  const [query, setQuery] = useState("");
  // eslint-disable-next-line
  const [movies, setMovies] = useState(tempMovieData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  const containerStyles = {
    width: "250px",
    height: "300px",
    margin: "0 auto",
  };

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  return (
    <>
      <div>
        <div class="content">
          <Navigation />
          <Header setQuery={setQuery} movies={movies} query={query} />

          <main>
            <SearchMovieSlider
              error={error}
              isLoading={isLoading}
              movies={movies}
              handleSelectMovie={handleSelectMovie}
            />
            <MovieDetail selectedId={selectedId} />
            <WatchedSection />
            <Trending containerStyles={containerStyles} />
            <Missing />
          </main>
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default App;
