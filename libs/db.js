let Db = require('@javascriptru/json-db');
let config = require('../config');
let path = require('path');

class BackendDb extends Db {
  load() {
    super.load();

    let maxDateOrder = this.data.orders.reduce((prev, current) => (prev.createdAt < current.createdAt ? current : prev), { createdAt: 0 });

    let dateDiff = new Date() - maxDateOrder.createdAt;

    // console.log(dateDiff);

    // console.log(maxDateOrder);

    for(let order of this.data.orders) {
      order.createdAt = new Date(+order.createdAt + dateDiff);
    }

    // console.log(this.data.orders.reduce((prev, current) => (prev.createdAt < current.createdAt ? current : prev), { createdAt: 0 }));

    // this.data.orders = this.data.orders.map(order => order.createdAt < Date.now());
  }
}

let db = new BackendDb({
  dataPath: path.resolve(config.dataRoot, 'db.json'),
  schemasPath: path.resolve(config.dataRoot, 'schemas.js')
});


db.load();

module.exports = db;
