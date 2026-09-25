<script>
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import attributions from './attributions.md?raw';
</script>

<svelte:head>
	<title>znepb.me - attributions</title>
</svelte:head>

<div class="markdown-pillarbox">
	<header class="header">
		<h2>thank you to these</h2>
		<h1>attributions</h1>
		<div></div>
	</header>
	<br />
	<div class="markdown">
		<SvelteMarkdown source={attributions} />
	</div>
</div>
