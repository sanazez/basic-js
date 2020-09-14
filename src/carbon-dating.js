const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(string) {
    if (typeof string == 'string') {
        let number = parseFloat(string);
        if (number < MODERN_ACTIVITY && number > 0) {
            let time = Math.ceil(Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD));
            return time;
        } else return false;
    } else return false;
    // remove line with error and write your code here
}