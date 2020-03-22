let Db = require('@javascriptru/json-db');
let config = require('../config');
let { resolve } = require('path');
let fs = require('fs');

fs.copyFileSync(resolve(config.dataRoot, 'db.json'), resolve(config.dataRoot, 'db.work.json'));

let db = new Db({
  dataPath: resolve(config.dataRoot, 'db.work.json'),
  schemasPath: resolve(config.dataRoot, 'schemas.js')
});

db.load();

module.exports = db;
