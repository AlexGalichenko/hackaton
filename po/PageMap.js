const AbstractPageMap = require("@cucumber-e2e/po").PageMap;
const GoogleHomePage = require("./pages/GoogleHomePage");

class PageMap extends AbstractPageMap {

    constructor() {
        super();

        this.definePage("Google Home", `^.+google\.com`, new GoogleHomePage());
    }

}

module.exports = PageMap;
