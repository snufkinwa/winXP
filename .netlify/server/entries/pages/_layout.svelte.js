import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ":root{font-family:Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;line-height:1.5;font-weight:400;color-scheme:light;color:rgba(255, 255, 255, 0.87);background-color:none transparent;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body.svelte-1lqwuxd{overflow:hidden;margin:0;place-items:center;max-width:100vw;max-height:100vh}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<title>Janay Harris || Portfolio</title>\\n<body><slot /></body>\\n\\n<style global>\\n\\t:root {\\n\\t\\tfont-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\\n\\t\\tline-height: 1.5;\\n\\t\\tfont-weight: 400;\\n\\n\\t\\tcolor-scheme: light;\\n\\t\\tcolor: rgba(255, 255, 255, 0.87);\\n\\t\\tbackground-color: none transparent;\\n\\n\\t\\tfont-synthesis: none;\\n\\t\\ttext-rendering: optimizeLegibility;\\n\\t\\t-webkit-font-smoothing: antialiased;\\n\\t\\t-moz-osx-font-smoothing: grayscale;\\n\\t}\\n\\n\\tbody {\\n\\t\\toverflow: hidden;\\n\\t\\tmargin: 0;\\n\\t\\tplace-items: center;\\n\\t\\tmax-width: 100vw;\\n\\t\\tmax-height: 100vh;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAIC,KAAM,CACL,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACnE,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,GAAG,CAEhB,YAAY,CAAE,KAAK,CACnB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,gBAAgB,CAAE,IAAI,CAAC,WAAW,CAElC,cAAc,CAAE,IAAI,CACpB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAC1B,CAEA,mBAAK,CACJ,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KACb"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<title data-svelte-h="svelte-894pmm">Janay Harris || Portfolio</title> <body class="svelte-1lqwuxd">${slots.default ? slots.default({}) : ``}</body>`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte.js.map
