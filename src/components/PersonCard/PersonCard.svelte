<script>
	import { onDestroy } from "svelte";
	import { link } from "svelte-routing";
	import peopleStore from "../../store/people-store";
	import Card from "../Card/Card.svelte";
	import CardAvatar from "../Card/CardAvatar.svelte";
	import CardTitle from "../Card/CardTitle.svelte";
	import CardInfo from "../Card/CardInfo.svelte";

	export let id;
	export let onEdit = null;

	let person;

	const unsubscribe = peopleStore.subscribe(items => {
		person = items.find(i => i.id === id);
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

{#if person}
	<Card withActions={onEdit}>
		<div slot="actions">
			{#if onEdit}
				<a on:click={onEdit} href="#edit">edit</a>
			{/if}
		</div>
		<CardAvatar
			photoUrl={person.photo}
			altText={`photo of ${person.firstname}`} />
		<CardTitle subTitle={person.entity}>

			<a href={`/person/${person.id}`} use:link>
				{person.firstname} {person.lastname}
			</a>
		</CardTitle>
		<CardInfo icon="email">
			<a href={`mailto:${person.email}`}>{person.email}</a>
		</CardInfo>
		<CardInfo icon="phone">
			<a href={`tel:${person.phone}`}>{person.phone}</a>
		</CardInfo>
		{#if person.managerId}
			<CardInfo icon="supervisor_account" desc="manager">
				<a href={`/person/${person.managerId}`} use:link>{person.manager}</a>
			</CardInfo>
		{/if}
	</Card>
{/if}
