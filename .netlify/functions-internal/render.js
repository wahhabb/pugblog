const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Wahhab-Baldwin.jpg","calc.png","demo.png","favicon.png","prism-1.css","prism.js"]),
	_: {
		mime: {".jpg":"image/jpeg",".png":"image/png",".css":"text/css",".js":"application/javascript"},
		entry: {"file":"start-885ebfcc.js","js":["start-885ebfcc.js","chunks/vendor-2253224b.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/blog\/Embedcode\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/blog/Embedcode.js'))
			},
			{
				type: 'page',
				pattern: /^\/blog\/sveltekit\/?$/,
				params: null,
				path: "/blog/sveltekit",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/blog\/Calccode\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/blog/Calccode.js'))
			},
			{
				type: 'page',
				pattern: /^\/blog\/mysite\/?$/,
				params: null,
				path: "/blog/mysite",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/embed\/?$/,
				params: null,
				path: "/blog/embed",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/calc\/?$/,
				params: null,
				path: "/blog/calc",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		]
	}
});
