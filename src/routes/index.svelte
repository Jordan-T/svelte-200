<script>
  import peopleStore from "../store/people-store.js";
  import seachStore from "../store/search-store.js";
  import PersonCard from "../components/PersonCard/PersonCard.svelte";
  import SearchInput from "../components/SearchInput.svelte";

  $: personIds = $peopleStore
    .filter(person => {
      const search = $seachStore.trim();

      if (search === "") {
        return true;
      }

      const re = new RegExp(search, "i");
      return re.test(person.firstname) || re.test(person.lastname);
    })
    .map(p => p.id);

  function searchChanged(e) {
    seachStore.set(e.target.value);
  }
</script>

<div class="card-container">
  {#each personIds as personId (personId)}
    <PersonCard id={personId} />
  {/each}
  {#if personIds.length === 0}
    {#if $seachStore.trim() !== ''}
      <h1>Not found</h1>
    {:else}
      <h1>No person</h1>
    {/if}
  {/if}
</div>
<div class="control-container">
  <SearchInput
    id="search"
    label="search by name"
    value={$seachStore}
    on:input={searchChanged} />
</div>
