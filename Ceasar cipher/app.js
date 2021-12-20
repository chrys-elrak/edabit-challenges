/**
 * Encrypt message with rotation
 * @param {string} textValue 
 * @param {number} rotationValue 
 */
function caesarCipher(textValue, rotationValue) {
    console.log(textValue);
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    let res = '';
    for (let i = 0; i < textValue.length; i++) {
        const char = textValue[i];
        let index = alphabets.indexOf(char.toLowerCase());
        if (index === -1) {
            res += char;
        } else {
            if (!alphabets[index + rotationValue]) {
                index = 0;
            }
            const c = alphabets[index + rotationValue];
            res += /[a-z]/g.test(char) ? c : c.toUpperCase();
        }
    }
    return res;
}

console.log(caesarCipher('middle-Outz', 2));
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5));
// console.log(caesarCipher("A friend in need is a friend indeed", 20));

module.exports = caesarCipher;