console.log('Bot starting');

const Twit = require('twit');
const math = require('mathjs');
const config = require('./config.js');

const T = new Twit(config);

const regex = /\d+(\.\d+)?([+-/*^]\d+(\.\d+)?)*/g;

const stream = T.stream('user');
stream.on('tweet', tweet);

function tweet(msg) {
  if (msg.in_reply_to_screen_name === 'twit_calc' && msg.user.screen_name !== 'twit_calc') {
    console.log('Got message');
    const txt = msg.text.replace(/\s+/g, '');
    const expr = txt.match(regex).join('');
    const user = msg.user.screen_name;
    const id = msg.id;
    if (expr) reply(`@${user} ${expr} = ${math.eval(expr)}`, id);
    else reply(`@${user} expression not valid`, id);
  }
}

function reply(msg, id) {
  const tweet = {
    status: msg,
    in_reply_to_status_id: id
  }
  T.post('statuses/update', tweet, (err, data, response) => {
    if (!err) console.log(`Posted message ${msg}`);
    else console.log(err);
  });
}
