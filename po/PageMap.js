const AbstractPageMap = require("@cucumber-e2e/po").PageMap;
const LandingPage = require("./pages/LandingPage");

class PageMap extends AbstractPageMap {

    constructor() {
        super();

        this.definePage("Landing", "covid19india.org/", new LandingPage());
    }

}

module.exports = PageMap;
