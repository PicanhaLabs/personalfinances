'use strict';

var assert		= require('assert'),
	DatabaseMock = require("../mocks/database.js"),
	Entry	= require('../../src/models/Entry.js');


describe('Entry', () => {
	it('Checking name', () => {
		assert.equal(Entry.name, 'Entry');
	});
	
	describe('Save entry', function(){
		it('Save one', () => {
			var entry = {
				description: 'Whatever',
				value: 10.05
			};
			
			var saved = Entry.save(entry, DatabaseMock);
			
			assert.equal(saved.id, 1);
			assert.equal(saved.description, 'Whatever');
			assert.equal(saved.value, 10.05);
		});
	});
});