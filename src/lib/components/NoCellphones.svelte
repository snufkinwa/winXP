<script>
	import cellphone from '$lib/assets/cellphonewarn.gif';
</script>

<div class="main-container">
	<div class="cellphone">
		<img src={cellphone} alt="cellphone warning" />
	</div>
</div>

<style>
	.main-container {
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: blue;
		overflow: hidden;
		z-index: 1000;
	}

	.cellphone img {
		max-width: 100%;
		max-height: 100%;
	}

	@media (min-width: 1090px) {
		.main-container {
			display: none;
		}
	}
</style>
