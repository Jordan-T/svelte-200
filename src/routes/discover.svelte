<script>
	import { onMount, onDestroy } from "svelte";
	import PersonCard from "../components/PersonCard/PersonCard.svelte";
	import Fab from "../components/Fab.svelte";
	import peopleStore, { peopleIds } from "../store/people-store";
	import { succ, pred } from "../utils";

	let currentIndex = 0;

	let playing = false;
	let interval;

	$: current = $peopleIds[currentIndex];

	onMount(() => {
		play();
	});

	onDestroy(() => {
		pause();
	});

	function play() {
		playing = true;
		interval = setInterval(showNextPerson, 2000);
	}

	function pause() {
		playing = false;
		clearInterval(interval);
	}

	function showNextPerson() {
		const max = $peopleIds.length - 1;
		currentIndex = succ(currentIndex, 0, max);
	}

	function showPrevPerson() {
		const max = $peopleIds.length - 1;
		currentIndex = pred(currentIndex, 0, max);
	}

	function onPrev(e) {
		e.preventDefault();
		showPrevPerson();
	}

	function onNext(e) {
		e.preventDefault();
		showNextPerson();
	}

	function onPlay(e) {
		e.preventDefault();
		play();
	}

	function onPause(e) {
		e.preventDefault();
		pause();
	}
</script>

<div class="card-container">
	<PersonCard id={current} />
</div>

<div class="control-container">
	<Fab kind="skip_previous" on:click={onPrev} />
	{#if playing}
		<Fab kind="pause" large on:click={onPause} />
	{:else}
		<Fab kind="play_arrow" large on:click={onPlay} />
	{/if}
	<Fab kind="skip_next" on:click={onNext} />
</div>
