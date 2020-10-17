const AbstractPageMap = require("@cucumber-e2e/po").PageMap;
const LandingPage = require("./pages/LandingPage");

class PageMap extends AbstractPageMap {

    constructor() {
        super();

        this.definePage("Landing", "^.+google\.com", new LandingPage());
    }

}

module.exports = PageMap;
