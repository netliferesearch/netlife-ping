var fetch = require('node-fetch');

var url = 'https://hooks.slack.com/services/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';

var sendMessage = (user, message) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          text: message,
          channel: user,
          username: 'netlife-ping',
          icon_emoji: ':anders:',
      })
    })
    .then(function(data) {
        console.log('melding sendt');
    }).catch(function(error) {
        console.log('request failed', error);
    });
};

module.exports = { sendMessage };
