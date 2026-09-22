<script lang="ts">
	import logo from '$lib/assets/logo.svg';

	import header from '$lib/assets/images/header.png';

	import kglw from '$lib/assets/images/kglw.png';
	import kglwGrayscale from '$lib/assets/images/kglw-grayscale.png';
	import boc from '$lib/assets/images/boc.png';
	import bocGrayscale from '$lib/assets/images/boc-grayscale.png';
	import c418 from '$lib/assets/images/c418.png';
	import c418Grayscale from '$lib/assets/images/c418-grayscale.png';
	import pinkfloyd from '$lib/assets/images/pinkfloyd.png';
	import pinkfloydGrayscale from '$lib/assets/images/pinkfloyd-grayscale.png';

	import minecraft from '$lib/assets/images/minecraft.png';
	import minecraftGrayscale from '$lib/assets/images/minecraft-grayscale.png';
	import planco from '$lib/assets/images/planco.png';
	import plancoGrayscale from '$lib/assets/images/planco-grayscale.png';
	import cities from '$lib/assets/images/cities.png';
	import citiesGrayscale from '$lib/assets/images/cities-grayscale.png';

	import steve from '$lib/assets/images/steve.png';
	import steveGrayscale from '$lib/assets/images/steve-grayscale.png';
	import x2 from '$lib/assets/images/x2.png';
	import x2Grayscale from '$lib/assets/images/x2-grayscale.png';
	import skyrush from '$lib/assets/images/skyrush.png';
	import skyrushGrayscale from '$lib/assets/images/skyrush-grayscale.png';
	import maverick from '$lib/assets/images/maverick.png';
	import maverickGrayscale from '$lib/assets/images/maverick-grayscale.png';

	import vinyls from '$lib/assets/images/vinyls.jpg';
	import minecraft2 from '$lib/assets/images/minecraft-2.png';
	import rollercoasters from '$lib/assets/images/rollercoasters.jpg';

	import LibraryBig from '@lucide/svelte/icons/library-big';
	import Wrench from '@lucide/svelte/icons/wrench';
	import Feather from '@lucide/svelte/icons/feather';
	import Globe from '@lucide/svelte/icons/globe';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import type { Project } from '$lib/types';

	let { data }: { data: { projects: Project[] } } = $props();
</script>

<section class="hero">
	<div class="hero-spacer">
		<img src={logo} alt="znepb.me Logo" />
	</div>
	<main class="hero-content">
		<div class="hero-image" style:--bg-url={`url(${header})`}>
			<header>
				<div class="hero-header-text-1">hey there, i&apos;m</div>
				<div>
					<span class="hero-header-name-text">znepb</span>
					<span class="hero-header-name-pronunciation">/zənɛp/</span>
				</div>
				<div class="hero-header-pronouns">he/him</div>
			</header>

			<footer class="hero-tags">
				<div>programmer</div>
				<div>coaster thoosie</div>
				<div>sysadmin</div>
				<div>compsci student</div>
				<div>gaming nerd</div>
				<div>tech tinkerer</div>
				<div>3d modeler</div>
				<div>road geek</div>
			</footer>
		</div>

		<article class="article">
			<div class="article-content">
				<div class="header">
					<h2>a little bit</h2>
					<h1>about me</h1>
					<div></div>
				</div>
				<p class="article-paragraph">
					Hi! I'm Marcus, known as znepb here on the internet. I am a second-year Computer Science
					major, hobbyist programmer, sysadmin, and roller coaster enthusiast.
				</p>
				<p class="article-paragraph">
					I started programming when I was 9 years old, with a Minecraft mod called ComputerCraft,
					in a language known as Lua. Over the years, I became more interested in computers and
					programming, branching out to learn new languages, such as Java, Kotlin, JavaScript,
					TypeScript, C, and others. Eventually, I decided to pursue Computer Science as a career. I
					also enjoy tinkering with electronics, hardware, and breaking Linux.
				</p>
				<p class="article-paragraph">
					I also enjoy riding roller coasters. I've ridden 116 roller coasters at 18 different
					parks, with over 1200 individual logged rides. That totals over 957 miles of roller
					coaster track! My favorite roller coaster is Steel Vengeance at Cedar Point (I know, a
					very common choice, but it's a good ride).
				</p>
			</div>
		</article>
	</main>

	<nav class="hero-nav">
		<header class="header">
			<h2>found me interesting?</h2>
			<h1>read more about</h1>
			<div></div>
		</header>
		<div class="hero-nav-sections">
			<div>
				<LibraryBig size="28px" />
				<span>things I like</span>
			</div>
			<div>
				<Wrench size="28px" />
				<span>stuff I've made</span>
			</div>
			<div>
				<Feather size="28px" />
				<span>posts I've written</span>
			</div>
			<div>
				<Globe size="28px" />
				<span>platforms I use</span>
			</div>
		</div>
	</nav>
</section>

<header class="section-heading">
	<LibraryBig size="36px" />
	<h1>things i like</h1>
</header>

<section class="bento bento-left" style:--bg-url={`url(${vinyls})`}>
	<main>
		<div class="bento-header">
			<div class="header">
				<h2>some of my favorite</h2>
				<h1>music artists</h1>
				<div></div>
			</div>
		</div>

		<div class="bento-grid-4">
			<div
				class="bento-box"
				style:--bg-url={`url(${kglw})`}
				style:--bg-grayscale-url={`url(${kglwGrayscale})`}
			>
				<div class="bento-box-link">
					<a href="https://kinggizzard.bandcamp.com/" target="_blank" rel="noreferrer">
						<span>Bandcamp</span>
						<ArrowUpRight />
					</a>
				</div>

				<header>
					<h2>KGLW</h2>
					<p>A 6-piece Australian band that does a little bit of everything.</p>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${boc})`}
				style:--bg-grayscale-url={`url(${bocGrayscale})`}
			>
				<div class="bento-box-link">
					<a href="https://boardsofcanada.bandcamp.com" target="_blank" rel="noreferrer">
						<span>Bandcamp</span>
						<ArrowUpRight />
					</a>
				</div>
				<header>
					<h2>Boards of Canada</h2>
					<p>Two Scottish guys who make some really ethereal electronic music.</p>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${c418})`}
				style:--bg-grayscale-url={`url(${c418Grayscale})`}
			>
				<div class="bento-box-link">
					<a href="https://c418.bandcamp.com/" target="_blank" rel="noreferrer">
						<span>Bandcamp</span>
						<ArrowUpRight />
					</a>
				</div>
				<header>
					<h2>C418</h2>
					<p>
						Yes, the guy behind the Minecraft music. He makes some pretty good music outside of
						that!
					</p>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${pinkfloyd})`}
				style:--bg-grayscale-url={`url(${pinkfloydGrayscale})`}
			>
				<div class="bento-box-link">
					<a href="https://pinkfloyd.com/" target="_blank" rel="noreferrer">
						<span>Website</span>
						<ArrowUpRight />
					</a>
				</div>
				<header>
					<h2>Pink Floyd</h2>
					<p>My favorite "classic" artist, they have a lot of amazing, but sometimes sad, music.</p>
				</header>
			</div>
		</div>
	</main>
	<div></div>
</section>

<section class="bento bento-right" style:--bg-url={`url(${minecraft2})`}>
	<div></div>
	<main>
		<div class="bento-header">
			<div class="header">
				<h2>i also like to play</h2>
				<h1>video games</h1>
				<div></div>
			</div>
		</div>

		<div class="bento-grid-3">
			<div
				class="bento-box"
				style:--bg-url={`url(${minecraft})`}
				style:--bg-grayscale-url={`url(${minecraftGrayscale})`}
			>
				<div class="bento-box-link">
					<a href="https://minecraft.net/" target="_blank" rel="noreferrer">
						<span>Website</span>
						<ArrowUpRight />
					</a>
				</div>
				<header>
					<h2>Minecraft</h2>
					<p>
						I'm sure you've heard of this game by now, I've been playing it as long as I can
						remember, and I still love it today.
					</p>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${planco})`}
				style:--bg-grayscale-url={`url(${plancoGrayscale})`}
			>
				<div class="bento-box-link">
					<a
						href="https://store.steampowered.com/app/2688950/Planet_Coaster_2/"
						target="_blank"
						rel="noreferrer"
					>
						<span>Steam</span>
						<ArrowUpRight />
					</a>
				</div>
				<header>
					<h2>Planet Coaster</h2>
					<p>
						Stemming from my obsession with roller coasters, I like to make roller coasters and
						theme parks from time-to-time.
					</p>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${cities})`}
				style:--bg-grayscale-url={`url(${citiesGrayscale})`}
			>
				<div class="bento-box-link">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://store.steampowered.com/app/949230/Cities_Skylines_II/"
					>
						<span>Steam</span>
						<ArrowUpRight />
					</a>
				</div>
				<header>
					<h2>Cities: Skylines</h2>
					<p>
						A game about building and managing your own city. I just like making <a
							class="white"
							href="https://www.reddit.com/r/shittyskylines/comments/1jikw84/the_main_interchange_in_my_city/"
							target="_blank"
							rel="noreferrer">unnecessarily complicated interchanges</a
						>
					</p>
				</header>
			</div>
		</div>
	</main>
</section>

<section class="bento bento-left" style:--bg-url={`url(${rollercoasters})`}>
	<main>
		<div class="bento-header">
			<div class="header">
				<h2>and ride awesome</h2>
				<h1>roller coasters</h1>
				<div></div>
			</div>
		</div>

		<div class="bento-grid-4">
			<div
				class="bento-box"
				style:--bg-url={`url(${steve})`}
				style:--bg-grayscale-url={`url(${steveGrayscale})`}
			>
				<span></span>
				<header>
					<h2>Steel Vengeance</h2>
					<h3>Cedar Point</h3>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${x2})`}
				style:--bg-grayscale-url={`url(${x2Grayscale})`}
			>
				<span></span>
				<header>
					<h2>X2</h2>
					<h3>Six Flags Magic Mountain</h3>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${skyrush})`}
				style:--bg-grayscale-url={`url(${skyrushGrayscale})`}
			>
				<span></span>
				<header>
					<h2>Skyrush</h2>
					<h3>Hersheypark</h3>
				</header>
			</div>
			<div
				class="bento-box"
				style:--bg-url={`url(${maverick})`}
				style:--bg-grayscale-url={`url(${maverickGrayscale})`}
			>
				<span></span>
				<header>
					<h2>Maverick</h2>
					<h3>Cedar Point</h3>
				</header>
			</div>
		</div>
	</main>
	<div></div>
</section>

<header class="section-heading">
	<Wrench size="36px" />
	<h1>stuff I've made</h1>
</header>

<section>
	<div class="projects-intro">
		<header class="header">
			<h2>some of my favorite</h2>
			<h1>projects</h1>
			<div></div>
		</header>
		<p>
			Being someone who messed with programming and just making stuff in general since very early
			on, of course I'd have my own repertoire of projects. Some of them are probably lost to time,
			others aren't as good as I'd like, though all were part of my journey!
		</p>

		<p>
			A handful of them have been compiled into this neat list for your convenience, and you can
			start by checking out some of the highlights:
		</p>
	</div>

	<div class="projects">
		{#each data.projects.filter((proj) => proj.isFeatured) as project (project.name)}
			<div class="project">
				<img
					src={`${import.meta.env.VITE_MINIO_ENDPOINT}${project.gallery[0]}`}
					alt="photo"
					width={370}
					height={208}
				/>
				{project.name}
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.hero-spacer {
		padding: 2.5rem;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1px;
		flex-grow: 1;
	}

	.hero-image {
		background-image:
			linear-gradient(180deg, rgba(12, 17, 13, 0) 0%, rgba(12, 17, 13, 1) 100%), var(--bg-url);
		background-color: var(--background);
		background-repeat: no-repeat, no-repeat;
		background-size: cover, cover;
		background-blend-mode: normal, color-dodge;

		padding: 3.75rem;

		display: flex;
		justify-content: space-between;
		flex-direction: column;

		border-right: var(--accent-border);
	}

	.hero-header-text-1 {
		font-size: 2rem;
		line-height: 2rem;
	}

	.hero-header-name-text {
		font-size: 3rem;
		line-height: 3rem;
		font-weight: 800;
		color: var(--color-4);
	}

	.hero-header-name-pronunciation {
		font-size: 2rem;
		color: var(--color-1);
	}

	.hero-header-pronouns {
		color: var(--color-2);
		font-style: italic;
		font-size: 1.5rem;
		line-height: 1.5rem;
	}

	.hero-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.625rem;

		& > div {
			display: inline-block;
			padding: 0.875rem 1rem;
			font-size: 1.375rem;
			line-height: 1rem;
			color: var(--color-3);
			background-color: #a7dab51a;
			backdrop-filter: blur(5px);
		}
	}

	.article {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.article-content {
		padding: 3.75rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
		max-width: 1280px;
	}

	.article-paragraph {
		margin: 0;
		padding: 0;
		font-size: 1.375rem;
	}

	.hero-nav {
		display: flex;
		flex-direction: row;
		border-top: var(--accent-border);

		& > header {
			padding: 2.5rem 3.75rem;
		}
	}

	.hero-nav-sections {
		display: grid;
		flex-grow: 1;
		grid-template-columns: 1fr 1fr 1fr 1fr;

		& > div {
			display: flex;
			flex-direction: column;
			border-left: var(--accent-border);
			background-color: #141b15;
			color: var(--color-3);
			cursor: pointer;
			font-size: 1.5rem;
			font-weight: 500;
			align-items: center;
			justify-content: center;
			transition:
				background-color 0.25s,
				color 0.25s;

			&:hover {
				background-color: var(--color-3);
				color: #141b15;
			}
		}
	}

	.section-heading {
		display: flex;
		padding: 2.5rem 3.75rem;
		gap: 0.75rem;
		background-color: var(--color-3);
		color: var(--background);

		border-bottom: var(--accent-border);
		border-top: var(--accent-border);

		& > h1 {
			padding: 0;
			margin: 0;
			font-size: 2rem;
		}
	}

	.bento {
		border-bottom: var(--accent-border);

		& > div {
			height: 100%;
			background-image: var(--bg-url);
			background-position: center;
			background-size: cover;
		}
	}

	.bento-left {
		display: grid;
		grid-template-columns: 2fr 1fr;

		& > main > .bento-header {
			border-right: var(--accent-border);
		}
	}

	.bento-right {
		display: grid;
		grid-template-columns: 1fr 2fr;

		& > main > .bento-header {
			border-left: var(--accent-border);
		}
	}

	.bento-grid-3 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;

		& > .bento-box {
			aspect-ratio: 365 / 600;
			border-left: var(--accent-border);
		}
	}

	.bento-grid-4 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		& > .bento-box {
			aspect-ratio: 549 / 300;
			border-right: var(--accent-border);
		}
	}

	.bento-header {
		padding: 2.5rem 3.75rem;
	}

	.bento-box-link {
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

	.bento-box {
		position: relative;
		overflow: hidden;

		border-top: var(--accent-border);

		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		z-index: 2;

		&:hover {
			& > .bento-box-link > a {
				opacity: 1;
			}
		}

		&::before {
			content: ' ';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;

			background-image:
				linear-gradient(180deg, rgba(12, 17, 13, 0) 0%, rgba(12, 17, 13, 1) 100%),
				var(--bg-grayscale-url);
			background-size: cover, cover;
			background-position: center, center;
			background-blend-mode: normal, color-dodge;
			background-color: var(--background);

			transition: transform 0.5s;
		}

		&:hover::before {
			transform: scale(1.1);
		}

		&::after {
			content: ' ';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;

			background-image:
				linear-gradient(180deg, rgba(12, 17, 13, 0) 0%, rgba(12, 17, 13, 1) 100%), var(--bg-url);
			background-size: cover, cover;
			background-position: center, center;
			background-blend-mode: normal, normal;
			background-color: var(--background);

			opacity: 0;
			transform: scale(1);

			transition:
				transform 0.5s,
				opacity 0.5s;
		}

		&:hover::after {
			opacity: 1;
			transform: scale(1.1);
		}

		&:hover > header > h3 {
			color: var(--foreground);
		}

		& > header {
			z-index: 2;

			& > h2 {
				font-size: 1.75rem;
				font-weight: 800;
				z-index: 2;
			}

			& > h3 {
				font-style: italic;
				color: var(--color-3);
				font-size: 1rem;
				font-weight: 400;
				z-index: 2;
				transition: color 0.5s;
			}

			& > p {
				font-size: 1.375rem;
				z-index: 2;
			}
		}
	}

	.projects-intro {
		padding: 2.5rem 3.75rem;

		display: flex;
		flex-direction: column;
		gap: 2rem;

		& > p {
			font-size: 1.375rem;
		}
	}

	.projects {
		border-top: var(--accent-border);
		padding: 0 3.75rem;
	}
</style>
