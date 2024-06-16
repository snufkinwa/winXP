

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CJW----k.js","_app/immutable/chunks/scheduler.DdYVk0Gg.js","_app/immutable/chunks/index.DspVTcxS.js"];
export const stylesheets = ["_app/immutable/assets/1.GnFYY7pn.css"];
export const fonts = ["_app/immutable/assets/lucida-bsod.BIgN4Zx1.ttf"];
