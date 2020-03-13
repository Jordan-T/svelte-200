<script>
	export let kind;
	export let large = false;
</script>

<style lang="scss">
	@import "./Fab";
</style>

<a
	class="Fab btn-default btn-floating waves-effect waves-light"
	class:btn-large={large}
	on:click
	href={`#${kind}`}>
	<i class="material-icons">{kind}</i>
</a>
