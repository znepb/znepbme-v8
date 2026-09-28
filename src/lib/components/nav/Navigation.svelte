<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import NavigationLinks from './NavigationLinks.svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import Settings from '@lucide/svelte/icons/settings';
	import AccessabilityModal from './AccessabilityModal.svelte';

	let open = $state(false);
	let accessabilityModalOpen = $state(false);

	const openSettingsModal = () => {
		accessabilityModalOpen = true;
	};
</script>

<AccessabilityModal bind:open={accessabilityModalOpen} />

<nav class="desktop-nav">
	<a class="logo-box" href="/">
		<Logo />
	</a>
	<div class="links-container">
		<ul class="links">
			<NavigationLinks />
			<button onclick={openSettingsModal} class="square"><Settings /></button>
		</ul>
	</div>
</nav>

<details class="mobile-nav" bind:open>
	<summary class="mobile-nav-summary">
		<a class="logo-box" href="/">
			<Logo />
		</a>

		<div class="mobile-nav-control mobile-nav-expand"><Menu size="40px" /></div>
		<div class="mobile-nav-control mobile-nav-shrink"><X size="40px" /></div>
	</summary>
	<div class="mobile-nav-main">
		<ul class="links">
			<NavigationLinks
				closeNav={() => {
					console.log('Closeing nav');
					open = false;
				}}
			/>
		</ul>

		<button onclick={openSettingsModal} class="square"><Settings /></button>
	</div>
</details>

<style lang="scss">
	.desktop-nav {
		display: flex;
		flex-direction: row;
		border-bottom: solid 1px var(--color-1);
		width: 100%;

		position: sticky;
		top: 0;
		left: 0;
		background: var(--background);

		z-index: 1000;

		@media screen and (max-width: var(--screen-size-s)) {
			display: none;
		}
	}

	.mobile-nav {
		all: unset;

		display: none;

		position: sticky;
		top: 0;
		left: 0;
		height: auto;

		padding: inherit;
		margin: inherit;
		height: auto;

		z-index: 1000;

		@media screen and (var(screen-size-s)) {
			display: block;
		}

		&[open] > div {
			height: calc(100vh - 8.375rem);
			background-color: var(--background);
			width: 100%;
			padding: 3.75rem;
		}

		&[open] > summary {
			& > .mobile-nav-expand {
				display: none;
			}

			& > .mobile-nav-shrink {
				display: block;
			}
		}
	}

	.mobile-nav-shrink {
		display: none;
	}

	.mobile-nav-summary {
		all: unset;

		display: flex;

		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		border-bottom: solid 1px var(--color-1);
		width: 100%;
		height: auto;

		background: var(--background);

		z-index: 1000;

		list-style: none;
	}

	.mobile-nav-main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.mobile-nav-control {
		margin-right: 3.75rem;
	}

	.logo-box {
		padding: 2.5rem 3.75rem;
		border-right: solid 1px var(--color-1);
		color: var(--color-4);

		transition:
			color 0.25s,
			background-color 0.25s;

		@media screen and (max-width: var(--screen-size-s)) {
			border-right: none;

			&:hover {
				background: none !important;
				color: var(--color-4) !important;
			}
		}

		&:hover {
			background-color: var(--color-4);
			color: var(--background);
		}
	}

	.links-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 0 3.75rem;
		flex-grow: 1;
	}

	.links {
		list-style-type: none;
		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		font-size: 1.25rem;

		font-weight: 500;

		@media screen and (max-width: var(--screen-size-s)) {
			flex-direction: column;
			align-items: flex-end;
			font-size: 2rem;

			& > :global(* > a) {
				width: auto;
			}
		}

		& > :global(.active) {
			font-weight: 700;
		}

		& > :global(* > a) {
			color: inherit;

			& > :global(.highlight) {
				width: 100%;
				height: 2px;
				background-color: var(--color-4);
			}
		}
	}
</style>
