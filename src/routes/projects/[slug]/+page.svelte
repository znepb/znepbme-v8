<script lang="ts">
	import SvleteMarkdown from '@humanspeak/svelte-markdown';
	import type { Project } from '$lib/types';
	import Icon from '$lib/components/Icon.svelte';
	import Globe from '@lucide/svelte/icons/globe';
	import type { Icons } from '$lib/icons';

	let { data }: { data: { project: Project } } = $props();
</script>

<svelte:head>
	<title>znepb.me - {data.project.name}</title>
</svelte:head>

<header class="brief">
	<img src={`${import.meta.env.VITE_MINIO_ENDPOINT}${data.project.icon}`} alt="" />
	<div>
		<h1>{data.project.name}</h1>
		<h2>{data.project.blurb}</h2>
	</div>
</header>

<section class="details">
	<div>
		<h2>Status</h2>
		<h1 class={`status-${data.project.status}`}>
			{#if data.project.status == 'inprogress'}
				In Progress
			{:else}
				{data.project.status.substring(0, 1).toUpperCase()}{data.project.status.substring(1)}
			{/if}
		</h1>
	</div>
	<div>
		<h2>Category</h2>
		<h1>{data.project.category}</h1>
	</div>
	<div>
		<h2>Period</h2>
		<h1>
			{#if data.project.startYear == data.project.endYear}
				{data.project.startYear}
			{:else if data.project.endYear == undefined}
				{data.project.startYear}-now
			{:else if data.project.endYear != undefined && data.project.startYear != undefined}
				{data.project.startYear}-{data.project.endYear}
			{/if}
		</h1>
	</div>
	<div>
		<h2>Featured</h2>
		<h1>{data.project.isFeatured ? 'Yes' : 'No'}</h1>
	</div>
</section>

<main class="main">
	<section class="about">
		<article class="markdown description">
			<SvleteMarkdown source={data.project.description}></SvleteMarkdown>
		</article>
		<section class="made-with">
			<span>Made with</span>
			<div class="technology-list">
				{#each data.project.technologies as technology (technology)}
					<div>
						<Icon icon={technology as Icons} />
						{technology}
					</div>
				{/each}
			</div>
		</section>
		{#if data.project.links != undefined && data.project.links.length > 0}
			<section class="links">
				{#each data.project.links as link (link.url)}
					<a href={link.url} target="_blank" rel="noreferrer">
						{#if link.type === 'website'}
							<Globe />
						{:else if link.type === 'github'}
							<Icon icon="github" />
						{/if}
						{link.type}
					</a>
				{/each}
			</section>
		{/if}
	</section>
	<section class="gallery">
		{#each data.project.gallery as image (image)}
			<div>
				<img src={`${import.meta.env.VITE_MINIO_ENDPOINT}${image.url}`} alt={image.caption} />
			</div>
		{/each}

		{#if data.project.gallery.length % 2 == 1}
			<div></div>
		{/if}
	</section>
</main>

<style lang="scss">
	.brief {
		border-bottom: var(--accent-border);

		display: flex;
		gap: 2.5rem;
		padding: 0 3.75rem;
		align-items: center;

		@media screen and (max-width: 48rem) {
			padding: 2.5rem;
			flex-direction: column;
			gap: 2rem;
			text-align: center;

			& > img {
				border: var(--accent-border);
			}
		}

		& > img {
			width: 128px;
			height: 128px;
			border-left: var(--accent-border);
			border-right: var(--accent-border);
		}

		& > div {
			& > h1 {
				font-size: 2.25rem;
				font-weight: 800;
				line-height: 2.25rem;
			}

			& > h2 {
				font-size: 1.75rem;
				font-weight: 400;
				color: var(--color-3);
				line-height: 1.75rem;
			}
		}
	}

	.details {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;

		@media screen and (max-width: 40rem) {
			grid-template-columns: 1fr !important;

			& > div {
				border-left: none !important;
			}
		}

		@media screen and (max-width: 64rem) {
			grid-template-columns: 1fr 1fr;

			& > div {
				border-right: none;
				padding: 2.5rem !important;
				text-align: center;
				border-right: none !important;

				&:nth-child(2n) {
					border-left: var(--accent-border);
				}
			}
		}

		& > div {
			padding: 2.5rem 3.75rem;
			border-bottom: var(--accent-border);

			& > h1 {
				font-size: 2rem;
				font-weight: 800;
				line-height: 2rem;
				color: var(--color-3);

				&.status-finished,
				&.status-active {
					color: #9ef0b0;
				}
				&.status-deprecated {
					color: #f09ea9;
				}
				&.status-paused {
					color: #f0d19e;
				}
				&.status-inprogress {
					color: #9ee4f0;
				}
			}

			& > h2 {
				font-size: 1.5rem;
				font-weight: 400;
				line-height: 1.5rem;
			}

			&:not(:last-child) {
				border-right: var(--accent-border);
			}
		}
	}

	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;

		@media screen and (max-width: 48rem) {
			grid-template-columns: 1fr;
		}
	}

	.about {
		border-right: var(--accent-border);
		display: flex;
		flex-direction: column;
	}

	.description {
		padding: var(--section-padding-y) var(--section-padding-x);
		border-bottom: var(--accent-border);
		flex-grow: 1;
	}

	.made-with {
		padding: var(--section-padding-y) var(--section-padding-x);

		& > span {
			font-size: 1.5rem;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;

		@media screen and (max-width: 48rem) {
			grid-template-columns: 1fr;

			& > div {
				border-right: none !important;
			}
		}

		& > div {
			overflow: hidden;
			border-bottom: var(--accent-border);

			&:not(:nth-child(2n)) {
				border-right: var(--accent-border);
			}

			&:hover {
				& > img {
					transform: scale(1.1);
				}
			}

			& > img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.5s;
			}
		}
	}

	.links {
		display: flex;
		flex-direction: column;

		& > a {
			background-color: var(--color-0);
			color: var(--color-3);
			padding: 1.25rem 3.75rem;
			font-size: 1.5rem;
			font-weight: medium;
			display: flex;
			flex-direction: row;
			gap: 0.75rem;
			align-items: center;

			border-top: var(--accent-border);
			text-decoration: none !important;

			transition:
				color 0.25s,
				background-color 0.25s;

			&:hover {
				color: var(--color-0);
				background-color: var(--color-3);
			}

			&:last-child {
				border-bottom: var(--accent-border);
			}
		}
	}
</style>
