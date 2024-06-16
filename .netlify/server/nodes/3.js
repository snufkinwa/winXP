

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/desktop/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CAZVfhyQ.js","_app/immutable/chunks/scheduler.DvUPq92Z.js","_app/immutable/chunks/index.Dtlhvem1.js","_app/immutable/chunks/index.CIKP5CcR.js","_app/immutable/chunks/Power.CVNU-tqy.js","_app/immutable/chunks/MediaQuery.BtdhKVUx.js"];
export const stylesheets = ["_app/immutable/assets/3.uAUyM8fU.css"];
export const fonts = ["_app/immutable/assets/Fontout.CTXwOXi6.ttf"];
