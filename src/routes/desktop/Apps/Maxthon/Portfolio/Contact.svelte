<script>
	import mouseKnit from '$lib/assets/MaxthonImages/mouseknit.gif';
	import geocitiesLogo from '$lib/assets/MaxthonImages/geocitiessplash.gif';
	import vine from '$lib/assets/MaxthonImages/vinebar.jpg';
	import vineEmail from '$lib/assets/MaxthonImages/vinemailbut.png';
	import githubLogo from '$lib/assets/github-logo.png';
	import linkedinLogo from '$lib/assets/linkedinicon.png';

	import emailjs from '@emailjs/browser';

	const sendEmail = (e) => {
		emailjs
			.sendForm('service_3b6glho', 'template_0j85zew', e.target, {
				publicKey: '8NjY2J906GiQ33gmD'
			})

			.then(
				() => {
					console.log('SUCCESS!');
					e.target.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};
</script>

<div class="wrapper">
	<div class="container">
		<img src={mouseKnit} alt="Mouse Knit" />
		<div class="header">
			<div>
				<a href="https://github.com/snufkinwa"
					><img class="socials" src={githubLogo} alt="Vine" />
				</a>
			</div>
			<img src={vineEmail} alt="Vine Email" />
		</div>
		<div class="content">
			<p>I'd love to hear from you! Please fill out the form below to get in touch with me.</p>
			<form class="contact-form" on:submit|preventDefault={sendEmail}>
				<label for="name">Name:</label>
				<input type="text" id="name" name="user_name" />

				<label for="email">Email:</label>
				<input type="email" id="email" name="user_email" />

				<label for="message">Message:</label>
				<textarea id="message" name="message"></textarea>
				<input type="submit" value="Send" />
				<div class="submit">
					<div><img src={vine} alt="Vine" /></div>
				</div>
			</form>
		</div>
		<div class="footer">
			<div>
				<p>© 2024 Janay Harris. All rights reserved.</p>
				<img src={geocitiesLogo} alt="Geocities" />
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #000;
		font-weight: 600;
		font-family: 'Comic Neue', cursive, sans-serif;
		background: url('$lib/assets/MaxthonImages/vine2bg.png') repeat;
	}

	.container {
		width: 800px;
		margin: 0 auto;
		padding: 20px;
		text-align: center;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
		padding: 10px;
		font-size: 2em;
		text-shadow: 2px 2px 2px #000;
	}

	.content {
		padding: 20px;
	}

	.contact-form {
		margin-top: 20px;
		text-align: left;
		display: flex;
		flex-direction: column;
	}

	.contact-form label {
		display: block;
		margin-bottom: 5px;
	}

	.contact-form input,
	.contact-form textarea {
		width: 100%;
		height: auto;
		margin-bottom: 10px;
		padding: 5px;
		resize: none;
	}

	.contact-form input[type='submit'] {
		text-align: center;
		text-decoration: underline;
		border: none;
		cursor: pointer;
		background: transparent;
		font-family: 'Comic Sans MS', cursive, sans-serif;
		font-size: large;
	}

	.socials {
		width: 30px;
		margin: 5px;
	}

	.submit {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		justify-content: center;
		padding: 10px 20px;
	}

	.footer {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
