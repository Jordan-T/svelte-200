<script>
	import { Link } from "svelte-routing";

	function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
		const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

		// The object returned here is spread on the anchor element's attributes
		if (isActive) {
			return { class: "active" };
		}
		return {};
	}
</script>

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
	<Link to="/" {getProps}>show all</Link>
	<hr />
	<Link to="/discover" {getProps}>discover</Link>
</nav>
