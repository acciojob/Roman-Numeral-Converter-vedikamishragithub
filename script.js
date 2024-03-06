function convertToRoman(num) {
    const obj = {
        0:['M',1000], 
        1:['CM',900],
        2:['D', 500], 
        3:['CD',400],
        4:['C', 100], 
        5:['XC',90],
        6:['L', 50], 
        7:['XL',40],
        8:['X', 10], 
        9:['IX',9],
        10:['V', 5], 
        11:['IV',4],
        12:['I', 1]
    };
    let result = '';
    // Iterate over the object in descending order
    for (let i = 0; i < Object.keys(obj).length; i++) {
        // While the number is greater than or equal to the value
        while (num >= obj[i][1]) {
            // Subtract the value from the number
            num -= obj[i][1];
            // Add the symbol to the result
            result += obj[i][0];
        }
    }
    return result;
}
module.exports = convertToRoman