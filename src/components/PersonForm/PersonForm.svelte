<script>
	import { onDestroy } from "svelte";
	import Card from "../Card/Card.svelte";
	import CardTitle from "../Card/CardTitle.svelte";
	import Input from "../Input.svelte";
	import { updatePerson } from "../../service/people";
	import peopleStore from "../../store/people-store";
	import {
		isEmpty,
		isValidEmail,
		isFrenchPhoneNumber
	} from "../../helpers/validation";

	export let id;
	export let onDone;

	let person;
	let firstname;
	let lastname;
	let entity;
	let email;
	let phone;

	const unsubscribe = peopleStore.subscribe(items => {
		person = items.find(i => i.id === id);
		firstname = person.firstname;
		lastname = person.lastname;
		entity = person.entity;
		email = person.email;
		phone = person.phone;
	});

	onDestroy(() => {
		unsubscribe();
	});

	let saving;

	$: title = `${firstname} ${lastname}`;
	$: firstnameValid = !isEmpty(firstname);
	$: lastnameValid = !isEmpty(lastname);
	$: entityValid = !isEmpty(entity);
	$: emailValid = isValidEmail(email);
	$: phoneValid = isFrenchPhoneNumber(phone);
	$: valid =
		firstnameValid && lastnameValid && entityValid && emailValid && phoneValid;
	$: dirty =
		firstname !== person.firstname ||
		lastname !== person.lastname ||
		entity !== person.entity ||
		email !== person.email ||
		phone !== person.phone;

	function onSubmit() {
		saving = true;
		const newData = {
			person,
			firstname,
			lastname,
			entity,
			email,
			phone
		};
		updatePerson(person.id, newData).then(serverData => {
			if (serverData) {
				peopleStore.updatePerson(person.id, serverData);
				onDone();
			} else {
				saving = false;
				alert("could not update person :(");
			}
		});
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<Card withActions>
		<div slot="actions">
			<button
				type="submit"
				class="btn btn-default"
				disabled={saving || !valid || !dirty}>
				save
			</button>
			<a on:click|preventDefault={onDone} href="#cancel">cancel</a>
		</div>
		<CardTitle mainTitle={title} />
		<Input
			name="firstname"
			type="text"
			label="first name"
			value={firstname}
			isInvalid={!firstnameValid}
			on:input={event => (firstname = event.target.value)}
			required />
		<Input
			name="lastname"
			type="text"
			label="last name"
			value={lastname}
			isInvalid={!lastnameValid}
			on:input={event => (lastname = event.target.value)}
			required />
		<Input
			name="entity"
			type="text"
			label="entity"
			value={entity}
			isInvalid={!entityValid}
			on:input={event => (entity = event.target.value)}
			required />
		<Input
			name="email"
			type="text"
			label="email"
			value={email}
			required
			isInvalid={!emailValid}
			validityMessage="please enter a valid email address"
			on:input={event => (email = event.target.value)} />
		<Input
			name="phone"
			type="text"
			label="phone"
			value={phone}
			isInvalid={!phoneValid}
			required
			validityMessage="please enter a valid 10 digit french phone number"
			on:input={event => (phone = event.target.value)} />
	</Card>
</form>
