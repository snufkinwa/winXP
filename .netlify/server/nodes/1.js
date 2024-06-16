

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C15kXJLw.js","_app/immutable/chunks/scheduler.DvUPq92Z.js","_app/immutable/chunks/index.Dtlhvem1.js"];
export const stylesheets = ["_app/immutable/assets/1.GnFYY7pn.css"];
export const fonts = ["_app/immutable/assets/lucida-bsod.BIgN4Zx1.ttf"];
