const Modal = require('../../structures/Modal');

module.exports = class extends Modal {
    constructor(client) {
        super(client, {
            name: 'test'
        });
    };

    run = async (interaction) => {

        //this is the code for the modal

    };
};