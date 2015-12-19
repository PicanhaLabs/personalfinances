'use strict'

class Entry {
	constructor() {
		this.name = 'Entry';
	}
	
	save(entry, connection) {
	    return connection.insert(this.name, entry);
	}
}

module.exports = new Entry();