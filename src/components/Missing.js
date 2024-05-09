function Missing() {
  return (
    <>
      <section class="section-missing" id="section-missing">
        <div class="row">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">Found Something Missing</h2>
                  <p class="heading-secondary">Tell us here!!</p>
                </div>

                <div class="form__group">
                  <input
                    type="text"
                    class="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label for="name" class="form__label">
                    Full name
                  </label>
                </div>

                <div class="form__group">
                  <input
                    type="email"
                    class="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label for="email" class="form__label">
                    Email address
                  </label>
                </div>

                <div class="form__group">
                  <input
                    type="text"
                    class="form__input"
                    placeholder="What's Missing?"
                    required
                  />
                  <label for="missing" class="form__label">
                    Missing
                  </label>
                </div>

                <div class="form__group">
                  <button class="btn btn--green">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Missing;
