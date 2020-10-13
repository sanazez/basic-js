const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool;
    }
    encrypt(str, key) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (str && key) {
            str = str.toUpperCase();
            key = key.toUpperCase();
            let count = 0;
            let array = str.split(' ');
            let newArr = array.map((item) => {
                let result = '';
                for (let i = 0; i < item.length; i++) {
                    if (alphabet.indexOf(item[i]) != -1) {
                        let indexOne = alphabet.indexOf(item[i]);
                        if (!key[count]) count = 0;
                        let indexTwo = alphabet.indexOf(key[count]);
                        count++;
                        if ((indexOne + indexTwo) > 25) {
                            result += alphabet[indexOne + indexTwo - alphabet.length];
                        } else {
                            result += alphabet[indexOne + indexTwo];
                        }
                    } else result += item[i];
                }
                if (this.bool == false) {
                    result = result.split('').reverse().join('');
                }
                return result
            });
            if (this.bool == false) return newArr.reverse().join(' ');
            return newArr.join(' ');
        } else {
            throw new Error();
        }
    }
    decrypt(cypher, key) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (cypher && key) {
            key = key.toUpperCase();
            let arr = cypher.split(' ');

            let count = 0;
            let newArr = arr.map((item) => {
                let result = '';
                for (let i = 0; i < item.length; i++) {
                    if (!key[count]) count = 0;
                    let indexKey = alphabet.indexOf(key[count]);
                    if (alphabet.indexOf(item[i]) != -1) {
                        let indexCypher = alphabet.indexOf(item[i]);
                        count++;
                        let index = Math.abs(indexCypher + alphabet.length - indexKey);
                        if (index > 25) index = index - alphabet.length;
                        result += alphabet[index];
                    } else result += item[i];
                }
                if (this.bool == false) {
                    result = result.split('').reverse().join('');
                }
                return result;
            });
            if (this.bool == false) return newArr.reverse().join(' ');
            return newArr.join(' ');
        } else {
            throw new Error();
        }
    }
}


module.exports = VigenereCipheringMachine;