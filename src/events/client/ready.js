const Event = require('../../structures/Event');

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        });
    };

    run = async () => {

        console.log(`${this.client.user.tag} is now online in ${this.client.guilds.cache.size} guilds`);

        this.client.registryCommands();
        
    };
};