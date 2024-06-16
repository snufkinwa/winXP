import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { N as NoCellphones } from "../../chunks/NoCellphones.js";
import { M as MediaQuery } from "../../chunks/MediaQuery.js";
const css = {
  code: ".page-container.svelte-rpjm7t{width:100vw;height:100vh;overflow:hidden;background-color:black}.windows__bg.svelte-rpjm7t{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background-color:black;background:url($lib/assets/windowXPboot.gif) no-repeat;background-size:contain;background-position:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport { goto } from '$app/navigation';\\n\\timport MediaQuery from '$lib/components/MediaQuery.svelte';\\n\\timport NoCellphones from '$lib/components/NoCellphones.svelte';\\n  \\n\\tlet isLoading = true;\\n\\tlet audio;\\n  \\n\\tfunction playAudio() {\\n\\t  if (audio) {\\n\\t\\taudio.play().catch(error => {\\n\\t\\t  console.warn('Failed to play audio:', error);\\n\\t\\t});\\n\\t  }\\n\\t}\\n  \\n\\tonMount(() => {\\n\\t  audio = new Audio('https://xpportfoliowebsite.s3.amazonaws.com/SystemSoundEffects/Windows+XP+Startup.wav');\\n\\t  setTimeout(() => {\\n\\t\\tisLoading = false;\\n\\t\\tgoto('/login');\\n\\t\\tplayAudio();\\n\\t  }, 6000);\\n\\t});\\n  <\/script>\\n  \\n  <MediaQuery query=\\"(min-width: 1280px)\\" let:matches>\\n\\t{#if matches}\\n\\t  <div class=\\"page-container\\">\\n\\t\\t{#if isLoading}\\n\\t\\t  <div class=\\"windows__bg\\"></div>\\n\\t\\t{:else}\\n\\t\\t  <slot />\\n\\t\\t{/if}\\n\\t  </div>\\n\\t{/if}\\n  </MediaQuery>\\n  \\n  <MediaQuery query=\\"(min-width: 480px)\\" let:matches>\\n\\t{#if !matches}\\n\\t  <NoCellphones />\\n\\t{/if}\\n  </MediaQuery>\\n  \\n  <style>\\n\\t.page-container {\\n\\t  width: 100vw;\\n\\t  height: 100vh;\\n\\t  overflow: hidden;\\n\\t  background-color: black;\\n\\t}\\n  \\n\\t.windows__bg {\\n\\t  display: flex;\\n\\t  flex-direction: column;\\n\\t  align-items: center;\\n\\t  justify-content: center;\\n\\t  width: 100%;\\n\\t  height: 100%;\\n\\t  background-color: black;\\n\\t  background: url($lib/assets/windowXPboot.gif) no-repeat;\\n\\t  background-size: contain;\\n\\t  background-position: center;\\n\\t}\\n  </style>"],"names":[],"mappings":"AA8CC,6BAAgB,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MAAM,CAChB,gBAAgB,CAAE,KACpB,CAEA,0BAAa,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,iCAAiC,CAAC,SAAS,CACvD,eAAe,CAAE,OAAO,CACxB,mBAAmB,CAAE,MACvB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1280px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="page-container svelte-rpjm7t">${`<div class="windows__bg svelte-rpjm7t"></div>`}</div>` : ``}`;
    }
  })} ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 480px)" }, {}, {
    default: ({ matches }) => {
      return `${!matches ? `${validate_component(NoCellphones, "NoCellphones").$$render($$result, {}, {}, {})}` : ``}`;
    }
  })}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte.js.map
