const {Given, When, Then} = require("cucumber");
const State = require("@cucumber-e2e/po").State;
const expect = require("chai").expect;
const ConfigConstants = require("./helpers/ConfigConstants");

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