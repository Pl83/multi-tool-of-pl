/**  
* Function to calculate the average of an array of numbers
* @param {array} array - An array of numbers
* @returns {number} - The average of the array of numbers
*/

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

export default average;