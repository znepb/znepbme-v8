<script>
</script>

<footer class="footer">
	<div>
		<span>© znepb — 2026</span>
		<span>v8.0.1</span>
	</div>
	<div style:text-align="center">
		designed by <a class="footer-link" href="https://auti.one" target="_blank" rel="noreferrer"
			>AutiOne</a
		>
	</div>
	<div style:text-align="right">
		<a href="/attributions" class="footer-link">attributions</a>
	</div>
</footer>

<style lang="scss">
	.footer {
		padding: 1.5rem 3.75rem;
		background-color: #070a08;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		color: var(--color-2);
		font-size: 1.25rem;
		margin-top: auto;

		@media screen and (max-width: 64rem) {
			display: flex;
			flex-direction: column;

			& > * {
				text-align: left !important;
			}
		}
	}

	.footer-link {
		color: var(--color-3);
	}
</style>
