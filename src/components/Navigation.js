function Navigation() {
  return (
    <>
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                HOMEPAGE
              </a>
            </li>
            <li class="navigation__item">
              <a href="#section-features" class="navigation__link">
                Movie details
              </a>
            </li>
            <li class="navigation__item">
              <a href="#section-watched" class="navigation__link">
                Movies You Watched
              </a>
            </li>
            <li class="navigation__item">
              <a href="#section-trending" class="navigation__link">
                Trending Movies
              </a>
            </li>
            <li class="navigation__item">
              <a href="#section-missing" class="navigation__link">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
