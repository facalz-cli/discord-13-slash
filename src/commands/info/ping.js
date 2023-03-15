const Command = require('../../structures/Command');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Check the bot\'s latency',
            permission: ['NONE'],
        });
    };

    run = (interaction) => {

        interaction.reply({ content: `🏓 Pong! My latency: **${Math.round(this.client.ws.ping)} ms**` });
        
    };
};