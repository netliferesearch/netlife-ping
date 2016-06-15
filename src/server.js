'use strict';

const five = require('johnny-five');
const board = new five.Board();
const bot = require('./bot');

board.on('ready', () => {
    /* @todo This doesn't scale, we should find a way to serialize the stuff*/
    const buttons = new five.Buttons([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const defaultMessage = 'Noen trykka på knappen (igjen)!';

    /* @todo Move to CONTENTFUL or something? */
    const usermap = [
        { pin: 3, handle: '#netlife-ping', message: 'trykka på den ene knappen' },
        { pin: 4, handle: '#netlife-ping', message: 'trykka på den andre knappen' },
    ];

    buttons.on('release', (e) => {
        const pin = e.pin;
        usermap.filter(u => u.pin === pin).map(u => bot.sendMessage(u.handle, u.message));
    });
    buttons.on('hold', () => {
        bot.sendMessage('#netlife-ping', 'noen holder på knappen');
    });
});
