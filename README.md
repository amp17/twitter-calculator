# Twitter Calculator
A twitter bot that recognizes and replies to simple mathematical expressions.

## Getting Started
To begin sign up for a twitter developers account.
Create an app to acquire the necessary keys to connect to the twitter API.  In the `config.js` replace the keys with your own.
```
module.exports = {
  consumer_key: '---',
  consumer_secret: '---',
  access_token: '---',
  access_token_secret: '---'
};
```

This bot uses the following npm packages.<br/>
`twit`
`mathjs`

## Installing
This bot is run on nodejs.
Begin by installing the dependencies by running the following commands
```
$ cd my_project_folder/
$ npm install
```

## Running

Once all dependencies are installed you should be able to run it by running the command
```
$ node bot.js
```
or
```
$ npm start
```
