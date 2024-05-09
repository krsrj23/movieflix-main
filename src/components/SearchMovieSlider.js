import ImageSlider from "./ImageSlider";
import ErrorMessage from "./ErrorMessage";
import { Loader } from "react-feather";

function SearchMovieSlider({ error, isLoading, movies, handleSelectMovie }) {
  const containerStyles = {
    width: "250px",
    height: "300px",
    margin: "0 auto",
  };
  return (
    <>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">Movies</h2>
        </div>
        <div className="box">
          <ul className="list">
            <div style={containerStyles}>
              {isLoading && <Loader />}
              {!isLoading && !error && (
                <ImageSlider
                  movies={movies}
                  parentWidth={250}
                  onSelectMovie={handleSelectMovie}
                />
              )}
              {error && <ErrorMessage message={error} />}
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}
export default SearchMovieSlider;
