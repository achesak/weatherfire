/* This file defines the function for getting the temperature info data.
 * Depends: info.js, utility.js
 * Used on: temperature info */

var infoTemp = function(data) {
    /* Calculate the temperature info. */
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the temperature data.
    var tempData = Utility.convertFloat(Utility.getColumn(data, 1));
    dataCalc.push(["Lowest temperature", Utility.round(Math.min.apply(Math, tempData)) + " °C"]);
    dataCalc.push(["Highest temperature", Utility.round(Math.max.apply(Math, tempData)) + " °C"]);
    dataCalc.push(["Average temperature", Utility.round(Info.mean(tempData)) + " °C"]);
    dataCalc.push(["Median temperature", Utility.round(Info.median(tempData)) + " °C"]);
    dataCalc.push(["Range of temperatures", Utility.round(Info.range(tempData)) + " °C"]);
    dataCalc.push(["Most common temperature", Utility.round(Info.mode(tempData)) + " °C"]);
    
    // Return the calculated data.
    return dataCalc;
};
