<script>
	export let mainTitle = "";
	export let subTitle = "";
</script>

<div class="card-title">
	<div>
		<slot>{mainTitle}</slot>
	</div>
	{#if subTitle}
		<div class="card-subtitle">{subTitle}</div>
	{/if}
</div>
