<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Globe from '@lucide/svelte/icons/globe';
	import Icon from '../Icon.svelte';
	import type { Project } from '../../types';
	import type { HTMLAttributes } from 'svelte/elements';

	const { project, style }: { project: Project; style?: HTMLAttributes<HTMLDivElement>['style'] } =
		$props();
</script>

<div class="project card" {style}>
	<header>
		{#if project.gallery != undefined && project.gallery.length > 0}
			<img
				src={`${import.meta.env.VITE_MINIO_ENDPOINT}${project.gallery[0]?.url}`}
				alt={project.gallery[0]?.caption}
				width={1280}
				height={720}
			/>
		{:else}
			<header style:background-color={project.color!} class="header-color">
				<img
					src={`${import.meta.env.VITE_MINIO_ENDPOINT}${project.icon}`}
					alt={project.icon}
					width={128}
					height={128}
				/>
			</header>
		{/if}
		<div>
			<a href={`/projects/${project.id}`}>
				<span>View More</span>
				<ArrowRight />
			</a>
		</div>
	</header>
	<main>
		<header>
			<h2>
				{project.name}
			</h2>
			<p>
				{project.blurb}
			</p>
		</header>
		<footer>
			{#if project.links && project.links?.length > 0}
				<div class="project-links">
					{#each project.links as link (link.url)}
						<a href={link.url} target="_blank" rel="noreferrer">
							{#if link.type === 'website'}
								<Globe />
							{:else if link.type === 'github'}
								<Icon icon="github" />
							{/if}
							{link.text || link.type}
						</a>
					{/each}
				</div>
			{/if}
			<div class="project-info">
				<span class="project-year">
					{#if project.startYear == project.endYear}
						{project.startYear}
					{:else if project.endYear == undefined}
						{project.startYear}-now
					{:else if project.endYear != undefined && project.startYear != undefined}
						{project.startYear}-{project.endYear}
					{/if}
				</span>
				<span class={`project-status project-status-${project.status}`}>
					{#if project.status == 'inprogress'}
						in progress
					{:else}
						{project.status}
					{/if}
				</span>
			</div>
		</footer>
	</main>
</div>

<style>
	.project {
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

			& > header {
				width: 100%;
				aspect-ratio: 16 / 9;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: center;
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

				& > .project-links {
					display: flex;
					flex-direction: row;
					gap: 1.25rem;
					align-items: center;

					& > a {
						display: inline-flex;
						align-items: center;
						gap: 0.5rem;
						background-color: var(--color-0);
						border: var(--accent-border);
						padding: 0.5rem 0.75rem;
						color: var(--color-3);
						font-size: 1.25rem;
						transition:
							color 0.25s,
							background-color 0.25s;

						& > :global(svg) {
							color: inherit;
						}

						&:hover {
							color: var(--color-0);
							background-color: var(--color-3);
							text-decoration: none;
						}
					}
				}

				& > .project-info {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					& > .project-year {
						font-size: 1.25rem;
						color: var(--color-2);
					}

					& > .project-status {
						font-size: 1.25rem;
						font-weight: 800;

						&.project-status-finished,
						&.project-status-active {
							color: #9ef0b0;
						}

						&.project-status-deprecated {
							color: #f09ea9;
						}

						&.project-status-paused {
							color: #f0d19e;
						}

						&.project-status-inprogress {
							color: #9ee4f0;
						}
					}
				}
			}
		}
	}
</style>
