'use strict';

class Database {
    constructor() {
        this.id = 0;
        this.data = {};
    }
    
    insert(table, record) {
        record.id = record.id ? record.id : ++this.id;
        this.data[record.id] = record;
        return record;
    }
    
    getRecord(id) {
        return this.data[id];
    }
}

module.exports = new Database();