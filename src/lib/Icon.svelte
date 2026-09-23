<script lang="ts">
	import index from './icons';

	const { icon }: { icon: keyof typeof index } = $props();
	const Icon = $derived(index[icon as keyof typeof index]);
</script>

<Icon />
