async function simulateOrientation(config) {
    const isRotated = config.type !== this.deviceSimulationParams.originalOrientation.type;
    this.deviceSimulationParams.chromiumConfig.width = isRotated ? this.deviceSimulationParams.originalHeight : this.deviceSimulationParams.originalWidth;
    this.deviceSimulationParams.chromiumConfig.height = isRotated ? this.deviceSimulationParams.originalWidth : this.deviceSimulationParams.originalHeight;
    this.deviceSimulationParams.chromiumConfig.screenOrientation = config;
    await this.driver.sendChromiumCommand('Emulation.setDeviceMetricsOverride', this.deviceSimulationParams.chromiumConfig);
}

module.exports = { simulateOrientation };
