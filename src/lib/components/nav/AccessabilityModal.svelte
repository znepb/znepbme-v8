<script lang="ts">
	import Modal from '../Modal.svelte';
	import { ACCESSABILITY_USE_OPENDYSLEXIC } from '../../../localstorageKeys';
	import { browser } from '$app/env';

	let useOpenDyslexicFont = $state(false);

	let { open = $bindable() }: { open: boolean } = $props();

	$effect(() => {
		localStorage.setItem(ACCESSABILITY_USE_OPENDYSLEXIC, String(useOpenDyslexicFont));
		console.log('Update local storage item', useOpenDyslexicFont);
	});

	if (browser) {
		useOpenDyslexicFont = localStorage.getItem(ACCESSABILITY_USE_OPENDYSLEXIC) == 'true';
	}
</script>

<Modal header="accessability settings" bind:open>
	<div class="form-control-area">
		<input type="checkbox" id="use-opendyslexic" bind:checked={useOpenDyslexicFont} />
		<label for="use-opendyslexic"> Use OpenDyslexic font </label>
	</div>
	<p class="note">Some settings may require a page reload to apply.</p>
</Modal>

<style>
	.note {
		margin-top: 1rem;
		font-size: 1rem;
		font-style: italic;
		color: var(--color-3);
	}
</style>
