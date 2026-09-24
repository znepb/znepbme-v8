<script lang="ts">
	import SvleteMarkdown from '@humanspeak/svelte-markdown';
	import type { Blog } from '$lib/types';
	import File from '@lucide/svelte/icons/file';

	let { data }: { data: { metadata: Blog; content: string } } = $props();
</script>

<main class="main markdown-pillarbox">
	<img src={`${import.meta.env.VITE_MINIO_ENDPOINT}${data.metadata.cover}`} class="header-image" />

	<header class="post-header">
		<h1>{data.metadata.title}</h1>
		<h2>{data.metadata.blurb}</h2>
		<div class="heading-decoration"></div>
	</header>

	<article class="markdown">
		<SvleteMarkdown source={data.content} />
	</article>

	{#if data.metadata.files != undefined && data.metadata.files.length > 0}
		<section class="attachments">
			<header class="subheading">
				<h3>attachments</h3>
				<div></div>
			</header>
			<div>
				{#each data.metadata.files as file (file.url)}
					<a class="attachment" href={file.url} download>
						<header>
							<File size="32px" />
						</header>
						<div>
							<h2>{file.name}</h2>
							<h3>
								{#if file.size < 10 ** 3}
									{file.size} B
								{:else if file.size < 10 ** 6}
									{Math.round(file.size / 10 ** 3)} KB
								{:else if file.size < 10 ** 9}
									{Math.round(file.size / 10 ** 6)} MB
								{/if}
							</h3>
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	<div class="dates">
		<p>
			created
			{new Date(data.metadata.postDate).toLocaleDateString()} · last updated
			{new Date(data.metadata.postDate).toLocaleDateString()}
		</p>
	</div>
</main>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.header-image {
		aspect-ratio: 3 / 1;
		object-fit: cover;
	}

	.post-header {
		& > h1 {
			font-weight: 800;
			font-size: 2rem;
			line-height: 2.25rem;
		}

		& > h2 {
			font-weight: normal;
			font-size: 1.5rem;
			line-height: 1.75rem;
			color: var(--color-3);
		}
	}

	.attachments {
		& > div {
			margin-top: 1rem;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.attachment {
		outline: var(--accent-border);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.75rem 1rem;
		gap: 0.875rem;
		text-decoration: none;
		color: inherit;

		transition:
			background-color 0.25s,
			color 0.25s;

		&:hover {
			background-color: var(--color-3);
			color: var(--background);

			& > header {
				color: var(--background);
			}

			& > div > h3 {
				color: var(--color-1);
			}
		}

		& > header {
			color: var(--color-3);
			display: flex;
			transition: color 0.25s;
		}

		& > div {
			& > h2 {
				font-size: 1.5rem;
				transition: color 0.5s;
				line-height: 1.5rem;
			}

			& > h3 {
				font-size: 1rem;
				line-height: 1rem;
				font-weight: 500;
				color: var(--color-3);
				transition: color 0.25s;
			}
		}
	}

	.dates {
		display: flex;
		flex-direction: column;

		& > p {
			color: var(--color-2);
			font-size: 1rem;
		}
	}
</style>
