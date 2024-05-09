import MovieDetails from "./MovieDetails";
import StarRating from "./StarRating";
import MovieDetails_2 from "./MovieDetails_2";
import MovieDetails_3 from "./MovieDetails_3";

function MovieDetail({ selectedId }) {
  return (
    <>
      <section id="section-features" class="section-features">
        <div class="row">
          <div class="col-1-of-4">
            <div class="feature-box">
              <MovieDetails selectedId={selectedId} />
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <h3 class="heading-tertiary u-margin-bottom-small">Plot</h3>
              <MovieDetails_2 selectedId={selectedId} />
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-map"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Stars and Directors
              </h3>
              <MovieDetails_3 selectedId={selectedId} />
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-heart"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Rate the movie
              </h3>
              <div class="rating">
                <StarRating />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDetail;
