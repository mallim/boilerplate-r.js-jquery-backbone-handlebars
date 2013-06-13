// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
 
	shim: {
		jquery: {
			exports: 'jQuery' 
		},
		underscore: {
			deps: ['jquery'], //dependencies
			exports: '_' //the exported symbol
		},
		backbone : {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone' 
		},
		handlebars: {
			deps: ['jquery'],
			exports: 'Handlebars'
		},
		appLoader : {
			deps: ['backbone'],
			exports: 'appLoader'
		}

	},

	paths: {
		appLoader:	'app_loader',
		jquery:		'jquery',
		underscore: 'underscore',
		backbone :	'backbone' 
	}
});

require([
'app'
], function(App){  
	App.initialize(); 
});