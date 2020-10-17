const {Given} = require("cucumber");
const Memory = require("@cucumber-e2e/memory").Memory;
const {getData} = require("./../steps/helpers/apiFunctions/apiFunctions");
const {expect} = require('chai');

Given(/^Get data from "(.+)" and saves it as "(.+)"$/, async function(keyToUrlInComputedMap, keyForDataInMemory) {
    const endpoint = Memory.getValue(keyToUrlInComputedMap);
    const responseBody = await getData(endpoint);
    expect(responseBody).to.be.an('object').that.to.not.be.empty;
    Memory.setValue(keyForDataInMemory, responseBody);
});