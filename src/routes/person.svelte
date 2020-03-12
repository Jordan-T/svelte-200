<script>
	import PersonCard from "../components/PersonCard/PersonCard.svelte";
	import PersonForm from "../components/PersonForm/PersonForm.svelte";
	import { peopleIds } from "../store/people-store";

	export let id;

	let isEdit = false;

	$: hasFound = $peopleIds.includes(id);

	function onEdit() {
		isEdit = true;
	}

	function onDone() {
		isEdit = false;
	}
</script>

<div class="card-container">
	{#if hasFound}
		{#if isEdit}
			<PersonForm {id} {onDone} />
		{:else}
			<PersonCard {id} {onEdit} />
		{/if}
	{:else}not found :({/if}
</div>
