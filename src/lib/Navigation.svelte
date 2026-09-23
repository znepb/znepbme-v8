<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import { page } from '$app/state';
</script>

<nav class="nav">
	<a class="logo-box" href="/">
		<Logo />
	</a>
	<div class="links-container">
		<ul class="links">
			<li class:active={page.url.pathname === '/'}>
				intro
				{#if page.url.pathname === '/'}
					<div class="highlight"></div>
				{/if}
			</li>
			<li class:active={page.url.pathname.startsWith('/projects')}>
				projects
				{#if page.url.pathname.startsWith('/projects')}
					<div class="highlight"></div>
				{/if}
			</li>
			<li class:active={page.url.pathname.startsWith('/articles')}>
				articles
				{#if page.url.pathname.startsWith('/articles')}
					<div class="highlight"></div>
				{/if}
			</li>
			<li class:active={page.url.pathname.startsWith('/contact')}>
				contact
				{#if page.url.pathname.startsWith('/contact')}
					<div class="highlight"></div>
				{/if}
			</li>
		</ul>
	</div>
</nav>

<style lang="scss">
	.nav {
		display: flex;
		flex-direction: row;
		border-bottom: solid 1px var(--color-1);
		width: 100%;

		position: fixed;
		top: 0;
		left: 0;
		background: var(--background);

		z-index: 1000;
	}

	.logo-box {
		padding: 2.5rem 3.75rem;
		border-right: solid 1px var(--color-1);
		color: var(--color-4);

		transition:
			color 0.25s,
			background-color 0.25s;

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
		gap: 1rem;
		font-size: 1.25rem;

		font-weight: 500;

		& > .active {
			font-weight: 700;
		}
	}

	.highlight {
		width: 100%;
		height: 2px;
		background-color: var(--color-4);
	}
</style>
