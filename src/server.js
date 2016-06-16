'use strict';

const five = require('johnny-five');
const board = new five.Board();
const bot = require('./bot');
const userData = require('./data');

const usermap = () => userData.then(res => res[1]);

usermap().then(users => {
    board.on('ready', () => {
        /* @todo This doesn't scale, we should find a way to serialize the stuff*/
        const buttons = new five.Buttons([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        buttons.on('release', (e) => {
            users.filter(u => u.pin === e.pin).map(u => bot.sendMessage(u.handle, u.message));
        });
        buttons.on('hold', () => {
            bot.sendMessage('#netlife-ping', 'noen holder på knappen');
        });
    });
}).catch(err => console.log(err.message));
