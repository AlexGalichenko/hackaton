const BasePage = require("./BasePage");

class StateDetails extends BasePage {

    constructor() {
        super();

        this.defineElement({alias: "State Name Title", selector: ".state-name"});
        // Statistics Label`s Amounts
        this.defineElement({alias: "Confirmed Amount", selector: ".Level .is-confirmed h1"});
        this.defineElement({alias: "Active Amount", selector: ".Level .is-active h1"});
        this.defineElement({alias: "Recovered Amount", selector: ".Level .is-recovered h1"});
        this.defineElement({alias: "Deceased Amount", selector: ".Level .is-deceased h1"});
        this.defineElement({alias: "Total Tested", selector: ".header-right h2"});
    }
}

module.exports = StateDetails;
