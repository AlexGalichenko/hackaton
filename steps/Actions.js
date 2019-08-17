const {Given, When, Then, setDefaultTimeout} = require("cucumber");
const State = require("@cucumber-e2e/po").State;
const Memory = require("@cucumber-e2e/memory").Memory;
const ConfigConstants = require("./helpers/ConfigConstants");
const ecHelper = require("./helpers/ecHelper").ecHelper;
const ECOptions = require("./helpers/ecHelper").ECOptions;

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^User opens "(.+)"$/, async function(url) {
    const parsedUrl = Memory.parseValue(url);
    await browser.get(parsedUrl);
});

When(/^User types "(.+)" to "(.+)"$/, async function(value, alias) {
    const page = State.getPage();
    const parsedValue = Memory.parseValue(value);
    const element = page.getElement(alias);
    await browser.wait(
        ecHelper(element, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    await element.sendKeys(parsedValue);
});

When(/^User clicks "(.+)"$/, async function(alias) {
    const page = State.getPage();
    const element = page.getElement(alias);
    await browser.wait(
        ecHelper(element, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    await element.click();
});