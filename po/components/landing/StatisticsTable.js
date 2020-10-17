const BaseComponent = require("../BaseComponent");

class StatisticsTable extends BaseComponent {

    constructor() {
        super({
            alias: "Statistics Table",
            selector: ".table.fadeInUp",
            isCollection: false
        });

        this.defineComponent({alias: "Rows", component: new Rows()});
    }

}

class Rows extends BaseComponent {
    constructor() {
        super({
            alias: "Rows",
            selector: ".row:not(.heading)",
            isCollection: true
        });

        this.defineElement({alias: "State Name", selector: ".cell:nth-child(1)"});
        this.defineElement({alias: "Confirmed", selector: ".cell:nth-child(2)"});
        this.defineElement({alias: "Active", selector: ".cell:nth-child(3)"});
        this.defineElement({alias: "Recovered", selector: ".cell:nth-child(4)"});
        this.defineElement({alias: "Deceased", selector: ".cell:nth-child(5)"});
        this.defineElement({alias: "Tested", selector: ".cell:nth-child(6)"});
    }
}

module.exports = StatisticsTable;
