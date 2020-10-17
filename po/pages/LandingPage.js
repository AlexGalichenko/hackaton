const BasePage = require("./BasePage");

class LandingPage extends BasePage {

    constructor() {
        super();

        this.defineElement({alias: "State Dropdown", selector: ".StateDropdown"});
    }
}

module.exports = LandingPage;
