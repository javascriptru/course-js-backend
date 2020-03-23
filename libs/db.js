let Db = require('@javascriptru/json-db');
let config = require('../config');
let path = require('path');

class BackendDb extends Db {
  load() {
    super();
    this.data.orders = this.data.orders.filter(order => order.createdAt < Date.now());
  }
}

let db = new BackendDb({
  dataPath: path.resolve(config.dataRoot, 'db.json'),
  schemasPath: path.resolve(config.dataRoot, 'schemas.js')
});


db.load();

module.exports = db;
