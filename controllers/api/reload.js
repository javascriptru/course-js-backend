let db = require('../../libs/db');
let fs = require('fs');
let config = require('../../config');
const { resolve } = require('path');

module.exports = async (ctx) => {

  fs.copyFileSync(resolve(config.dataRoot, 'db.json'), resolve(config.dataRoot, 'db.work.json'));

  db.load();
  ctx.body = "Database reloaded.";
};
