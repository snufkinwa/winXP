<script>
  import { onMount } from 'svelte';

  export let size = '50px';
  export const color = 'rgba(155, 158, 217, 0.5)';

  let bubble;

  onMount(() => {
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
  });
</script>

<style>
   .bubble {
    position: absolute;
    bottom: -30px;
    border-radius: 50%;
    animation: float 10s infinite ease-in-out;
    background: radial-gradient(
      circle at 75% 30%,
      white 5px,
      aqua 8%,
      darkblue 60%,
      aqua 100%
    );
    box-shadow:
      inset 0 0 20px #fff,
      inset 10px 0 46px #eaf5fc,
      inset 88px 0px 60px #c2d8fe,
      inset -20px -60px 100px #fde9ea,
      inset 0 50px 140px #fde9ea,
      0 0 100px #fff;
  }

  .bubble::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    filter: blur(2px);
  }

  @keyframes float {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    50% {
      transform: translate(calc(-50vw + 50% + 1vw), -50vh);
    }
    100% {
      transform: translate(calc(50vw - 50% - 1vw), -100vh);
      opacity: 0;
    }
  }
</style>

<div class="bubble" bind:this={bubble} style="width: {size}; height: {size};"></div>
