***REMOVED***

const five = require('johnny-five');
const board = new five.Board();
const bot = require('./bot');

board.on('ready', () => {
    const buttons = new five.Buttons([2, 3, 4]);
    const message = "Heisann, du har besøk!";

    buttons.on('release', () => {
        bot.sendMessage('@bergen', message);
    ***REMOVED***

    const users = {
        button1: { pin: 3, value: '@dataknut' },
        button2: { pin: 4, value: '@netlife-ping' },
    ***REMOVED***
***REMOVED***
