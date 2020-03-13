<script>
	import { Router, Route } from "svelte-routing";
	import AppBar from "./components/AppBar.svelte";
	import Spinner from "./components/Spinner.svelte";
	import Index from "./routes/index.svelte";
	import Person from "./routes/person.svelte";
	import Discover from "./routes/discover.svelte";
	import { fetchPeople } from "./service/people";
	import peopleStore from "./store/people-store";

	export let url = "";

	let peopleLoading = true;

	fetchPeople().then(people => {
		peopleStore.setPeople(people);
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

<Router {url}>
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
				<Route path="discover" component={Discover} />
				<Route path="person/:id" component={Person} />
				<Route path="/">
					<Index />
				</Route>
			{/if}
		</main>
	</div>
</Router>
