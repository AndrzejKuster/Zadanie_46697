const { getRandomNumber,
    generateRandomString,
    generateRandomIntArray } = require('./randoms/randoms');

console.log(getRandomNumber(2, 10));
console.log(generateRandomString(9));
console.log(generateRandomIntArray(1, 10, 5))

