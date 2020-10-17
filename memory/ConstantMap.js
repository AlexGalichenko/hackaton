const {ConstantMap} = require("@cucumber-e2e/memory");

class CovidIndiaConstantMap extends ConstantMap {
    constructor() {
        super();
        this.defineConstant("APPLICATION_START_PAGE", "https://www.covid19india.org/");
        this.defineConstant("STATE_DISTRICTS_WISE_ENDPOINT", "https://api.covid19india.org/state_district_wise.json")
    }
}

module.exports = CovidIndiaConstantMap;
