async function resetSimulationParams() {
    await this.driver.sendChromiumCommand('Emulation.clearDeviceMetricsOverride', {});
}

module.exports = { resetSimulationParams };
