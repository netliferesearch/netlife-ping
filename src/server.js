***REMOVED***

const five = require('johnny-five');
const board = new five.Board();
const bot = require('./bot');

board.on('ready', () => {
    const button = new five.Button(2);

    button.on('release', () => {
        bot.sendMessage();
    ***REMOVED***
***REMOVED***
