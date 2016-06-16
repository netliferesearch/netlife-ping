'use strict';
require('dotenv').config();
const SpreadSheet = require('google-spreadsheet-reader');
const spreadSheet = new SpreadSheet(process.env.GOOGLE_SPREADSHEET_ID);

const loadData = spreadSheet.load()
    .then(res => res)
    .catch(err => { console.error(err.message); });

module.exports = loadData;
