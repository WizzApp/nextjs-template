require('ts-node/register');
const { config } = require('./codecept.base.conf');
const { exec } = require('child_process');

let server = null;

exports.config = {
  ...config,
  bootstrap() {
    server = exec('npm run dev');
  },
  teardown() {
    server.kill();
  },
};
