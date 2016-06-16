'use strict';
require('dotenv').config();
const Botkit = require('botkit');

const controller = Botkit.slackbot({
    debug: false,
    json_file_store: './log/',
});

const bot = controller.spawn({
    incoming_webhook: {
        url: process.env.SLACK_WEBHOOK,
    },
});

const sendMessage = (user, message) => {
    bot.sendWebhook({
        text: message,
        channel: user,
        username: 'netlife-ping',
        icon_emoji: ':anders:',
    }, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('Message sent to Slack');
    });
};

module.exports = { sendMessage };
