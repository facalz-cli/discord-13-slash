const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../.env') });

const Client = require('./structures/Client');

const client = new Client();

client.login(process.env.TOKEN);