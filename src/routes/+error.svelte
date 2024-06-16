<script>
</script>

<body>
	<div class="overlay overlay--scanline"></div>
	<div class="overlay overlay--vignette"></div>
	<div class="flex-full-justify">
		<div class="flex-inner">
			<p>A problem has been detected and the current website has been terminated.</p>
			<p>
				If this is the first time you've seen this error screen, go back one page. If this screen
				appears again, follow these steps:
			</p>
			<ul>
				<li>
					<p>
						Close this window, return to the website. If that doesn't work, the manufacturer has
						entered Safe Mode and is fixing this computer.
					</p>
				</li>
			</ul>
			<p class="text-center">Go back to continue <span class="blink">_</span></p>
		</div>
	</div>
</body>

<style>
	@font-face {
		font-family: 'Lucida BSOD';
		src: url('$lib/assets/fonts/lucida-bsod.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	* {
		font-size: 24px;
		box-sizing: border-box;
	}

	@media screen and (max-width: 960px) {
		* {
			font-size: 18px;
		}
	}

	@media screen and (max-width: 640px) {
		* {
			font-size: 12px;
		}
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body,
	.flex-full-justify,
	.overlay {
		width: 100vw;
		height: 100vh;
		margin: 0;
	}

	body {
		background-color: #00a;
		color: #f1f1f1;
		font-family: 'Lucida BSOD';
	}

	.overlay {
		position: absolute;
		z-index: 2;
		pointer-events: none;
	}

	.overlay.overlay--vignette {
		background-image: radial-gradient(
			ellipse at center,
			rgba(0, 0, 0, 0) 50%,
			rgba(0, 0, 0, 0.25) 100%
		);
	}

	.overlay.overlay--scanline {
		background-image: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0) 25%,
			rgba(0, 0, 0, 0.33) 25%,
			rgba(0, 0, 0, 0.33) 50%,
			rgba(0, 0, 0, 0) 50%,
			rgba(0, 0, 0, 0) 75%,
			rgba(0, 0, 0, 0.33) 75%,
			rgba(0, 0, 0, 0.33) 100%
		);
		background-size: 4px 4px;
	}

	.flex-full-justify {
		padding: 3rem 4rem;
		display: flex;
		justify-content: left;
		align-items: top;
	}

	.flex-full-justify .flex-inner {
		max-width: 70rem;
	}

	ul {
		list-style-type: none;
		padding-left: 1.5em;
	}

	ul > li {
		position: relative;
	}

	ul > li:before {
		font-family: 'Lucida BSOD';
		color: #f1f1f1;
		content: '\*';
		position: absolute;
		left: -1.5em;
		font-size: 1rem;
	}

	.text-center {
		text-align: left;
	}

	.blink {
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		66% {
			opacity: 0;
		}
	}
</style>
