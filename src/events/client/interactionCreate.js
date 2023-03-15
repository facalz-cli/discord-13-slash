const Event = require('../../structures/Event');

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        });
    };

    run = async (interaction) => {
        if (interaction.isCommand()) {
            if (!interaction.guild) return interaction.reply({ content: 'This command can only be used in a my server.', ephemeral: true });

            const cmd = this.client.commands.find(c => c.name === interaction.commandName);

            if (!cmd) return interaction.followUp({ content: 'This command does not exist!' }) && this.client.cmd.delete(interaction.cmd).catch(() => { });

            if (cmd.permission) {
                const perms = interaction.channel.permissionsFor(interaction.member);

                cmd.permission.forEach(perm => {
                    if (!perms.has(perm)) return interaction.reply({ content: 'You do not have permission to use this command!', ephemeral: true });
                });

            };

            if (cmd) cmd.run(interaction);
        };

        if (interaction.isButton()) {
            const button = this.client.buttons.find(b => b.name === interaction.customId);

            if (button) button.run(interaction);
        };

        if (interaction.isModalSubmit()) {
            const modal = this.client.modals.find(m => m.name === interaction.customId);

            if (modal) modal.run(interaction);
        };

        if (interaction.isSelectMenu()) {
            const selector = this.client.selectors.find(s => s.name === interaction.customId);

            if (selector) selector.run(interaction);
        };

    };
};