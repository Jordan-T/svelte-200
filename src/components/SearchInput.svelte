<script>
  export let id;
  export let label;
  export let value;
</script>

<style lang="scss">
  @import "./SearchInput.css";
</style>

<div class="SearchInput input-field">
  <i class="material-icons prefix">search</i>
  <input {id} type="text" {value} on:input />
  <label for={id} class={value ? 'active' : null}>{label}</label>
</div>
