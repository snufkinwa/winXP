

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/desktop/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.jg0I3nel.js","_app/immutable/chunks/scheduler.355Muk5a.js","_app/immutable/chunks/index.Npz84Iwx.js","_app/immutable/chunks/index.BIhltM6B.js","_app/immutable/chunks/Power.CVNU-tqy.js"];
export const stylesheets = ["_app/immutable/assets/3.DWt5NMlH.css"];
export const fonts = ["_app/immutable/assets/PLANK.Rf6VRf_-.ttf","_app/immutable/assets/Fontout.CTXwOXi6.ttf"];
