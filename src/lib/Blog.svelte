<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Blog } from '$lib/types';

	const { blog, style }: { blog: Blog; style?: HTMLAttributes<HTMLDivElement>['style'] } = $props();
</script>

<div class="blog-post" {style}>
	<header>
		<img
			src={`${import.meta.env.VITE_MINIO_ENDPOINT}${blog.cover}`}
			alt="Blog Cover"
			width={1280}
			height={720}
		/>
		<div>
			<a href={`/blog/${blog.id}`}>
				<span>Read</span>
				<ArrowRight />
			</a>
		</div>
	</header>
	<main>
		<header>
			<h2>
				{blog.title}
			</h2>
			<p>
				{blog.blurb}
			</p>
		</header>
		<footer>
			<div class="post-info">
				<span class="post-date">
					{new Date(blog.postDate)
						.toLocaleString(undefined, {
							month: 'short',
							day: '2-digit',
							year: 'numeric'
						})
						.toLocaleLowerCase()}
				</span>
				<span class="post-tag">
					{blog.category}
				</span>
			</div>
		</footer>
	</main>
</div>

<style>
	.blog-post {
		border-left: var(--accent-border);
		border-bottom: var(--accent-border);
		margin-bottom: -1px;
		display: flex;
		flex-direction: column;

		&:nth-child(4n),
		&:last-child {
			border-right: var(--accent-border);
		}

		&:hover {
			& > header > div > a {
				opacity: 1;
			}
		}

		& > header {
			position: relative;
			display: flex;
			flex-direction: column;

			& > img {
				width: 100%;
				aspect-ratio: 16 / 9;
				height: auto;
			}

			& > div {
				position: absolute;
				top: 0;
				right: 0;
				padding: 1rem;

				z-index: 2;

				display: flex;
				justify-content: flex-end;

				& > a {
					all: unset;

					text-transform: uppercase;
					display: inline-flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-end;
					cursor: pointer;
					gap: 0.5rem;
					opacity: 0;

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
			}
		}

		& > main {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-grow: 1;

			gap: 1.25rem;

			border-top: var(--accent-border);
			width: 100%;
			padding: 2rem;

			& > header {
				& > h2 {
					font-size: 1.75rem;
					font-weight: 600;
					line-height: 1.75rem;
				}

				& > p {
					color: var(--color-3);
				}
			}

			& > footer {
				display: flex;
				flex-direction: column;

				gap: 1.25rem;

				& > .post-info {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					& > .post-date {
						font-size: 1.25rem;
						color: var(--color-2);
					}

					& > .post-tag {
						font-size: 1.25rem;
						font-weight: 800;
					}
				}
			}
		}
	}
</style>
