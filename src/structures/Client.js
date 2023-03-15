const { Client } = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = class extends Client {
    constructor(options) {
        super({
            intents: 42871,
            partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
            disableMentions: 'everyone'
        });

        this.commands = [];
        this.buttons = [];
        this.modals = [];
        this.selectors = [];
        this.loadCommands();
        this.loadEvents();
        this.loadButtons();
        this.loadModals();
        this.loadSelectors();
    };

    registryCommands() {
        this.application.commands.set(this.commands);
    };

    loadCommands() {
        const categories = readdirSync(__dirname + '/../commands');

        for (const category of categories) {
            const commands = readdirSync(__dirname + `/../commands/${category}`);

            for (const command of commands) {
                const commandClass = require(join(__dirname + `/../commands/${category}/${command}`));
                const cmd = new (commandClass)(this);

                this.commands.push(cmd);
            };
        };
    };

    loadEvents() {
        const categories = readdirSync(__dirname + '/../events');

        for (const category of categories) {
            const events = readdirSync(__dirname + `/../events/${category}`);

            for (const event of events) {
                const eventClass = require(join(__dirname + `/../events/${category}/${event}`));
                const evt = new (eventClass)(this);

                this.on(evt.name, evt.run);
            };
        };
    };

    loadButtons() {
        const buttons = readdirSync(__dirname + "/../utils/buttons");

        for (const button of buttons) {
            const buttonClass = require(__dirname + `/../utils/buttons/${button}`);
            const btn = new (buttonClass)(this);

            this.buttons.push(btn);

            console.log(btn.name)
        };
    };

    loadModals() {
        const modals = readdirSync(__dirname + "/../utils/modals");

        for (const modal of modals) {
            const modalClass = require(__dirname + `/../utils/modals/${modal}`);
            const mdl = new (modalClass)(this);

            this.modals.push(mdl);
        };
    };

    loadSelectors() {
        const selectors = readdirSync(__dirname + "/../utils/selectors");

        for (const selector of selectors) {
            const selectorClass = require(__dirname + `/../utils/selectors/${selector}`);
            const sel = new (selectorClass)(this);

            this.selectors.push(sel);
        };
    };

};