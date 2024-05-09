import { useCallback, useEffect, useRef, useState } from "react";
import "../main.scss";

const MoviePosterSlider = ({ parentWidth }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ef5efcbe3c4ac8f188274f03f5d96eaa"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === movies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, movies]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${movies[slideIndex].poster_path})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * movies.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {movies.map((slide, slideIndex) => (
          <div
            style={dotStyle(slideIndex, currentIndex)}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  bottom: "-27%",
  transform: "translate(0, -50%)",
  right: "-200px",
  fontSize: "35px",
  color: "#0a6fa5",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  bottom: "-27%",
  transform: "translate(0, -50%)",
  left: "-200px",
  fontSize: "35px",
  color: "#0a6fa5",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = (slideIndex, currentIndex) => ({
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  opacity: slideIndex === currentIndex ? "100%" : "40%",
});

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  height: "100%",
};

export default MoviePosterSlider;
