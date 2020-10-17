const BasePage = require("./BasePage");
const StatisticsTable = require("../components/landing/StatisticsTable");

class LandingPage extends BasePage {

    constructor() {
        super();

        this.defineElement({alias: "State Dropdown", selector: ".StateDropdown"});
        this.defineComponent({alias: "Statistics Table", component: new StatisticsTable()})
    }
}

module.exports = LandingPage;
