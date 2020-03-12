<script>
	export let actions = [];
	export let withActions = false;
</script>

<style lang="scss" global>
	@import "../Card";
</style>

<section class="Card card">
	<div class="card-content">
		<slot />
	</div>
	{#if withActions}
		<div class="card-action">
			<slot name="actions">
				{#each actions as action}
					<svelte:component this={action} />
				{/each}
			</slot>
		</div>
	{/if}
</section>
