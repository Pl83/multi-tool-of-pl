/**
 * Function to decrypt a string using the Fibonacci sequence
 * @param {string} encryptedString - The string to decrypt
 * @returns {string} - The decrypted string
 */

function fiboDecryption(encryptedString) {
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
 
    var encryptedChars = encryptedString.split('');
    var decryptedChars = [];
    var key = fibo(encryptedChars.length);
    //console.log(encryptedChars.length);
    //console.log(encryptedChars);
    //console.log(key);
 
    for (var i = 0; i < encryptedChars.length; i++) {
        //console.log(i);
        var char = encryptedChars[i];
        //console.log('charinit '+ char);
        var isUpperCase = char === char.toUpperCase();
        //console.log('isUpperCase '+ isUpperCase);
        var index = alphabet.indexOf(char.toLowerCase());
        //console.log('index '+ index);
        if (index === -1) {
            decryptedChars.push(char);
            //console.log('char '+ char);
        } else {
            var decryptedIndex = (index - key[i] + 26) % 26;

            //console.log('decryptedIndex '+ decryptedIndex, 'key[i] '+ key[i]);
            if (decryptedIndex < 0) {
                decryptedIndex = decryptedIndex + 26;
            }
 
            var decryptedChar = alphabet[decryptedIndex];
            let temp = isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
            decryptedChars.push(temp);
            //console.log('decryptedChar '+ temp);
        }
    }
    return decryptedChars.join('');
}

export default fiboDecryption;