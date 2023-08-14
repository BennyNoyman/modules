const utils = require('./utils');
const lodash = require('./lodashModules');
const fs = require('fs');
const {countVowels, uniqFive} = require("./lodashModules");
const {printCapital} = require("./utils");
fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    utils.printData(data);
    utils.printLen(data);
    lodash.printReverse(data);
    lodash.printUniq(data);
    utils.printCapital(data);
    lodash.uniqFive(data);
    lodash.countVowels(data);
    const results = printCapital(data)+"\n"+uniqFive(data)+"\n"+JSON.stringify(countVowels(data));
    fs.writeFile('results.txt', results, err => {
        if (err) throw err;
    })
})