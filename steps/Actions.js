const {Given, When, Then, setDefaultTimeout} = require("cucumber");
const { State } = require("@cucumber-e2e/po");
const { Memory } = require("@cucumber-e2e/memory");
const ConfigConstants = require("./helpers/ConfigConstants");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");
const { browser } = require("protractor");

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^User opens "(.+)"$/, async function(url) {
    const parsedUrl = Memory.getValue(url);
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
