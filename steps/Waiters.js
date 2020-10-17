const {Given, When, Then, setDefaultTimeout} = require("cucumber");
const State = require("@cucumber-e2e/po").State;
const expect = require("chai").expect;
const ConfigConstants = require("./helpers/ConfigConstants");
const {browser} = require("protractor");

When(/^User waits "(\d+)" second$/, async function(sec) {
    await browser.sleep(sec * 1000);
});
