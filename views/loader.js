requirejs.config({
	baseUrl: '',
	paths: {
		'all': 'js/all.min',
		'jquery': 'js/all.min',
		'barnaul': 'barnaul/js/scripts',
		'fancybox': 'vendor/fancybox/source/jquery.fancybox.pack',
		'underscore': 'js/all.min',
		'main': 'views/index'
	},
   	shim: {
   		'barnaul': {
   			deps: ['all']
   		},
   		'main': {
   			deps: ['barnaul']
   		},
   		'fancybox': {
   			deps: ['all']
   		}
    }
});

require([
	/* by order */
	'barnaul',
	'main',
	'fancybox'
], function () {

});