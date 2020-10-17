const {Given, When, Then, setDefaultTimeout} = require("cucumber");
const State = require("@cucumber-e2e/po").State;
const ConfigConstants = require("./helpers/ConfigConstants");
const { browser } = require("protractor");
const { Memory } = require("@cucumber-e2e/memory");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");

When(/^User saves text of "(.+)" as "(.+)"$/, async function(alias, memoryKey) {
    const page = State.getPage();
    const element = page.getElement(alias);
    await browser.wait(
        ecHelper(element, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    Memory.setValue(memoryKey, await element.getText());
});
