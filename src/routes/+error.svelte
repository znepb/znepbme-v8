<script>
	import { page } from '$app/state';
	import House from '@lucide/svelte/icons/house';
</script>

<div class="error">
	<h1>Oops! Something went wrong</h1>
	<h2>Status: {page.status} ({page.error?.message})</h2>

	<a class="home" href="/"><House /> Go Home</a>
</div>

<style>
	.error {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.home {
		all: unset;

		margin-top: 2rem;

		text-transform: uppercase;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		cursor: pointer;
		gap: 0.5rem;

		transition:
			opacity 0.5s,
			background-color 0.25s,
			color 0.25s;

		padding: 0.875rem 1rem;
		font-size: 1.375rem;
		line-height: 1rem;
		color: var(--color-3);
		background-color: var(--color-1);
		backdrop-filter: blur(5px);

		&:hover {
			color: var(--color-1);
			background-color: var(--color-3);
		}
	}
</style>
