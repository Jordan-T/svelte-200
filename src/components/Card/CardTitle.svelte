<script>
  export let mainTitle = '';
  export let subTitle;
</script>

<div class="card-title">
  <div><slot>{mainTitle}</slot></div>
  <div class="card-subtitle">{subTitle}</div>
</div>
