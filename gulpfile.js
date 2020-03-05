const config = require('./config');
const { addTasks } = require('@javascriptru/project-server');

addTasks({ publicRoot: config.publicRoot});

