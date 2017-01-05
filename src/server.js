var Tessel = require('tessel-io');
var five = require('johnny-five');
var bot = require('./bot');
var users = require('./data');

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
    var buttons = new five.Buttons([0, 1, 2]);

    buttons.on('press', (e) => {
        users.filter(u => u.pin === e.pin).map(u => {
            bot.sendMessage(u.handle, u.message);
            setTimeout(() => {
                bot.sendMessage('#netlifer-ping', `${u.handle} har blitt ringt på`);
            }, 200);
        });
        // bot.sendMessage('#netlifer-ping', 'noen holder på knappen');
    });

});
