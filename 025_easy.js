// 38. Count and Say

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1';
    for (let i = 1; i < n; i++) {
        result = stringParser(result);
    } 
    return result;
};

const stringParser = (str) => {
    let result = '';
    
    let current = 0; 
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const next = str[i+1];
        current++;
        if (!next || next !== char) {
            result += '' + current + char;
            current = 0;
        }
        
    }
    
    return result;
}

console.log(countAndSay(5), 111221);
