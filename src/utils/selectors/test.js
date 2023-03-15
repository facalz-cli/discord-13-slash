const Selector = require('../../structures/Selector')

module.exports = class extends Selector {
    constructor(client) {
        super(client, {
            name: 'test'
        })
    }
    run = async (interaction) => {

        //this is the code for the selector

    };
};