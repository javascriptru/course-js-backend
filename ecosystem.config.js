//TODO: make one big ecosystem

module.exports = {
  apps: [{
    name:               "project-server",
    script:             "./node_modules/.bin/gulp",
    args:               "server",
    instances:          "1",
    max_memory_restart: "2G",
    error:              "/var/log/node/project-server.err.log",
    output:             "/var/log/node/project-server.out.log",
    log:                "/var/log/node/project-server.log",
    env:                {
      HOST:                        "0.0.0.0",
      PORT:                        80,
      NODE_ENV:                    "production",
      PM2_GRACEFUL_LISTEN_TIMEOUT: 1000,
      PM2_GRACEFUL_TIMEOUT:        5000,
      DB_SAVE_DISABLED:            true
    }
  }]
};
