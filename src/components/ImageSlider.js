import { useCallback, useEffect, useRef, useState } from "react";
import "../main.scss";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "10px",
  fontSize: "35px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "10px",
  fontSize: "35px",
  color: "#fff",
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
  overflow: "hidden",
  height: "100%",
};

const ImageSlider = ({ movies, parentWidth, onSelectMovie }) => {
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
    backgroundImage: `url(${movies[slideIndex].Poster})`,
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
          {movies.map((movie, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
              onClick={() => onSelectMovie(movie.imdbID)}
            ></div>
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

export default ImageSlider;
