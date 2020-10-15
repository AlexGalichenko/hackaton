async function simulateDevice(config) {
    this.deviceSimulationParams = {
        originalWidth: config.width,
        originalHeight: config.height,
        originalOrientation: config.orientation,
        chromiumConfig: {
            width: config.width,
            height: config.height,
            deviceScaleFactor: config.scaleFactor,
            mobile: true,
            screenOrientation: config.orientation
        },
        userAgentConfig: config.userAgentConfig
    };
    await this.driver.sendChromiumCommand('Emulation.clearDeviceMetricsOverride', {});
    await this.driver.sendChromiumCommand('Emulation.setDeviceMetricsOverride', this.deviceSimulationParams.chromiumConfig);
    await this.driver.sendChromiumCommand('Emulation.setUserAgentOverride', this.deviceSimulationParams.userAgentConfig);
}

module.exports = { simulateDevice };
