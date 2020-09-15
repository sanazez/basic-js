const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrayNames) {
    let arrFirstLetter = [];
    if (Array.isArray(arrayNames)) {
        for (let i = 0; i < arrayNames.length; i++) {
            if (arrayNames[i] && typeof arrayNames[i] == 'string') {
                let lettter = arrayNames[i].trim()[0].toUpperCase();
                arrFirstLetter.push(lettter);
            }
        }
        return arrFirstLetter.sort().join('');
    } else return false;
}