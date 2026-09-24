<script lang="ts">
	import index, { type Icons } from './icons';

	const { icon }: { icon: Icons } = $props();
	const Icon = $derived(index[icon as keyof typeof index]);
</script>

<Icon />
