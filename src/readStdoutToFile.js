const senderFetchReadings = require('./sender/sender');
var data = senderFetchReadings.getSenderReadings()

const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('output.txt'));
myConsole.log(data);

