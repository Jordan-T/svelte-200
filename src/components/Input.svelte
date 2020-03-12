<script>
	export let name = "";
	export let type;
	export let label;
	export let value;
	export let disabled = false;
	export let isInvalid = false;
	export let validityMessage = "";
	export let required = null;

	let touched = false;

	const idForName = name => `person-form-${name}`;
</script>

<div class="input-field">
	<input
		id={idForName(name)}
		{name}
		{type}
		{value}
		{disabled}
		{required}
		class:invalid={isInvalid && touched}
		autoComplete="off"
		on:input
		on:blur={() => (touched = true)} />
	<label for={idForName(name)} class:active={value}>{label}</label>
	{#if isInvalid && validityMessage && touched}
		<span class="helper-text" data-error={validityMessage} />
	{/if}
</div>
