import { c as create_ssr_component, i as createEventDispatcher, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { N as NoCellphones } from "../../../chunks/NoCellphones.js";
const turnOff = "/_app/immutable/assets/Power.BEfCdrbt.png";
const loginLogo = "/_app/immutable/assets/loginXP.CshbUNw4.png";
const css = {
  code: "@font-face{font-family:'Source Sans Pro';src:url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');font-display:swap}.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{margin:0;padding:0;box-sizing:border-box}main.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{margin:0;padding:0;height:100%;display:flex;flex-direction:column}.balloon-container.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{position:absolute;bottom:25%;right:29%}.balloonHint-container.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{position:absolute;bottom:19%;right:24%}.header.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{min-height:12.5vh;width:100%;background-color:#084da3;position:relative}.header.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9::before{content:'';width:100%;height:7px;position:absolute;bottom:0px;background:linear-gradient(\n			270deg,\n			#084da3 -33.4%,\n			#084da3 6.07%,\n			#ffffff 49.56%,\n			#084da3 82.59%,\n			#084da3 121.25%\n		)}footer.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{min-height:14.5vh;width:100%;background-color:#084da3;position:relative;display:flex;justify-content:space-between;align-items:center}footer.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9::before{content:'';width:100%;height:7px;position:absolute;align-self:flex-start;background:linear-gradient(\n			270deg,\n			#084da3 -33.4%,\n			#084da3 6.07%,\n			#ff9933 49.56%,\n			#084da3 82.59%,\n			#084da3 121.25%\n		)}footer.svelte-1hcz2h9 .btn.svelte-1hcz2h9.svelte-1hcz2h9{margin-left:50px;display:flex;justify-content:center;align-items:center}footer.svelte-1hcz2h9 .btn button.svelte-1hcz2h9.svelte-1hcz2h9{width:40px;height:40px;all:unset;cursor:pointer}footer.svelte-1hcz2h9 .btn button.svelte-1hcz2h9 img.svelte-1hcz2h9{width:40px;height:40px}footer.svelte-1hcz2h9 .btn p.svelte-1hcz2h9.svelte-1hcz2h9{color:#fff;margin-left:20px;font-size:18px;font-family:'Source Sans Pro', sans-serif;font-weight:400}footer.svelte-1hcz2h9 .informations.svelte-1hcz2h9.svelte-1hcz2h9{margin-right:50px;color:#fff;font-family:'Source Sans Pro', sans-serif;font-size:13px;text-align:center;letter-spacing:0.5px;font-weight:400}main.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{height:73vh;background:radial-gradient(19.48% 42.48% at 10% 22.48%, #9cc0e9 0%, #508fd9 100%);display:grid;grid-template-columns:1fr auto 1fr;align-items:center}main.svelte-1hcz2h9 .img.svelte-1hcz2h9.svelte-1hcz2h9{display:flex;justify-content:center;align-items:flex-end;flex-direction:column;position:relative;top:20px}.show-small.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{display:none}.show-large.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{display:contents}@media(max-width: 1268px){.show-small.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{display:contents}.show-large.svelte-1hcz2h9.svelte-1hcz2h9.svelte-1hcz2h9{display:none}}main.svelte-1hcz2h9 .img h1.svelte-1hcz2h9.svelte-1hcz2h9{font-family:'Source Sans Pro', sans-serif;color:white;font-weight:500;margin-top:30px;margin-right:40px}main.svelte-1hcz2h9 .line.svelte-1hcz2h9.svelte-1hcz2h9{width:2px;height:80%;margin:0 42px;background:linear-gradient(180deg, #508fd9 0%, #ffffff 47.4%, #508fd9 98.96%)}main.svelte-1hcz2h9 .users section.svelte-1hcz2h9.svelte-1hcz2h9{padding:15px 20px;width:445px;height:112.5px;border-radius:4px 0px 0px 4px;position:relative;display:flex;opacity:0.6;transition:background 0.3s ease,\n			opacity 0.3s ease;cursor:pointer}main.svelte-1hcz2h9 .users section.active.svelte-1hcz2h9.svelte-1hcz2h9{background:linear-gradient(90deg, #084da3 0%, #508fd9 100%);background-image:url('$lib/assets/Rectangle 73 (1).png');opacity:1}main.svelte-1hcz2h9 .users section .iconA.svelte-1hcz2h9.svelte-1hcz2h9,main.svelte-1hcz2h9 .users section .iconB.svelte-1hcz2h9.svelte-1hcz2h9{width:81px;height:81px;border:2px solid #fff;border-radius:4px}main.svelte-1hcz2h9 .users section.svelte-1hcz2h9.svelte-1hcz2h9:hover{opacity:1}main.svelte-1hcz2h9 .users section:hover .iconA.svelte-1hcz2h9.svelte-1hcz2h9,main.svelte-1hcz2h9 .users section:hover .iconB.svelte-1hcz2h9.svelte-1hcz2h9{border:2px solid #ffcc00;opacity:1}main.svelte-1hcz2h9 .users section.active .iconA.svelte-1hcz2h9.svelte-1hcz2h9,main.svelte-1hcz2h9 .users section.active .iconB.svelte-1hcz2h9.svelte-1hcz2h9{border:2px solid #ffcc00}main.svelte-1hcz2h9 .users .janay .iconA.svelte-1hcz2h9.svelte-1hcz2h9{background:url('$lib/assets/icon0.png') no-repeat center center;background-size:cover}main.svelte-1hcz2h9 .users .janay .user.svelte-1hcz2h9.svelte-1hcz2h9{margin-left:20px;position:relative;color:#fff}main.svelte-1hcz2h9 .users .janay .user h3.svelte-1hcz2h9.svelte-1hcz2h9{font-family:'Source Sans Pro', sans-serif;font-weight:400;font-size:20px}main.svelte-1hcz2h9 .users .janay .user p.svelte-1hcz2h9.svelte-1hcz2h9{font-family:'Verdana', sans-serif;margin-top:10px;font-size:13px}main.svelte-1hcz2h9 .users .janay .user .input.svelte-1hcz2h9.svelte-1hcz2h9{position:absolute;display:flex;justify-content:center;align-items:center;bottom:-24px}main.svelte-1hcz2h9 .users .janay .user .input input.svelte-1hcz2h9.svelte-1hcz2h9{padding:0 0.4rem;outline:none;height:40px;width:200px;background:#ffffff;color:#000000;border:0.5px solid #333333;border-radius:4px}main.svelte-1hcz2h9 .users .janay .user .input .green.svelte-1hcz2h9.svelte-1hcz2h9{width:40px;height:40px;background-color:#23b221;border:1px solid #fff;box-shadow:inset 4px 2px 8px rgba(255, 255, 255, 0.6),\n			inset -2px -3px 5px #267c08;border-radius:4px;outline:none;cursor:pointer;display:flex;justify-content:center;align-items:center;margin:0 10px;position:relative}main.svelte-1hcz2h9 .users .janay .user .input .green img.svelte-1hcz2h9.svelte-1hcz2h9{position:absolute;top:7px}main.svelte-1hcz2h9 .users .janay .user .input .blue.svelte-1hcz2h9.svelte-1hcz2h9{width:40px;height:40px;background-color:#2266f5;border:1px solid #fff;box-shadow:inset 4px 2px 8px rgba(255, 255, 255, 0.6),\n			inset -2px -3px 5px #0844c3;border-radius:4px;outline:none;cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative}main.svelte-1hcz2h9 .users .janay .user .input .blue img.svelte-1hcz2h9.svelte-1hcz2h9{position:absolute;top:5px}main.svelte-1hcz2h9 .users .guest.svelte-1hcz2h9.svelte-1hcz2h9{margin-top:40px}main.svelte-1hcz2h9 .users .guest .iconB.svelte-1hcz2h9.svelte-1hcz2h9{background:url('$lib/assets/icon.png') no-repeat center center;background-size:cover;border-color:#fff}main.svelte-1hcz2h9 .users .guest .user.svelte-1hcz2h9.svelte-1hcz2h9{margin-left:20px;color:#fff;font-family:'Source Sans Pro', sans-serif;font-size:20px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher, onMount } from 'svelte';\\n\\timport { goto } from '$app/navigation';\\n\\timport risk from '$lib/assets/windowsIcons/897(32x32).png';\\n\\timport info from '$lib/assets/windowsIcons/1001.ico';\\n\\n\\timport NoCellphones from '$lib/components/NoCellphones.svelte';\\n\\timport loginLogo from '$lib/assets/loginXP.png';\\n\\timport turnOff from '$lib/assets/windowsIcons/Power.png';\\n\\timport rightArrow from '$lib/assets/Vector (1).png';\\n\\timport questionMark from '$lib/assets/_.png';\\n\\timport Balloon from '$lib/components/Balloon/Balloon.svelte';\\n\\n\\tlet password = '';\\n\\tlet correctPassword = import.meta.env.VITE_WIN_PASSWORD;\\n\\tlet activeUser = null;\\n\\tconst dispatch = createEventDispatcher();\\n\\tlet startBalloon = false;\\n\\tlet showHintBalloon = false;\\n\\tlet audio;\\n\\n\\tonMount(() => {\\n\\t\\taudio = new Audio(\\n\\t\\t\\t'https://xpportfoliowebsite.s3.amazonaws.com/SystemSoundEffects/Windows+XP+Logon+Sound.wav'\\n\\t\\t);\\n\\t});\\n\\n\\t//TODO Make bubble keep popping up if password is incorrect.\\n\\tfunction handleSubmit() {\\n\\t\\tif (password === correctPassword) {\\n\\t\\t\\tdispatch('login', { username: 'Janay', password });\\n\\t\\t\\tstartBalloon = false;\\n\\t\\t} else {\\n\\t\\t\\tconsole.log('Incorrect password');\\n\\t\\t\\tstartBalloon = true;\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleClickOutside(event) {\\n\\t\\tconst janaySection = document.querySelector('.janay');\\n\\t\\tconst guestSection = document.querySelector('.guest');\\n\\t\\tif (\\n\\t\\t\\tjanaySection &&\\n\\t\\t\\t!janaySection.contains(event.target) &&\\n\\t\\t\\tguestSection &&\\n\\t\\t\\t!guestSection.contains(event.target)\\n\\t\\t) {\\n\\t\\t\\tactiveUser = null;\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleGuestLogin() {\\n\\t\\tdispatch('login', { username: 'Guest', password: '' });\\n\\t\\tgoto('/desktop');\\n\\t\\tplayAudio();\\n\\t}\\n\\n\\tfunction playAudio() {\\n\\t\\tif (audio) {\\n\\t\\t\\taudio.play();\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleKeyPress(event) {\\n\\t\\tif (event.key === 'Enter' || event.key === ' ') {\\n\\t\\t\\tevent.preventDefault();\\n\\t\\t\\thandleSubmit();\\n\\t\\t}\\n\\t}\\n\\n\\tfunction toggleInput(user) {\\n\\t\\tactiveUser = activeUser === user ? null : user;\\n\\t}\\n\\n\\tfunction showHint() {\\n\\t\\tshowHintBalloon = true;\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tdocument.addEventListener('click', handleClickOutside);\\n\\t\\treturn () => {\\n\\t\\t\\tdocument.removeEventListener('click', handleClickOutside);\\n\\t\\t};\\n\\t});\\n<\/script>\\n\\n<div class=\\"show-large\\">\\n\\t<div class=\\"header\\" />\\n\\t<main>\\n\\t\\t<div class=\\"img\\">\\n\\t\\t\\t<img src={loginLogo} alt=\\"Logo Windows XP\\" />\\n\\t\\t\\t<h1>To begin, click your user name</h1>\\n\\t\\t</div>\\n\\t\\t<div class=\\"line\\"></div>\\n\\t\\t<div class=\\"users\\">\\n\\t\\t\\t<section\\n\\t\\t\\t\\tclass=\\"janay\\"\\n\\t\\t\\t\\trole=\\"button\\"\\n\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\ton:click={() => toggleInput('janay')}\\n\\t\\t\\t\\ton:keydown={(event) => handleKeyPress(event, () => toggleInput('janay'))}\\n\\t\\t\\t\\tclass:active={activeUser === 'janay'}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"iconA\\"></div>\\n\\t\\t\\t\\t<div class=\\"user\\">\\n\\t\\t\\t\\t\\t<h3>Janay King</h3>\\n\\t\\t\\t\\t\\t{#if activeUser === 'janay'}\\n\\t\\t\\t\\t\\t\\t<p>Type your password</p>\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t\\t<div class=\\"input\\" role=\\"button\\" tabindex=\\"0\\" on:click|stopPropagation>\\n\\t\\t\\t\\t\\t\\t\\t<div style=\\"position: relative;\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<input type=\\"password\\" bind:value={password} on:keydown={handleKeyPress} />\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"balloon-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Balloon\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstart={startBalloon}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstartAfter={0}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tduration={15000}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\theaderText=\\"Did you forget your password?\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfirstText=\\"Please type your password again.\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsecondText=\\"Be sure to use correct uppercase and lowercase letters.\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\timageSrc={risk}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tshowButton={true}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:close={() => (startBalloon = false)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<button class=\\"green\\" on:click|preventDefault={handleSubmit}>\\n\\t\\t\\t\\t\\t\\t\\t\\t<img src={rightArrow} alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t<div style=\\"position: relative;\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<button class=\\"blue\\" on:click|preventDefault={showHint}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src={questionMark} alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"balloonHint-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Balloon\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstart={showHintBalloon}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstartAfter={0}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tduration={15000}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\theaderText=\\"Password Hint:\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfirstText=\\"|ψ⟩ = α|0⟩ + β|1⟩, where |α|^2 + |β|^2 = 1\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsecondText=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\timageSrc={info}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:close={() => (showHintBalloon = false)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</section>\\n\\t\\t\\t<section\\n\\t\\t\\t\\tclass=\\"guest\\"\\n\\t\\t\\t\\trole=\\"button\\"\\n\\t\\t\\t\\ttabindex=\\"0\\"\\n\\t\\t\\t\\ton:click={handleGuestLogin}\\n\\t\\t\\t\\ton:keypress={(event) => handleKeyPress(event, handleGuestLogin)}\\n\\t\\t\\t\\tclass:active={activeUser === 'guest'}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"iconB\\"></div>\\n\\t\\t\\t\\t<div class=\\"user\\">\\n\\t\\t\\t\\t\\t<p>Guest</p>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</section>\\n\\t\\t</div>\\n\\t</main>\\n\\t<footer>\\n\\t\\t<div class=\\"btn\\">\\n\\t\\t\\t<button> <img src={turnOff} alt=\\"\\" /> </button>\\n\\t\\t\\t<p>Turn off computer</p>\\n\\t\\t</div>\\n\\t\\t<div class=\\"informations\\">\\n\\t\\t\\t<p>After you log on, you can add or change accounts</p>\\n\\t\\t\\t<p>Just go to your Control Panel and click User Accounts</p>\\n\\t\\t</div>\\n\\t</footer>\\n</div>\\n\\n<div class=\\"show-small\\">\\n\\t<NoCellphones />\\n</div>\\n\\n<style>\\n\\t@font-face {\\n\\t\\tfont-family: 'Source Sans Pro';\\n\\t\\tsrc: url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\\n\\t\\tfont-display: swap;\\n\\t}\\n\\t* {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tmain {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\theight: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\t.balloon-container {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 25%;\\n\\t\\tright: 29%;\\n\\t}\\n\\n\\t.balloonHint-container {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 19%;\\n\\t\\tright: 24%;\\n\\t}\\n\\t.header {\\n\\t\\tmin-height: 12.5vh;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-color: #084da3;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.header::before {\\n\\t\\tcontent: '';\\n\\t\\twidth: 100%;\\n\\t\\theight: 7px;\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0px;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\t270deg,\\n\\t\\t\\t#084da3 -33.4%,\\n\\t\\t\\t#084da3 6.07%,\\n\\t\\t\\t#ffffff 49.56%,\\n\\t\\t\\t#084da3 82.59%,\\n\\t\\t\\t#084da3 121.25%\\n\\t\\t);\\n\\t}\\n\\n\\tfooter {\\n\\t\\tmin-height: 14.5vh;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-color: #084da3;\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\tfooter::before {\\n\\t\\tcontent: '';\\n\\t\\twidth: 100%;\\n\\t\\theight: 7px;\\n\\t\\tposition: absolute;\\n\\t\\talign-self: flex-start;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\t270deg,\\n\\t\\t\\t#084da3 -33.4%,\\n\\t\\t\\t#084da3 6.07%,\\n\\t\\t\\t#ff9933 49.56%,\\n\\t\\t\\t#084da3 82.59%,\\n\\t\\t\\t#084da3 121.25%\\n\\t\\t);\\n\\t}\\n\\n\\tfooter .btn {\\n\\t\\tmargin-left: 50px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\tfooter .btn button {\\n\\t\\twidth: 40px;\\n\\t\\theight: 40px;\\n\\t\\tall: unset;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\tfooter .btn button img {\\n\\t\\twidth: 40px;\\n\\t\\theight: 40px;\\n\\t}\\n\\n\\tfooter .btn p {\\n\\t\\tcolor: #fff;\\n\\t\\tmargin-left: 20px;\\n\\t\\tfont-size: 18px;\\n\\t\\tfont-family: 'Source Sans Pro', sans-serif;\\n\\t\\tfont-weight: 400;\\n\\t}\\n\\n\\tfooter .informations {\\n\\t\\tmargin-right: 50px;\\n\\t\\tcolor: #fff;\\n\\t\\tfont-family: 'Source Sans Pro', sans-serif;\\n\\t\\tfont-size: 13px;\\n\\t\\ttext-align: center;\\n\\t\\tletter-spacing: 0.5px;\\n\\t\\tfont-weight: 400;\\n\\t}\\n\\n\\tmain {\\n\\t\\theight: 73vh;\\n\\t\\tbackground: radial-gradient(19.48% 42.48% at 10% 22.48%, #9cc0e9 0%, #508fd9 100%);\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: 1fr auto 1fr;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\tmain .img {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: flex-end;\\n\\t\\tflex-direction: column;\\n\\t\\tposition: relative;\\n\\t\\ttop: 20px;\\n\\t}\\n\\t.show-small {\\n\\t\\tdisplay: none;\\n\\t}\\n\\t.show-large {\\n\\t\\tdisplay: contents;\\n\\t}\\n\\n\\t@media (max-width: 1268px) {\\n\\t\\t.show-small {\\n\\t\\t\\tdisplay: contents;\\n\\t\\t}\\n\\t\\t.show-large {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n\\tmain .img h1 {\\n\\t\\tfont-family: 'Source Sans Pro', sans-serif;\\n\\t\\tcolor: white;\\n\\t\\tfont-weight: 500;\\n\\t\\tmargin-top: 30px;\\n\\t\\tmargin-right: 40px;\\n\\t}\\n\\n\\tmain .line {\\n\\t\\twidth: 2px;\\n\\t\\theight: 80%;\\n\\t\\tmargin: 0 42px;\\n\\t\\tbackground: linear-gradient(180deg, #508fd9 0%, #ffffff 47.4%, #508fd9 98.96%);\\n\\t}\\n\\n\\tmain .users section {\\n\\t\\tpadding: 15px 20px;\\n\\t\\twidth: 445px;\\n\\t\\theight: 112.5px;\\n\\t\\tborder-radius: 4px 0px 0px 4px;\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\topacity: 0.6;\\n\\t\\ttransition:\\n\\t\\t\\tbackground 0.3s ease,\\n\\t\\t\\topacity 0.3s ease;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\tmain .users section.active {\\n\\t\\tbackground: linear-gradient(90deg, #084da3 0%, #508fd9 100%);\\n\\t\\tbackground-image: url('$lib/assets/Rectangle 73 (1).png');\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\tmain .users section .iconA,\\n\\tmain .users section .iconB {\\n\\t\\twidth: 81px;\\n\\t\\theight: 81px;\\n\\t\\tborder: 2px solid #fff;\\n\\t\\tborder-radius: 4px;\\n\\t}\\n\\n\\tmain .users section:hover {\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\tmain .users section:hover .iconA,\\n\\tmain .users section:hover .iconB {\\n\\t\\tborder: 2px solid #ffcc00;\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\tmain .users section.active .iconA,\\n\\tmain .users section.active .iconB {\\n\\t\\tborder: 2px solid #ffcc00;\\n\\t}\\n\\n\\tmain .users .janay .iconA {\\n\\t\\tbackground: url('$lib/assets/icon0.png') no-repeat center center;\\n\\t\\tbackground-size: cover;\\n\\t}\\n\\n\\tmain .users .janay .user {\\n\\t\\tmargin-left: 20px;\\n\\t\\tposition: relative;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\tmain .users .janay .user h3 {\\n\\t\\tfont-family: 'Source Sans Pro', sans-serif;\\n\\t\\tfont-weight: 400;\\n\\t\\tfont-size: 20px;\\n\\t}\\n\\n\\tmain .users .janay .user p {\\n\\t\\tfont-family: 'Verdana', sans-serif;\\n\\t\\tmargin-top: 10px;\\n\\t\\tfont-size: 13px;\\n\\t}\\n\\n\\tmain .users .janay .user .input {\\n\\t\\tposition: absolute;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tbottom: -24px;\\n\\t}\\n\\n\\tmain .users .janay .user .input input {\\n\\t\\tpadding: 0 0.4rem;\\n\\t\\toutline: none;\\n\\t\\theight: 40px;\\n\\t\\twidth: 200px;\\n\\t\\tbackground: #ffffff;\\n\\t\\tcolor: #000000;\\n\\t\\tborder: 0.5px solid #333333;\\n\\t\\tborder-radius: 4px;\\n\\t}\\n\\n\\tmain .users .janay .user .input .green {\\n\\t\\twidth: 40px;\\n\\t\\theight: 40px;\\n\\t\\tbackground-color: #23b221;\\n\\t\\tborder: 1px solid #fff;\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 4px 2px 8px rgba(255, 255, 255, 0.6),\\n\\t\\t\\tinset -2px -3px 5px #267c08;\\n\\t\\tborder-radius: 4px;\\n\\t\\toutline: none;\\n\\t\\tcursor: pointer;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 0 10px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\tmain .users .janay .user .input .green img {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 7px;\\n\\t}\\n\\n\\tmain .users .janay .user .input .blue {\\n\\t\\twidth: 40px;\\n\\t\\theight: 40px;\\n\\t\\tbackground-color: #2266f5;\\n\\t\\tborder: 1px solid #fff;\\n\\t\\tbox-shadow:\\n\\t\\t\\tinset 4px 2px 8px rgba(255, 255, 255, 0.6),\\n\\t\\t\\tinset -2px -3px 5px #0844c3;\\n\\t\\tborder-radius: 4px;\\n\\t\\toutline: none;\\n\\t\\tcursor: pointer;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\tmain .users .janay .user .input .blue img {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 5px;\\n\\t}\\n\\n\\tmain .users .guest {\\n\\t\\tmargin-top: 40px;\\n\\t}\\n\\n\\tmain .users .guest .iconB {\\n\\t\\tbackground: url('$lib/assets/icon.png') no-repeat center center;\\n\\t\\tbackground-size: cover;\\n\\t\\tborder-color: #fff;\\n\\t}\\n\\n\\tmain .users .guest .user {\\n\\t\\tmargin-left: 20px;\\n\\t\\tcolor: #fff;\\n\\t\\tfont-family: 'Source Sans Pro', sans-serif;\\n\\t\\tfont-size: 20px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css);
  return `<div class="show-large svelte-1hcz2h9"><div class="header svelte-1hcz2h9"></div> <main class="svelte-1hcz2h9"><div class="img svelte-1hcz2h9" data-svelte-h="svelte-1yqse97"><img${add_attribute("src", loginLogo, 0)} alt="Logo Windows XP" class="svelte-1hcz2h9"> <h1 class="svelte-1hcz2h9">To begin, click your user name</h1></div> <div class="line svelte-1hcz2h9"></div> <div class="users svelte-1hcz2h9"><section class="${["janay svelte-1hcz2h9", ""].join(" ").trim()}" role="button" tabindex="0"><div class="iconA svelte-1hcz2h9"></div> <div class="user svelte-1hcz2h9"><h3 class="svelte-1hcz2h9" data-svelte-h="svelte-17et9pu">Janay King</h3> ${``}</div></section> <section class="${["guest svelte-1hcz2h9", ""].join(" ").trim()}" role="button" tabindex="0" data-svelte-h="svelte-1feyo7m"><div class="iconB svelte-1hcz2h9"></div> <div class="user svelte-1hcz2h9"><p class="svelte-1hcz2h9">Guest</p></div></section></div></main> <footer class="svelte-1hcz2h9" data-svelte-h="svelte-gdovg8"><div class="btn svelte-1hcz2h9"><button class="svelte-1hcz2h9"><img${add_attribute("src", turnOff, 0)} alt="" class="svelte-1hcz2h9"></button> <p class="svelte-1hcz2h9">Turn off computer</p></div> <div class="informations svelte-1hcz2h9"><p class="svelte-1hcz2h9">After you log on, you can add or change accounts</p> <p class="svelte-1hcz2h9">Just go to your Control Panel and click User Accounts</p></div></footer></div> <div class="show-small svelte-1hcz2h9">${validate_component(NoCellphones, "NoCellphones").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map