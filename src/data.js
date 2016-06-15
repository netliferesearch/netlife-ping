***REMOVED***

const SpreadSheet = require('google-spreadsheet-reader');
const spreadSheet = new SpreadSheet('1geItk1iXyELsMgb76AH0Ze14juGdEu4mpx6RGjRmzCM');

const loadData = spreadSheet.load()
    .then(res => res)
    .catch(err => { console.error(err.message); ***REMOVED***

module.exports = loadData;
