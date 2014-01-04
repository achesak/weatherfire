/* Function to test if a value is a number.
 * credit to http://stackoverflow.com/a/1830844 */

function isNumber(n) {
    if ((n.toString().match(/\./g) || []).length > 1) {
        return false;
    }
    return !isNaN(parseFloat(n)) && isFinite(n);
}
