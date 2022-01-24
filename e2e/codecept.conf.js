require('ts-node/register');
const { exec, ChildProcess } = require('child_process');

let server = null;

exports.config = {
  tests: './**/*.test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      browser: 'chromium',
      trace: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'nextjs-template',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
  },
  bootstrap() {
    server = exec('npm run dev');
  },
  teardown() {
    server.kill();
  }
}