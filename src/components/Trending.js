import MoviePosterSlider from "./MoviePosterSlider";

function Trending({ containerStyles }) {
  return (
    <>
      <section class="section-trending" id="section-trending">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">Trending Movies</h2>
          <div style={containerStyles}>
            <MoviePosterSlider parentWidth={250} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Trending;
