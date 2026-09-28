<script lang="ts">
	let { header, open = $bindable() }: { header: string; open: boolean } = $props();

	const closeModal = () => {
		open = false;
	};
</script>

{#if open}
	<main class="modal-backdrop">
		<div class="modal">
			<header class="subheading modal-header">{header}</header>

			<div class="modal-content">
				<slot />
			</div>

			<footer class="modal-footer">
				<button onclick={closeModal}>close</button>
			</footer>
		</div>
	</main>
{/if}

<style>
	.modal-backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10000;
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		background-color: var(--background);
		border: var(--accent-border);
		width: 32rem;
		max-width: calc(100vw - 2rem);
	}

	.modal-header {
		padding: 1.5rem;
	}

	.modal-content {
		padding: 1.5rem;
		border-top: var(--accent-border);
		border-bottom: var(--accent-border);
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
		padding: 1.5rem;
	}
</style>
