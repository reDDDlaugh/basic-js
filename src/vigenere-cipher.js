const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(type) {
    this.type = type;
  }

  encrypt(encryptString, key) {

    if (!encryptString || !key) {
      throw new Error("Incorrect arguments!");
    }

    let regexp = /[A-Z]/i;
    let index = -1;
    let alphabetLength = 26;
    let length = encryptString.split('').filter(cV => cV.match(regexp)).length;

    key = key
            .repeat(Math.ceil(length / key.split('').length))
            .toUpperCase()
            .split('')
            .splice(0, length);

    encryptString = encryptString
                      .toUpperCase()
                      .split('')
                      .map(cV => {
                        if (cV.match(regexp)) {
                          index += 1;
                          return String.fromCharCode((cV.charCodeAt() - 65 + (key[index].charCodeAt() - 65)) % alphabetLength + 65);
                        } else {
                          return cV;
                        }
                      });

    return this.type === false ? encryptString.reverse().join('') : encryptString.join('');
  }

  decrypt(decryptString, key) {

    if (!decryptString || !key) {
      throw new Error("Incorrect arguments!");
    }

    let regexp = /[A-Z]/i;
    let index = -1;
    let alphabetLength = 26;
    let length = decryptString.split('').filter(cV => cV.match(regexp)).length;

    key = key
            .repeat(Math.ceil(length / key.split('').length))
            .toUpperCase()
            .split('')
            .splice(0, length);

    decryptString = decryptString
                      .split('')
                      .map(cV => {
                        if (cV.match(regexp)) {
                          index += 1;
                          let charCode = (cV.charCodeAt() - (key[index].charCodeAt())) % alphabetLength + 65;
                          if (charCode < 65) charCode += alphabetLength;
                          return String.fromCharCode(charCode);
                        } else {
                          return cV;
                        }
                      });
    return this.type === false ? decryptString.reverse().join('') : decryptString.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
