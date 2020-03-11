<script>
  export let actions = [];
</script>

<style lang="scss" global>
  @import "../Card";
</style>

<section class="Card card">
  <div class="card-content">
    <slot />
  </div>
  <slot name="actions">
    {#each actions as action}
      <div class="card-action">
        <svelte:component this={action} />
      </div>
    {/each}
  </slot>
</section>
