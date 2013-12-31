/* This file defines functions for various tasks. */


var Utility = {

extractNumbers: function(data) {
    /* Extracts the numbers from the list items. */
    
    // Make a copy of the data. The original list should be unmodified.
    var numbers = data.slice(0);
    
    // Loop through the list, getting the numbers and converting them to floats.
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i].split(" ")[0]);
    }
    
    // Return the converted list.
    return numbers;
},

convertFloat: function(data) {
    /* Converts the list items to floats. */
    
    // Loop through the list, converting the items to floats.
    var numbers = [];
    for (var i = 0; i < data.length; i++) {
        
        // If the item is "None", skip it.
        if (data[i] != "None") {
            numbers.push(parseFloat(data[i]));
        }
    }
    
    // Return the converted list.
    return numbers;
},

getColumn: function(data, col) {
    /* Gets a column of the data. */
    
    // Loop through the list, getting the specified value and appending it to the new list.
    var column = [];
    for (var i = 0; i < data.length; i++) {
        column.push(data[i][col]);
    }
    
    // Return the column.
    return column;
},

splitList: function(data) {
    /* Splits the list items, and returns them as two lists. "None" is ignored. */
    
    // Make a copy of the data. The original list should be unmodified.
    var data2 = data.splice(0);
    
    // Create the new lists.
    var list1 = [];
    var list2 = [];
    
    // Loop through the list, splitting the items and adding them to the new lists.
    for (var i = 0; i < data2.length; i++) {
        
        // Split the item and append the first one.
        var iSplit = data2[i].split(" ");
        list1.push(iSplit[0])
        
        // If the second one is "None", append an empty string.
        if (data2[i] == "None") {
            list2.push("");
        } else {
        // Otherwise, append the second value.
            list2.push(iSplit[1]);
        }
    }
    
    // Return the new lists.
    return [list1, list2];
},

splitList2: function(data) {
    /* Splits the list items, and returns them as lists within the main one. "None" is ignored. */
    
    // Make a copy of the data. The original list should be unmodified.
    var data2 = data.slice(0);
    
    // Create the new list.
    var list = [];
    
    // Loop through the list, splitting the items and adding them to the new list.
    for (var i = 0; i < data2.length; i++) {
        
        // If the value is "None" don't split it, but use an empty string as the first value.
        if (data2[i] == "None") {
            list.push(["", "None"]);
        } else {
        // Otherwise, split the value.
            list.push(data2[i].split(" "));
        }
    }
    
    // Return the new list.
    return list;
},

noneToZero: function(data) {
    /* Changes any "None" value to "0" (zero). */
    
    // Create the new list.
    var list = [];
    
    // Loop through the list, and change values as needed.
    for (var i = 0; i < data.length; i++) {
        
        // If the value is "None", change it to "0".
        if (i == "None") {
            list.push("0");
        } else {
        // Otherwise, append it as is.
            list.push(data[i]);
        }
    }
    
    // Return the new list.
    return list;
}

}
