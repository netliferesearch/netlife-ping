'use strict';

const SpreadSheet = require('google-spreadsheet-reader');
const spreadSheet = new SpreadSheet('1geItk1iXyELsMgb76AH0Ze14juGdEu4mpx6RGjRmzCM');

module.exports = spreadSheet.load()
    .then(res => res)
    .catch(err => { console.error(err.message); });
