const {Given, When, Then, setDefaultTimeout} = require("cucumber");
const State = require("@cucumber-e2e/po").State;
const { expect } = require("chai");
const ConfigConstants = require("./helpers/ConfigConstants");
const { Memory } = require("@cucumber-e2e/memory");
const { browser } = require("protractor");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^User should be on "(.+)" page$/, async function(pageName) {
    State.setPage(pageName);
    const pageRegexp = new RegExp(State.pageMap.getPage(pageName).selector);
    const PAGE_ERROR_MESSAGE = `Page ${pageName} has not been loaded`;

    await browser.wait(
        async () => pageRegexp.test(await browser.getCurrentUrl()),
        ConfigConstants.WAIT_PAGE_TIMEOUT,
        PAGE_ERROR_MESSAGE
    );

    expect(await browser.getCurrentUrl()).to.match(pageRegexp);
});

Then(/^Text of "(.+)" element should be equal to "(.+)"$/, async (alias, expected) => {
    const expectedText = Memory.getValue(expected);
    const page = State.getPage();
    const element = page.getElement(alias);
    await browser.wait(
        ecHelper(element, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    const actualText = await element.getText();
    expect(actualText).to.equal(expectedText);
})
