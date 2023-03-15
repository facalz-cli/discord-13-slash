const Button = require('../../structures/Button')

module.exports = class extends Button {
    constructor(client) {
        super(client, {
            name: 'test'
        });
    };

    run = async (interaction) => {

        //this is the code for the button

        console.log(1)

    };
};