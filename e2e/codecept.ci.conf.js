require('ts-node/register');
const { config } = require('./codecept.base.conf');

exports.config = {
  ...config,
  helpers: {
    Playwright: {
      ...config.helpers.Playwright,
      show: false,
    },
  },
  mocha: {
    reporterOptions: {
      mochaFile: '../reports/codecept-junit.xml'
    }
  }
};
