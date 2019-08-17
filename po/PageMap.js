const AbstractPageMap = require("@cucumber-e2e/po").PageMap;
const GoogleHomePage = require("./pages/GoogleHomePage");
const GoogleResultsPage = require("./pages/GoogleResultsPage");

class PageMap extends AbstractPageMap {

    constructor() {
        super();

        this.definePage("Google Home", "^.+google\.com", new GoogleHomePage());
        this.definePage("Google Results", "^.+\/search", new GoogleResultsPage());
    }

}

module.exports = PageMap;
