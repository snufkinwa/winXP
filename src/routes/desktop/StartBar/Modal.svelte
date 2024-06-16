<script>
	import windowsOffLogo from '$lib/assets/windowsIcons/windows-off.png';
	export let title = '';
	export let onClose = () => {};
</script>

<div class="modal">
	<div class="modal-content">
		<div class="modal-header">
			<h2>{title}</h2>
			<img src={windowsOffLogo} alt="Windows" />
		</div>
		<div class="modal-body">
			<slot></slot>
		</div>
		<div class="modal-footer">
			<button on:click={onClose}>Cancel</button>
		</div>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 997;
	}

	.modal-content {
		border: 1px solid #000000;
		max-width: 400px;
		text-align: center;
		z-index: 999;
		overflow: hidden;
	}

	.modal-header {
		background-color: #1e3a8a;
		padding: 10px;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.modal-header img {
		width: 48px;
	}

	.modal-body {
		background-color: #60a5fa;
		padding: 15px;
	}

	.modal-footer {
		background-color: #1e3a8a;
		padding: 15px;
		text-align: right;
	}

	button {
		font-family: var(--sans-serif);
		-webkit-font-smoothing: antialiased;
		font-size: 11px;
		box-sizing: border-box;
		border: 1px solid #003c74;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(236, 235, 229, 1) 86%,
			rgba(216, 208, 196, 1) 100%
		);
		box-shadow: none;
		border-radius: 3px;
		cursor: pointer;
		color: #1e3a8a;
		padding: 6px 14px;
		background-color: white;

		&:not(:disabled) {
			&:active,
			&.active {
				box-shadow: none;
				background: linear-gradient(
					180deg,
					rgba(205, 202, 195, 1) 0%,
					rgba(227, 227, 219, 1) 8%,
					rgba(229, 229, 222, 1) 94%,
					rgba(242, 242, 241, 1) 100%
				);
			}
			&:hover {
				box-shadow:
					inset -1px 1px #fff0cf,
					inset 1px 2px #fdd889,
					inset -2px 2px #fbc761,
					inset 2px -2px #e5a01a;
			}
		}
		&:focus,
		&.focused {
			box-shadow:
				inset -1px 1px #cee7ff,
				inset 1px 2px #98b8ea,
				inset -2px 2px #bcd4f6,
				inset 1px -1px #89ade4,
				inset 2px -2px #89ade4;
		}
		&::-moz-focus-inner {
			border: 0;
		}
	}
</style>
