'use strict';

const Botkit = require('botkit');

const controller = Botkit.slackbot({
    debug: false,
    json_file_store: './log/',
});

const bot = controller.spawn({
    incoming_webhook: {
        url: 'https://hooks.slack.com/services/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',
    },
});

bot.sendWebhook({
    text: 'Ojoj, du har besøk i resepsjonen!',
    channel: '@dataknut',
    username: 'netlife-ping',
    icon_emoji: ':anders:',
}, (err) => {
    if (err) {
        console.log(err);
    }
});
