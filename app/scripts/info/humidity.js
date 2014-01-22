/* This file defines the function for getting the humidity info data.
 * Depends: info.js, utility.js
 * Used on: humidity info */

var infoHumi = function(data) {
    /* Calculate the humidity info. */
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the humidity data.
    var humiData = Utility.convertFloat(Utility.getColumn(data, 4));
    dataCalc.push(["Lowest humidity", Utility.round(Math.min.apply(Math, humiData)) + "%"]);
    dataCalc.push(["Highest humidity", Utility.round(Math.max.apply(Math, humiData)) + "%"]);
    dataCalc.push(["Average humidity", Utility.round(Info.mean(humiData)) + "%"]);
    dataCalc.push(["Median humidity", Utility.round(Info.median(humiData)) + "%"]);
    dataCalc.push(["Range of humidity", Utility.round(Info.range(humiData)) + "%"]);
    dataCalc.push(["Most common humidity", Utility.round(Info.mode(humiData)) + "%"]);
    
    // Return the calculated data.
    return dataCalc;
};
