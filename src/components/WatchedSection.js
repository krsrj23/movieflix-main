import WatchedBackup from "./WatchedBackup";

function WatchedSection() {
  return (
    <>
      <section class="section-watched" id="section-watched">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">Movies you watched</h2>
        </div>

        <WatchedBackup parentWidth={250} />
      </section>
    </>
  );
}

export default WatchedSection;
