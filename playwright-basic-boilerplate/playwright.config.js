const { defineConfig, devices, mergeTests } = require('@playwright/test');
const {testConfig} =require ('./testConfig.js')
const ENV= process.env.npm_config_ENV;

// if (!ENV || ![`qa`, `dev`].includes(ENV)) {
//   console.log(`Please provide a correct environment value like "npx cross-env ENV=qa|dev|qaApi|devApi"`);
//   process.exit();
// }
module.exports = defineConfig({
  timeout:120000,
  projects:[
    {
      name: 'Chrome',
      use:{
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[ENV] || 'https://www.hop3.app/',
        
        //Browser Mode
        headless: false,

        //Browser height and width
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
            slowMo: 0
          }
      }
    }
  ]
});

