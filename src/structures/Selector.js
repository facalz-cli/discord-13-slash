class Selector {
    constructor(client, options) {
        this.client = client;
        this.name = options.name;
        this.requireDatabase = options.requireDatabase;
    };
};

module.exports = Selector;