***REMOVED***

var Botkit = require('botkit');

var controller = Botkit.slackbot({
***REMOVED***
    json_file_store: './log/'
***REMOVED***

controller.spawn({
    token: 'xoxb-28007416230-JETtxLqsFhuKGH6d71cZM1b0'
}).startRTM();
