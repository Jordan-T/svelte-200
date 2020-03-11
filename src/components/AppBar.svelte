<style lang="scss" global>
  @import "./AppBar";

  .AppBar {
    background-image: url("/AppBar.background.png");
  }
</style>

<nav class="AppBar">
  <img
    class="AppBar-logo"
    src="/AppBar.logo.svg"
    aria-label="people"
    alt="People" />
  <hr class="grow" />
  <a href="/all">show all</a>
  <hr />
  <a href="/discover">discover</a>
</nav>
