const {config} = require("./protractor.conf");
const yargs = require("yargs");
const argv = yargs.argv;

exports.config = {
    ...config,
    capabilities: {
        browserName: "chrome",
        shardTestFiles: true,
        maxInstances: 6,
        chromeOptions: {
            mobileEmulation: {
                deviceName: argv.device
            },
            args: [
                "--disable-gpu",
                "--disable-infobars",
                "--no-sandbox",
                "--incognito",
                "--mobile-emulation",
                "--headless"
            ],
            prefs: {
                download: {
                    prompt_for_download: false
                },
            }
        }
    }
}
