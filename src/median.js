/** 
* function to calculate the median of an array of numbers
* @param {array} array - An array of numbers
* @returns {number} - The median of the array of numbers
*/

function median(array) {
    const sorted = array.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
}
  
export default median;