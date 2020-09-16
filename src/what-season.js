const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (!date) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
    }
    let mongth = date.getMonth();
    if (mongth == 11 || mongth <= 1) return 'winter';
    if (mongth > 1 && mongth < 5) return 'spring';
    if (mongth > 4 && mongth < 8) return 'summer';
    if (mongth > 7 && mongth < 11) return 'autumn';




}