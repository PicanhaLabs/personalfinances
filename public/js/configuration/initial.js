'use strict';

System.config({
	baseURL: 'js',
	defaultJSExtensions: true,
	format: 'cjs',
	map: {
		'Fluxxor': '/public/vendor/fluxxor/build/fluxxor.js'
	}
});

System.import('main.js');