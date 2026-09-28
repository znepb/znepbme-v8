<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/global.scss';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
	import { ACCESSABILITY_USE_OPENDYSLEXIC } from '../localstorageKeys';
	import { browser } from '$app/environment';

	if (browser) {
		console.log('browser section');
		let useOpendyslexic = localStorage.getItem(ACCESSABILITY_USE_OPENDYSLEXIC) == 'true';

		if (useOpendyslexic) {
			document.body.classList.add('font-opendyslexic');
		}

		window.addEventListener('storage', (event) => {
			console.log(event);
			if (event.key === ACCESSABILITY_USE_OPENDYSLEXIC) {
				useOpendyslexic = event.newValue == 'true';
			}
		});
	}

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navigation />

{@render children()}

<Footer />
