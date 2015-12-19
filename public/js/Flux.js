'use strict';

var Fluxxor = require('Fluxxor'),
    EntryActions = require("Actions/EntryActions"),
    EntryStore = require("Stores/EntryStore");

module.exports = new Fluxxor.Flux(EntryStore, EntryActions.actions);