

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DFNzfU5T.js","_app/immutable/chunks/scheduler.355Muk5a.js","_app/immutable/chunks/index.Npz84Iwx.js"];
export const stylesheets = ["_app/immutable/assets/0.CXkG-wjI.css"];
export const fonts = [];
