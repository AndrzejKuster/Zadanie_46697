function getRandomNumber(min, max) {
    // console.log(min,max);

    if (min >= max) {
        throw new Error('Invalid range! Max should be greater then min!');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateRandomString(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}


function generateRandomIntArray(min, max, length) {

    const randomIntArray = [];

    for (let i = 0; i < length; i++) {
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        randomIntArray.push(randomInt);
    }
    return randomIntArray;
}


module.exports = {
    getRandomNumber: getRandomNumber,
    generateRandomString: generateRandomString,
    generateRandomIntArray: generateRandomIntArray
};