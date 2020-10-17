const { ConstantMap } = require("@cucumber-e2e/memory");

class CovidIndiaConstantMap extends ConstantMap {
    constructor() {
        super();
        this.defineConstant("APP_URL", "https://www.covid19india.org/");
    }
}

module.exports = CovidIndiaConstantMap;
