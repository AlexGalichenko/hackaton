const AbstractPageMap = require("@cucumber-e2e/po").PageMap;
const LandingPage = require("./pages/LandingPage");
const StateDetail = require("./pages/StateDetails");

class PageMap extends AbstractPageMap {

    constructor() {
        super();

        this.definePage("Landing", "covid19india.org/", new LandingPage());
        this.definePage("State Details", "covid19india.org/state/.+", new StateDetail());
    }
}

module.exports = PageMap;
