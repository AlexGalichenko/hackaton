const { ComputedMap } = require("@cucumber-e2e/memory");

class CovidIndiaComputedMap extends ComputedMap {
    constructor() {
        super();

        this.defineComputed(/^GET_TOP_COVID_STATE\((.+)\)$/, (i) => {
            return 42
        });
    }
}

module.exports = CovidIndiaComputedMap;
