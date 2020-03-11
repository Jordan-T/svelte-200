<script>
  import AppBar from "./components/AppBar.svelte";
  import Spinner from "./components/Spinner.svelte";
  import Index from "./routes/index.svelte";
  import { fetchPeople } from "./service/people";
  import peopleStore from "./store/people-store";

  let peopleLoading = true;

  fetchPeople().then(people => {
    peopleStore.set(people);
    peopleLoading = false;
  });
</script>

<style lang="scss" global>
  @import "./index";
  @import "./App";

  .AppMain--center {
    display: flex;
    min-height: 200px;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="App">
  <header>
    <AppBar />
  </header>
  <main>
    {#if peopleLoading}
      <div class="AppMain--center">
        <Spinner />
      </div>
    {:else}
      <Index />
    {/if}
  </main>
</div>
