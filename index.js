console.log('my application just ran');

const Moment = require('moment');

const a = new Moment();
console.log(a.format('h:mm:ss a'));

module.exports = a;

const myMod = require('./index.js')

