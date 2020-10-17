const { Component } = require("@cucumber-e2e/po");

class BaseComponent extends Component {

    constructor(component) {
        super(component);
    }

}

module.exports = BaseComponent;
