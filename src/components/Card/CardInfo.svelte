<script>
  export let icon;
  export let desc = '';
</script>

<div class="card-info">
  <i class="material-icons" title={desc || icon}>{icon}</i>
  <span>
    <slot />
  </span>
</div>
