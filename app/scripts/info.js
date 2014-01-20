/* This file defines functions used for getting the data. */

var Info = {

mean: function(numbers) {
    /* Finds the mean of a list of numbers. */
    
    // Add the numbers.
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    
    // Divide by the length of the list.
    return total / numbers.length;
},

median: function(numbers2) {
    /* Finds the median of a list of numbers. */
    
    // Make a copy of the data. The original list should be unmodified.
    var numbers = numbers2.slice(0);
    
    // Sort the list.
    numbers.sort(function(a, b) {
        return a - b;
    });
    
    // If the list has an odd number of items:
    if (numbers.length % 2) {
        return numbers[parseInt(Math.floor(numbers.length / 2))];
    } else {
    // If the list has an even number of items:
        return (numbers[numbers.length / 2] + numbers[(numbers.length / 2) - 1]) / 2;
    }
},

range: function(numbers) {
    /* Finds the range of a list of numbers. */
    
    // Calculate the range.
    return Math.max.apply(Math, numbers) - Math.min.apply(Math, numbers);
},

/* Based off Matthew Flaschen's answer on a Stack Overflow post:
 * http://stackoverflow.com/a/1053865 */
mode: function(array) {
    /* Finds the mode of a list of numbers. */
    
    var modeMap = {};
    var maxEl = array[0];
    var maxCount = 1;
    for (var i = 0; i < array.length; i++) {
    	var el = array[i];
    	if (modeMap[el] == null) {
    		modeMap[el] = 1;
    	} else {
    		modeMap[el]++;
        }
    	if (modeMap[el] > maxCount) {
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
},

/* Based off typeof's answer on a Stack Overflow post:
 * http://stackoverflow.com/a/5668029 */
occur: function(array) {
    /* Finds the number of each item in an array. */
    
    var counts = {};

    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        counts[num] = counts[num] ? counts[num]+1 : 1;
    }
    
    return counts;
}

};
