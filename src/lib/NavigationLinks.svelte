<script lang="ts">
	import { page } from '$app/state';

	const { closeNav }: { closeNav?: () => void } = $props();
</script>

<li class:active={page.url.pathname === '/'}>
	<a href="/" onclick={closeNav}>
		intro
		{#if page.url.pathname === '/'}
			<div class="highlight"></div>
		{/if}
	</a>
</li>
<li class:active={page.url.pathname.startsWith('/projects')}>
	<a href="/#projects" onclick={closeNav}>
		projects
		{#if page.url.pathname.startsWith('/projects')}
			<div class="highlight"></div>
		{/if}
	</a>
</li>
<li class:active={page.url.pathname.startsWith('/articles')}>
	<a href="/#articles" onclick={closeNav}>
		thoughts
		{#if page.url.pathname.startsWith('/blog')}
			<div class="highlight"></div>
		{/if}
	</a>
</li>
<li class:active={page.url.pathname.startsWith('/contact')}>
	<a href="/#contact" onclick={closeNav}>
		contact
		{#if page.url.pathname.startsWith('/contact')}
			<div class="highlight"></div>
		{/if}
	</a>
</li>
