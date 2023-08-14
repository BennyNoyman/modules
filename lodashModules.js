const _ = require("lodash");
function uniqFive(data) {
    data = _.words(data);
    data = _.uniq(data);
    data = data.filter(word => word.length > 5);
    data = data.join(' ');
    console.log(data);
    console.log(data.length);
    return data;
}
function printUniq(data) {
    data = _.words(data);
    data = _.uniq(data);
    data = data.join(' ');
    console.log(data);
    console.log(data.length);

}
function printReverse(data) {
    data = data.split(' ');
    data = _.reverse(data);
    data = data.join(' ');
    console.log(data);
}
function countVowels(data) {
    data = _.words(data);
    data = _.uniq(data);
    const countVowels = data.map(word => {
        let counter = 0;
        for (const char of word) {
            if ("aeiou".includes(char)) counter++;
        }
        return {word, counter};
    })
    console.log(countVowels);
    return countVowels;
}

module.exports = {
    printUniq,
    printReverse,
    uniqFive,
    countVowels
}