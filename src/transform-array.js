const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArr = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                i++;
            } else if (arr[i] === '--discard-prev') {
                if (newArr.length !== 0 && arr[i - 2] !== '--discard-next') {
                    newArr.pop();
                }
            } else if (arr[i] === '--double-next') {
                newArr.push(arr[i + 1]);
            } else if (arr[i] === '--double-prev') {
                if (i !== 0 && arr[i - 2] !== '--discard-next') {
                    newArr.push(arr[i - 1]);
                }
            } else {
                newArr.push(arr[i]);
            }
        };
    } else {
        throw new Error();
    }
    return newArr.filter(e => e !== undefined);
}