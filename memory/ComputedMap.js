const {ComputedMap} = require("@cucumber-e2e/memory");
const {Memory} = require("@cucumber-e2e/memory");

class CovidIndiaComputedMap extends ComputedMap {
    constructor() {
        super();

        this.defineComputed(/^GET_TOP_COVID_STATE\((.+)\)$/, (stateName, prop) => {
            const state = Memory.getValue(stateName);
            const data = Memory.getValue("$STATE_DISTRICTS_WISE_DATA");
            const propName = prop.toLowerCase();
            const totals = Object.values(data[state].districtData).reduce((total, dataItem) => {
                total[propName] += dataItem[propName];
                return total
            }, {state, [propName]: 0});
            return totals[propName].toLocaleString('en-IN')
        });
    }
}

module.exports = CovidIndiaComputedMap;
