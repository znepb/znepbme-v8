<script lang="ts">
	import Icon from '../Icon.svelte';
	import type { Icons } from '$lib/icons';

	const { icon, name, contact, url }: { icon: Icons; name: string; contact: string; url: string } =
		$props();
</script>

<a href={url} target="_blank" rel="external" class="contact-card">
	<div>
		<Icon {icon} />
		<h1>{name}</h1>
		<h2>{contact}</h2>
	</div>
	<Icon icon="externallink" />
</a>

<style lang="scss">
	.contact-card {
		color: var(--foreground);
		border-left: var(--accent-border);
		padding: 2.5rem;
		text-decoration: none;

		display: flex;
		align-items: center;
		justify-content: space-between;

		& > div {
			& > :global(svg) {
				width: 2.5rem;
				height: 2.5rem;
				transition: color 0.25s;
			}

			& > h1 {
				transition: color 0.25s;
				font-size: 2rem;
				font-weight: 800;
			}

			& > h2 {
				transition: color 0.25s;
				font-size: 1.5rem;
				color: var(--color-3);
				font-weight: 400;
			}
		}

		&:hover {
			color: var(--background);
			background-color: var(--color-3);

			& > div > h2 {
				color: var(--color-1);
			}

			& > :global(svg) {
				opacity: 1;
			}
		}

		& > :global(svg) {
			opacity: 0;
			color: var(--background);
			width: 2rem;
			height: 2rem;
			transition:
				color 0.25s,
				opacity 0.25s;
		}

		transition: background-color 0.25s;

		&:last-child {
			border-right: var(--accent-border);
		}

		@media screen and (max-width: 64rem) {
			border-right: var(--accent-border);
			border-bottom: var(--accent-border);

			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>
