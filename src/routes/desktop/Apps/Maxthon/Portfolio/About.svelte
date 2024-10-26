<script>
	import { time } from '../../../stores/stores';

	import javaLogo from '$lib/assets/skillslogo/java-icon-1511x2048-6ikx8301.png';
	import pythonLogo from '$lib/assets/skillslogo/Python-logo-notext.svg.png';
	import reactLogo from '$lib/assets/skillslogo/React-icon.svg.png';
	import gitLogo from '$lib/assets/skillslogo/git.svg';
	import mySQLLogo from '$lib/assets/skillslogo/mysql.png';
	import sqlliteLogo from '$lib/assets/skillslogo/SQLitelogo_641x400.png';
	import mongodbLogo from '$lib/assets/skillslogo/mongodb.svg';
	import cssLogo from '$lib/assets/skillslogo/css.svg';
	import jsLogo from '$lib/assets/skillslogo/javascript.svg';
	import htmlLogo from '$lib/assets/skillslogo/html.svg';
	import svelteLogo from '$lib/assets/skillslogo/svelte_logo.png';
	import empty from '$lib/assets/empty.png';

	const formatter = new Intl.DateTimeFormat('en', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});

	let skills = [
		{
			name: 'Java',
			icon: javaLogo
		},
		{
			name: 'Git',
			icon: gitLogo
		},
		{
			name: 'Python',
			icon: pythonLogo
		},
		{
			name: 'JavaScript',
			icon: jsLogo
		},
		{
			name: 'React',
			icon: reactLogo
		},
		{
			name: 'CSS',
			icon: cssLogo
		},
		{
			name: 'HTML',
			icon: htmlLogo
		},
		{
			name: 'MySQL',
			icon: mySQLLogo
		},
		{
			name: 'Svelte',
			icon: svelteLogo
		},
		{
			name: 'MongoDB',
			icon: mongodbLogo
		},
		{
			name: 'SQLite',
			icon: sqlliteLogo
		},
		{
			name: '',
			icon: empty
		}
	];

	let showAllSkills = false;
</script>

<div class="main-body">
	<nav>
		<div class="nav-top">
			<div class="links">
				<a href="#/">MySpace.com</a>&nbsp;|&nbsp;<a href="#/">Home</a>
			</div>
			<div class="search">
				<label for="forGeneral"> The Web </label>
				<input type="radio" name="search" id="forGeneral" class="radio--input" />
				<label for="forMyspace"> MySpace </label>
				<input type="radio" name="search" id="forMyspace" checked class="radio--input" />
				<input type="text" name="" id="" />
				<button>search</button>
			</div>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<div class="links"><a href="#">Help</a>&nbsp;|&nbsp;<a href="#">SignUp</a></div>
		</div>
		<div class="nav-middle"></div>
		<div class="nav-bottom">
			<ul class="inline-list">
				<li><a href="#/">home</a></li>
				<li><a href="#/">browse</a></li>
				<li><a href="#/">search</a></li>
				<li><a href="#/">invite</a></li>
				<li><a href="#/">film</a></li>
				<li><a href="#/">mail</a></li>
				<li><a href="#/">blog</a></li>
				<li><a href="#/">favorites</a></li>
				<li><a href="#/">forum</a></li>
				<li><a href="#/">group</a></li>
				<li><a href="#/">events</a></li>
				<li><a href="#/">video</a></li>
				<li><a href="#/">music</a></li>
				<li><a href="#/">comedy</a></li>
				<li><a href="#/">classifieds</a></li>
			</ul>
		</div>
	</nav>
	<section class="profile-body">
		<div class="col user-info">
			<h2 class="name">Janay Harris</h2>
			<div class="identity">
				<div class="avatar">
					<img
						src="https://media1.tenor.com/m/AlUkiGkR2j8AAAAC/new-game-ahagon-umiko-programming.gif"
						alt="avatar"
					/>
					<div class="media-view">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						View My: <a href="#/">Pics</a>&nbsp;|&nbsp;<a href="#/">Videos</a>
					</div>
				</div>
				<div class="details">
					<ul>
						<li>"Code. Create. Conquer."</li>
						<li>&nbsp;</li>
						<li>Female</li>
						<li><span class="age">32</span> years old</li>
						<li>Texas</li>
						<li>United States</li>
						<li class="is-online"></li>
						<li>Last Login: <span class="date">{formatter.format($time)}</span></li>
					</ul>
				</div>
			</div>
			<div class="small-panel contact-panel">
				<div class="panel-header">Contacting Janay Harris</div>
				<div class="buttons-container">
					<div class="row">
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore a11y-missing-content -->
						<a intent="reply" class="btn act-1"></a>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="#/" class="btn act-2"></a>
					</div>
					<!-- svelte-ignore a11y-missing-content -->
					<div class="row">
						<!-- svelte-ignore a11y-missing-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a intent="add" class="btn act-3"></a>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" class="btn act-4"></a>
					</div>
					<div class="row">
						<!-- svelte-ignore a11y-missing-content -->
						<!-- svelte-ignore a11y-missing-content -->
						<!-- svelte-ignore a11y-missing-content -->
						<!-- svelte-ignore a11y-missing-content -->
						<a href="#/" class="btn act-5"></a>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="#/" class="btn act-6"></a>
					</div>
					<!-- svelte-ignore a11y-missing-content -->
					<!-- svelte-ignore a11y-missing-content -->
					<div class="row">
						<a href="#/" class="btn act-7"></a>
						<a href="#/" class="btn act-8"></a>
					</div>
				</div>
			</div>
			<div class="small-panel m-details-panel">
				<div class="panel-header">Janay Harris's Interests</div>
				<div class="row">
					<div class="sm-col">
						<p>General:</p>
					</div>
					<div class="sm-col">
						<p>Internet, Blockchain, Machine Learning, Quantum Computing</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Music:</p>
					</div>
					<div class="sm-col">
						<p>Game instrumentals and EDM</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Movies:</p>
					</div>
					<div class="sm-col">
						<p>Fantasy films, Legend(1985) and scifi flicks - DUNE and Interstellar</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Television:</p>
					</div>
					<div class="sm-col">
						<p>Sailor Moon, Berserk </p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Goals:</p>
					</div>
					<div class="sm-col">
						<p>
							To become an expert in AI and Blockchain, contribute to open-source projects,
							and develop innovative tech solutions.
						</p>
					</div>
				</div>
			</div>

			<div class="small-panel m-details-panel">
				<div class="panel-header">Janay Harris's Details</div>
				<div class="row">
					<div class="sm-col">
						<p>Status:</p>
					</div>
					<div class="sm-col">
						<p>Unemployed</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Here for:</p>
					</div>
					<div class="sm-col">
						<p>Skills, Collaborators, Work opportunities</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Hobbies:</p>
					</div>
					<div class="sm-col">
						<p>Coding, Reading Tech Blogs</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Hometown:</p>
					</div>
					<div class="sm-col">
						<p>Ansbach, Germany</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Certifications:</p>
					</div>
					<div class="sm-col">
						<p>Python Essentials I, Python Essentials II, Linux Essentials 010, AI Programming with Python</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Ethnicity:</p>
					</div>
					<div class="sm-col">
						<p>Mixed</p>
					</div>
				</div>
				<div class="row">
					<div class="sm-col">
						<p>Occupation:</p>
					</div>
					<div class="sm-col">
						<p>Self-taught Student</p>
					</div>
				</div>
			</div>
		</div>

		<div class="col user-content">
			<div class="top-banner">
				<h1>Janay Harris is in your extended network</h1>
			</div>
			<div class="profile-section" id="blog-container"></div>
			<div class="profile-section" id="blurbs-container">
				<div class="section-header">Janay Harris's blurbs</div>
				<div class="section-subheader">About me:</div>
				<p>
					Bet you didn’t know... <br /> <br /> The original MySpace was heavily built using HTML tables,
					making the site clunky by today's standards. Despite this, it brought people together and inspired
					many Y2K kids to learn coding by customizing their profiles with HTML and CSS.
				</p>
				<div class="section-subheader">Who I'd Like to meet:</div>
				<p>Fellow web devs, coders, and meme masters.</p>
			</div>
			<div class="profile-section" id="skill-container">
				<div class="section-header">Janay Harris's skill space</div>
				<div class="skill-count">Janay Harris has <b>{skills.length}</b> skills.</div>
				<div class="skill-grid">
					<div class="row">
						{#each skills.slice(0, 4) as skill}
							<div class="skill">
								<a href="#/" class="skill-grid__a name" target="_blank">{skill.name}</a>
								<img src={skill.icon} alt={skill.name} class="photo" />
							</div>
						{/each}
					</div>
					<div class="row">
						{#each skills.slice(4, 8) as skill}
							<div class="skill">
								<a href="#/" class="skill-grid__a" target="_blank">{skill.name}</a>
								<img src={skill.icon} alt={skill.name} class="photo" />
							</div>
						{/each}
					</div>
					{#if showAllSkills}
						<div class="row">
							{#each skills.slice(8) as skill}
								<div class="skill">
									<a href="#/" class="skill-grid__a" target="_blank">{skill.name}</a>
									<img src={skill.icon} alt={skill.name} class="photo" />
								</div>
							{/each}
						</div>
					{/if}
				</div>
				{#if skills.length > 9}
					<button on:click={() => (showAllSkills = !showAllSkills)} class="view-all-f">
						{showAllSkills ? 'Show Less' : "View All of Janay Harris's skills"}
					</button>
				{/if}
			</div>
			<div class="profile-section" id="comments-container">
				<div class="section-header">Comments</div>
				<div class="comment-details">
					<div class="comments-to-display">Displaying <b>1</b> of <b></b> comments</div>
					<div class="comment-actions">
						<a href="#/">View All</a>&nbsp;|&nbsp;<a href="#/">Add Comment</a>
					</div>
				</div>
				<div class="comment-stream">
					<div class="comment user03324">
						<div class="dp-group">
							<a href="#/" class="prof-name">Elon M&sup2; </a>
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<img
								src="https://pics.craiyon.com/2023-06-28/e97ccd283e0740fab888df91e834520e.webp"
								alt="profile photo"
							/>
							<p></p>
							<span class="user-status"></span>
						</div>
						<div class="comment-cont">
							<div class="post-info">
								<span class="date">Jan 1, 2024</span>
								<div class="c-actions">
									<ul class="inline-list">
										<li><a href="#/">Reply</a></li>
										<li><a href="#/">Report</a></li>
										<li><a href="#/">View All</a></li>
									</ul>
								</div>
							</div>
							<div class="message-body">
								<img
									src="https://xpportfoliowebsite.s3.amazonaws.com/Images/iNSk.gif"
									style="width: 100%;"
									alt="insk"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<footer>
	<ul class="inline-list">
		<li><a href="#/">About</a></li>
		<li><a href="#/">FAQ</a></li>
		<li><a href="#/">Terms</a></li>
		<li><a href="#/">Privacy</a></li>
		<li><a href="#/">Safety Tips</a></li>
		<li><a href="#/">Contact MySpace</a></li>
		<li><a href="#/">Report Inappropriate Content</a></li>
		<li><a href="#/">Promote!</a></li>
		<li><a href="#/">Advertise</a></li>
		<li><a href="#/">MySpace International</a></li>
	</ul>
</footer>

<style>
	* {
		box-sizing: border-box;
	}
	h1,
	h2,
	p {
		margin-top: 0;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.is-online {
		width: 100%;
		max-width: 80px;
		height: 20px;
		background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/onlinenow.gif');
		background-size: contain;
		background-position: center left;
		background-repeat: no-repeat;
		margin: 5px 0;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.inline-list li {
		display: inline-block;
	}

	.skill .name {
		display: block;
		margin-top: 5px;
		text-decoration: none;
	}

	.skill .photo {
		width: 54px;
		height: auto;
	}

	.inline-list li:after {
		content: '|';
		margin: 0 6px 0 10px;
	}
	.inline-list li:last-child:after {
		content: '';
	}

	.main-body {
		max-width: 1000px;
		background-color: #fff;
		margin: 0 auto;
		padding-bottom: 10px;
	}
	nav {
		color: #fff;
		background-color: #0047ab;
	}
	nav a {
		color: #fff;
	}
	.nav-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 10px;
		font-size: 14px;
	}
	.nav-top a {
		margin: 0 5px;
	}
	.nav-top label ~ label {
		margin-left: 10px;
	}
	.nav-middle {
		width: 100%;
		height: 150px;
	}
	.nav-bottom {
		background-color: #73aad6;
		text-align: center;
		padding: 5px 0;
	}
	.nav-bottom ul li:after {
		color: #000;
	}
	.nav-bottom a {
		font-size: 12px;
		text-transform: capitalize;
		color: #fff;
	}

	.profile-body {
		width: 100%;
		display: inline-block;
		font-size: 0;
	}
	.col {
		font-size: 16px;
		display: inline-block;
		vertical-align: top;
		width: 40%;
		padding: 10px 20px;
	}
	.col + .col {
		width: 60%;
	}
	.identity {
		width: 100%;
		font-size: 0;
	}
	.avatar,
	.details {
		display: inline-block;
		vertical-align: top;
		font-size: 16px;
	}
	.avatar {
		width: 50%;
		text-align: center;
		font-size: 12px;
	}
	.avatar img {
		max-width: 100%;
	}
	.details {
		width: 50%;
		padding-left: 20px;
		font-size: 14px;
	}
	.details ul li {
		line-height: 1.25;
	}
	.details ul li:last-child {
		margin-top: 30px;
	}

	.radio--input {
		appearance: none;
		padding: 4px;
		background-color: white;
		border-radius: 50%;
		border: 2px solid grey;
	}

	.radio--input:checked {
		border-color: magenta;
	}

	.search input {
		background-color: white;
	}

	.search button {
		background-color: white;
		color: black;
	}
	.small-panel {
		display: inline-block;
		width: 100%;
		margin-top: 20px;
		border: 2px solid #73aad6;
	}
	.panel-header {
		background-color: #73aad6;
		color: #fff;
		font-weight: 700;
		padding: 1px 15px;
	}
	.row {
		display: inline-block;
		width: 100%;
		padding: 5px 0 0 5px;
		font-size: 0;
	}
	.contact-panel .row {
		height: 29px;
		padding: 0;
	}
	.btn {
		cursor: pointer;
		display: inline-block;
		height: 100%;
		width: 50%;
		font-size: 14px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	.act-1 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/sendMailIcon.gif');
	}
	.act-2 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/forwardMailIcon.gif');
	}
	.act-3 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/addFriendIcon.gif');
	}
	.act-4 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/addFavoritesIcon.gif');
	}
	.act-5 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/messagefriend.gif');
	}
	.act-6 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/blockuser.gif');
	}
	.act-7 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/icon_add_to_group.gif');
	}
	.act-8 {
		background-image: url('https://xpportfoliowebsite.s3.amazonaws.com/Images/icon_rank_user4.gif');
	}

	.m-details-panel {
		padding-bottom: 5px;
	}
	.m-details-panel .row {
		display: flex;
		align-items: stretch;
	}
	.m-details-panel .sm-col {
		display: inline-block;
		width: 40%;
		font-size: 14px;
		padding: 0 5px 0 0;
		align-self: stretch;
	}
	.m-details-panel .sm-col:first-child p {
		font-weight: 700;
		color: #0047ab;
		text-transform: capitalize;
	}
	.m-details-panel .sm-col:last-child {
		width: 60%;
	}
	.m-details-panel .sm-col p {
		background-color: #b5d2fa;
		padding: 5px;
		margin: 0;
		height: 100%;
	}
	.m-details-panel .sm-col:last-child p {
		background-color: #d5e7fb;
	}

	.profile-section {
		width: 100%;
	}
	.section-header {
		background-color: #ffd6a8;
		color: #ff7b00;
		font-weight: 700;
		padding: 2px 20px;
		margin-bottom: 10px;
	}
	.section-subheader {
		font-weight: 700;
		color: #ff7b00;
		margin-left: 10px;
		margin-bottom: 5px;
	}
	.section-subheader + p {
		margin-left: 10px;
	}
	.profile-section b {
		font-weight: normal;
		color: #dd1900;
	}

	.user-content .top-banner {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 130px;
		width: 100%;
		border: 3px solid #000;
		margin-bottom: 20px;
	}
	.user-content .top-banner h1 {
		margin: 0;
		font-size: 23px;
	}
	.skill-count {
		font-weight: 700;
	}
	.skill-grid {
		width: 100%;
	}
	.skill-grid .row {
		width: 100%;
		display: flex;
		gap: 10px;
	}
	.skill-grid .skill {
		padding: 20px;
		width: 100%;
		color: black;
		align-items: center;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}
	.skill-grid .skill:hover a {
		text-decoration: underline;
	}

	.skill-grid__a {
		width: 30%;
		display: flex;
		color: black;
		font-size: 12px;
		margin-bottom: 10px;
	}
	.skill-grid img {
		width: 100%;
		vertical-align: top;
	}

	.view-all-f {
		display: inline-block;
		width: 100%;
		text-align: right;
		color: #dd1900;
		font-weight: 700;
		margin: 10px 0;
		font-size: 14px;
		background-color: transparent;
		border: none;
	}

	.comment-details {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.comment-details .comments-to-display {
		font-weight: 700;
	}
	.comment-stream {
		width: 100%;
	}
	.comment {
		width: 100%;
		display: flex;
		background-color: #fbeacc;
	}

	.comment .dp-group {
		max-width: 120px;
		overflow: hidden;
	}
	.comment .dp-group,
	.comment .comment-cont {
		padding: 15px;
	}
	.comment .dp-group {
		background-color: #ffd6a8;
		text-align: center;
	}
	.comment .dp-group a {
		font-weight: 200;
	}
	.comment .dp-group img {
		width: 100%;
		max-height: 150px;
		margin: 10px 0;
	}

	.comment .comment-cont {
		flex-grow: 2;
	}
	.comment .comment-cont .post-info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		font-size: 12px;
	}
	.comment .comment-cont .post-info .date {
		font-weight: 700;
	}
	.comment .comment-cont .post-info .c-actions {
		text-align: right;
	}
	.comment .message-body {
		font-size: 12px;
		line-height: 16px;
	}

	footer {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}
	footer ul li a {
		color: #0047ab;
		text-decoration: underline;
	}
</style>
