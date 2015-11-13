'use strict';

var assert		= require('assert'),
	Category	= require('../src/models/Category.js');


describe('Category', () => {
	it('Creating object', () => {
		var cat = new Category();
		assert.equal(cat.name, 'Category');
	});
});