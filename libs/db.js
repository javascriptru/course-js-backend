let Db = require('@javascriptru/json-db');
let config = require('../config');
let path = require('path');

let db = new Db({
  dataPath: path.resolve(config.dataRoot, 'db.json'),
  schemasPath: path.resolve(config.dataRoot, 'schemas.js')
});

db.load();

module.exports = db;
