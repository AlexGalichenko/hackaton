const BasePage = require("./BasePage");

class GoogleHomePage extends BasePage {

    constructor() {
        super();

        this.defineElement({alias: "Search Input", selector: "input.gLFyf.gsfi"});
        this.defineCollection({alias: "Search Suggestions", selector: ".suggestions-inner-container [role=option]"});
    }
}

module.exports = GoogleHomePage;