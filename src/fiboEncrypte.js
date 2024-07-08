/**
 * Function to encrypt a string using fibonacci sequence
 * @param {string} string - The string to encrypt
 * @returns {string} - The encrypted string
 */

function fiboCryption(string) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
 
    function fibo(length) {
        var key = [0];
        var a = 0;    
        var b = 1;
        for (var i = 1; i < length; i++) {
            key.push(b);
            [a, b] = [b, a + b];
        }
        return key;
    }
 
    var chars = string.split('');
    var encryptedChars = [];
    var key = fibo(chars.length);
 
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var isUpperCase = char === char.toUpperCase();
        var index = alphabet.indexOf(char.toLowerCase());
 
        if (index === -1) {
            encryptedChars.push(char);
        } else {
            var encryptedIndex = (index + key[i]) % 26;
            var encryptedChar = alphabet[encryptedIndex];
            encryptedChars.push(isUpperCase ? encryptedChar.toUpperCase() : encryptedChar);
        }
    }
    return encryptedChars.join('');
}

export default fiboCryption;