import average from './src/average.js';
import median from './src/median.js';
import fiboCryption from './src/fiboEncrypte.js';
import fiboDecryption from './src/fiboDecrypte.js';

console.log(average([1, 2, 3, 4, 5, 6, 7])); // 4

console.log(median([1, 2, 3, 4, 5, 6])); // 3.5

console.log(fiboCryption('hello')); // hfmnr

console.log(fiboDecryption('hfmnr')); // hello