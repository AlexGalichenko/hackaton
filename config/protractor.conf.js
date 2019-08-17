const fsextra = require("fs-extra");
const yargs = require("yargs");
const compile = require("@cucumber-e2e/gherkin-parallel");
const State = require("@cucumber-e2e/po").State;
const PageMap = require("../po/PageMap");

const argv = yargs
    .option("tags", {
        describe: "tags to run"
    })
    .argv;

exports.config = {
    chromeDriver: require("../node_modules/webdriver-manager-replacement/downloads/chromedriver.config.json").last,
    directConnect: true,

    globalTimeout: 59 * 1000,
    getPageTimeout: 59 * 1000,
    allScriptsTimeout: 59 * 1000,

    capabilities: {
        browserName: "chrome",
        shardTestFiles: true,
        maxInstances: 6,
        //chrome options
        chromeOptions: {
            args: [
                "--disable-gpu",
                "--disable-infobars",
                "--no-sandbox",
                "--incognito"
            ],
            prefs: {
                download: {
                    prompt_for_download: false
                },
            }
        }
    },

    framework: "custom",  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve("protractor-cucumber-framework"),  // path relative to the current config file

    specs: [
        "../out/features/*.feature" // Specs here are the cucumber feature files
    ],

    // cucumber command line options
    cucumberOpts: {
        require: [
            "../steps/*.js"
        ],  // require step definition files before executing features
        // tags: [argv.tags],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        format: ["progress", "json:reports/report." + new Date().getTime() + ".json"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

    beforeLaunch: async () => {
        fsextra.emptyDirSync("./reports");
        fsextra.emptyDirSync("./out/features");

        await compile({
            specs: ["./features/**/*.feature"],
            outDir: "./out/features",
            tagExpression: argv.tags
        });
    },

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        State.setPageMap(new PageMap());
        // Memory.setConstantsInstance(new ConstantMap());
        // Memory.setComputedInstance(new ComputedMap());
    },

    afterLaunch: async () => {}

};