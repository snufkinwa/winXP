

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/desktop/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CJyj-e1L.js","_app/immutable/chunks/scheduler.DdYVk0Gg.js","_app/immutable/chunks/index.DspVTcxS.js","_app/immutable/chunks/index.p9FiLRV3.js","_app/immutable/chunks/Power.CVNU-tqy.js"];
export const stylesheets = ["_app/immutable/assets/3.DWt5NMlH.css"];
export const fonts = ["_app/immutable/assets/PLANK.Rf6VRf_-.ttf","_app/immutable/assets/Fontout.CTXwOXi6.ttf"];
