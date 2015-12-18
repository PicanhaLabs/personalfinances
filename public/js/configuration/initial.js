'use strict';

System.config({
	baseURL: 'js',
	defaultJSExtensions: true,
	format: 'cjs',
	map: {
		'Fluxxor': '../vendor/fluxxor/build/fluxxor.min.js'
	}
});

System.import('main.js');