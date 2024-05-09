import React, { useState, useEffect } from "react";
import WatchListSlider from "./WatchListSlider";

const MoviePosterSliderWithAddButton = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleAdd = (newMovie) => {
    setSelectedMovie(newMovie);
  };

  const renderSlider = () => {
    if (selectedMovie) {
      return (
        <WatchListSlider
          movies={[selectedMovie]}
          parentWidth={window.innerWidth - 200}
        />
      );
    }
  };

  return (
    <div>
      {renderSlider()}
      <MovieDetails onAddWatched={handleAdd} />
    </div>
  );
};

export default MoviePosterSliderWithAddButton;
