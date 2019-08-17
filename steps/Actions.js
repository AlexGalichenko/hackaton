const {Given, When, Then, setDefaultTimeout} = require("cucumber");
const State = require("@cucumber-e2e/po").State;
const Memory = require("@cucumber-e2e/memory").Memory;
const ConfigConstants = require("./helpers/ConfigConstants");

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^User opens "(.+)"$/, async function(url) {
    const parsedUrl = Memory.parseValue(url);
    await browser.get(parsedUrl);
});