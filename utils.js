function printData(data) {
    console.log(data)
}
function printLen(data) {
    console.log(data.length)
}
function printCapital(data) {
    data = data.toUpperCase();
    console.log(data);
    return data;
}
module.exports = {
    printData,
    printLen,
    printCapital
}