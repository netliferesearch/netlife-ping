'use strict';

var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: false,
    json_file_store: './log/'
});

controller.spawn({
    token: 'xoxb-28007416230-JETtxLqsFhuKGH6d71cZM1b0'
}).startRTM();
