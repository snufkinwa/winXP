export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.CMdW7Eub.js","app":"_app/immutable/entry/app.D5VTIv0T.js","imports":["_app/immutable/entry/start.CMdW7Eub.js","_app/immutable/chunks/entry.DksO6D-d.js","_app/immutable/chunks/scheduler.DdYVk0Gg.js","_app/immutable/chunks/index.p9FiLRV3.js","_app/immutable/entry/app.D5VTIv0T.js","_app/immutable/chunks/scheduler.DdYVk0Gg.js","_app/immutable/chunks/index.DspVTcxS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/desktop",
				pattern: /^\/desktop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/unexpected",
				pattern: /^\/unexpected\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
