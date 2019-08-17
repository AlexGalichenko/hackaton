const BasePage = require("./BasePage");

class GoogleHomePage extends BasePage {

    constructor() {
        super();

        this.defineElement({alias: "Search Input", selector: "input.gLFyf.gsfi"});
    }
}

module.exports = GoogleHomePage;