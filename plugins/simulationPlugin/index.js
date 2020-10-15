// const { browser } = require('protractor');
const device = require('./device');
const { simulateDevice } = require('./simulateDevice');
const { simulateOrientation } = require('./simulateOrientation');
const { simulateGeoLocation } = require('./simulateGeoLocation');
const { resetSimulationParams } = require('./resetSimulationParams');

module.exports = {
    onPrepare() {
        browser.simulateDevice = simulateDevice;
        browser.simulateOrientation = simulateOrientation;
        browser.simulateGeoLocation = simulateGeoLocation;
        browser.resetSimulationParams = resetSimulationParams;
    },

    device
}
