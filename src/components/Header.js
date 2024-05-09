function Header({ setQuery, movies, query }) {
  return (
    <>
      <header class="header">
        <div class="header__logo-box">
          <img
            src={require("../resources/down.png")}
            alt="Logo"
            class="header__logo"
          />
        </div>

        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Movie-Flix</span>
            <span class="heading-primary--sub">
              get all your favourite movies and watchlaters at one place
            </span>
          </h1>

          <button href="#" class="btn btn--white btn--animated btn-search">
            Search Movies
          </button>
          <input
            type="text"
            class="input-search search"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="num-results">
            Found <strong>{movies.length}</strong> results
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
