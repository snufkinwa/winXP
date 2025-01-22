<script>
	import { onMount, onDestroy } from 'svelte';
	import Y2Kaesthetic from '$lib/assets/MaxthonImages/6.png';
	import Bubble from './components/Bubble.svelte';
	import glassBuble from '$lib/assets/MaxthonImages/1.png';
	import glassCyclone from '$lib/assets/MaxthonImages/2.png';
	import starLink from '$lib/assets/MaxthonImages/star.gif';

	const bubbles = Array.from({ length: 20 });
	let currentSlide = 0;
	let slides_length = 4;
	const slides = [
		{ title: 'Blade of Valor (Game)', description: 'Phaser 3, Nextjs, Python' },
		{ title: 'Travel Site', description: 'Java and MySQL on the back end. Angular front-end.' },
		{
			title: 'Booking Platform',
			description: 'Django and SQLite backend. The front end is Svelte.'
		},
		{
			title: 'Windows XP Portfolio',
			description: 'Sveltekit, other small projects called in for a more realistic experience.'
		}
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides_length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	// Automatically advance slides every 5 seconds (optional)
	let interval;
	onMount(() => {
		interval = setInterval(nextSlide, 5000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div class="wrapper">
	<div class="grid-wrapper">
		<div class="grid">
			<div class="vertical">
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</div>
			<div class="dots">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div class="horizontal">
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</div>
	</div>
	<div class="glassbuble"><img src={glassBuble} alt="bubbles" /></div>

	<div class="container">
		{#each bubbles as _, i}
			<Bubble
				size={`${Math.random() * 50 + 20}px`}
				color={`rgba(155, 158, 217, ${Math.random() * 0.5 + 0.3})`}
			/>
		{/each}
		<div class="header floating">
			<div class="title"><h1>Projects</h1></div>
			<div><img src={Y2Kaesthetic} alt="y2k aesthetic" /></div>
		</div>
		<div class="blog-container">
			<div class="blog">
				<div class="carousel-container">
					<div class="carousel">
						{#each slides as slide, i}
							<div class="slide" style="transform: translateX({100 * (i - currentSlide)}%)">
								<h2>{slide.title}</h2>
								<p>{slide.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="footer">&copy; 2024 Full Stack 🥞 . All rights reserved.</div>
	</div>
	<div class="glasscyclone"><img src={glassCyclone} alt="cyclone" /></div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cute+Font&display=swap');

	@font-face {
		font-family: 'Planet Kosmos';
		src: url('$lib/assets/fonts/PLANK.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'FontoVision IV';
		src: url('$lib/assets/fonts/Fontout.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.wrapper {
		background-color: #365ab4;
		background: linear-gradient(to top, #abc3ef, #365ab4);
		box-shadow: inset 0px 0px 150px rgba(0, 0, 0, 0.65);
		font-family: 'Cute Font', cursive;
		color: #000;
		margin: 0;
		padding: 0;
		position: relative;
		min-height: 100vh;
		overflow: hidden;
		display: flex;
		overflow: hidden;
	}

	.container {
		width: 100%;
		margin: 0 auto;
		padding: 0px;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		width: 293px;
		text-align: center;
		position: absolute;
		top: 54%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 1;
	}
	.header img {
		display: block;
		width: 400px;
	}
	h1 {
		font-family: 'Planet Kosmos', sans-serif;
		font-size: 3em;
		color: #fff;
		z-index: 3;
		background-image: url($lib/assets/MaxthonImages/stainless-steel-texture-388.png);
		background-repeat: repeat;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@keyframes spin {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(-360deg);
		}
	}

	@keyframes depth {
		0% {
			text-shadow:
				0 0 5px #878686,
				0 0 10px #545454,
				0 0 15px #f5f5f5;
		}
		25% {
			text-shadow:
				1px 0 5px #878686,
				2px 0 10px #545454,
				3px 0 15px #f5f5f5,
				4px 0 20px #272626;
		}
		50% {
			text-shadow:
				0 0 5px #878686,
				0 0 10px #545454,
				0 0 15px #f5f5f5;
		}
		75% {
			text-shadow:
				-1px 0 5px #878686,
				-2px 0 10px #545454,
				-3px 0 15px #f5f5f5,
				-4px 0 20px #272626;
		}
		100% {
			text-shadow:
				0 0 5px #878686,
				0 0 10px #545454,
				0 0 15px #f5f5f5;
		}
	}

	.header {
		color: #fff;
		display: inline-block;
		position: relative;
	}

	.footer {
		background-color: transparent;
		color: #fff;
		text-align: center;
		padding: 20px;
		width: 100%;
	}

	.glassbuble {
		position: absolute;
		top: 5%;
		left: 15%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.glasscyclone {
		position: absolute;
		bottom: -23%;
		right: -23%;
		z-index: 10;
	}

	.blog {
		width: 600px;
		height: 330px;
		overflow: hidden;
		padding: 0;
		box-sizing: border-box;
	}

	.carousel-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.carousel {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.slide {
		position: absolute;
		width: 95%;
		height: 100%;
		background: #f4f4f4;
		padding: 0px 15px;
		gap: 10px;
		border-radius: 5px;
		transition: transform 0.3s ease;
	}

	.grid-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0px;
		perspective: 200px;
		z-index: 0;
		overflow: hidden;
	}

	.blog-container {
		background-image: url($lib/assets/MaxthonImages/MELT_FRAME.png);
		background-repeat: no-repeat;
		background-size: contain;
		margin: -60px auto 0;
		width: 100%;
		max-width: 800px;
		height: 600px;
		padding: 0px 100px 0px 100px;
		position: relative;
		z-index: 2;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.blog {
		width: 600px;
		height: 330px;
		overflow-y: auto;
		padding: 0px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}

	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}

	.grid {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		margin-top: -50px;
		transform: rotateX(45deg);
	}

	.floating {
		animation-name: floating;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		margin-left: 30px;
		margin-top: 5px;
	}

	@keyframes floating {
		0% {
			transform: translate(0, 0px);
		}
		50% {
			transform: translate(0, 15px);
		}
		100% {
			transform: translate(0, -0px);
		}
	}

	.line {
		position: absolute;
		background: rgba(155, 158, 217, 0.35); /* Changed to a more icy blue color */
		backface-visibility: hidden;
	}

	.vertical .line {
		top: 0;
		left: 0;
		bottom: 0;
		width: 5px;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0),
			rgba(155, 158, 217, 0.35)
		); /* Changed to a more icy blue color */
	}
	.vertical .line:nth-child(1) {
		left: 10%;
	}
	.vertical .line:nth-child(2) {
		left: 20%;
	}
	.vertical .line:nth-child(3) {
		left: 30%;
	}
	.vertical .line:nth-child(4) {
		left: 40%;
	}
	.vertical .line:nth-child(5) {
		left: 50%;
	}
	.vertical .line:nth-child(6) {
		left: 60%;
	}
	.vertical .line:nth-child(7) {
		left: 70%;
	}
	.vertical .line:nth-child(8) {
		left: 80%;
	}
	.vertical .line:nth-child(9) {
		left: 90%;
	}
	.vertical .line:nth-child(10) {
		left: 100%;
		margin-left: -1px;
	}

	.horizontal .line {
		top: 0;
		left: 0;
		right: 0;
		height: 5px;
		z-index: 2;
	}

	.horizontal .line:nth-child(1) {
		top: 10%;
		opacity: 0.2;
	}
	.horizontal .line:nth-child(2) {
		top: 20%;
		opacity: 0.3;
	}
	.horizontal .line:nth-child(3) {
		top: 30%;
		opacity: 0.4;
	}
	.horizontal .line:nth-child(4) {
		top: 40%;
		opacity: 0.5;
	}
	.horizontal .line:nth-child(5) {
		top: 50%;
		opacity: 0.6;
	}
	.horizontal .line:nth-child(6) {
		top: 60%;
		opacity: 0.7;
	}
	.horizontal .line:nth-child(7) {
		top: 70%;
		opacity: 0.8;
	}
	.horizontal .line:nth-child(8) {
		top: 80%;
		opacity: 0.9;
	}
	.horizontal .line:nth-child(9) {
		top: 90%;
		opacity: 0.95;
	}
	.horizontal .line:nth-child(10) {
		top: 100%;
		margin-top: -1px;
		opacity: 1;
	}
	.horizontal .line:nth-child(11) {
		opacity: 0.05;
	}

	.dot {
		position: absolute;
		background: #57c1e8;
		width: 5px;
		height: 5px;
		top: 100%;
		border-radius: 5px;
		box-shadow: 0 0 3px #fff;
		backface-visibility: hidden;
	}

	.dot:nth-child(1) {
		left: 10%;
		animation: moveDot 5s infinite;
	}
	.dot:nth-child(2) {
		left: 20%;
		animation: moveDot 20s infinite;
	}
	.dot:nth-child(3) {
		left: 30%;
		animation: moveDot 15s infinite;
	}
	.dot:nth-child(4) {
		left: 50%;
		animation: moveDot 30s infinite;
	}
	.dot:nth-child(5) {
		left: 60%;
		animation: moveDot 12s infinite;
	}
	.dot:nth-child(6) {
		left: 80%;
		animation: moveDot 6s infinite;
	}
	.dot:nth-child(7) {
		left: 90%;
		animation: moveDot 8s infinite;
	}

	@keyframes moveDot {
		0% {
			top: 100%;
			opacity: 1;
		}
		100% {
			top: 0%;
			opacity: 0;
		}
	}
</style>
