/* This file defines the function for getting the wind info data.
 * Depends: info.js, utility.js
 * Used on: wind info */

var infoWind = function(data) {
    /* Calculate the wind info. */
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the wind data.
    var windData = Utility.splitList(Utility.getColumn(data, 3));
    var windData1 = Utility.convertFloat(Utility.noneToZero(windData[0]));
    if (windData1.length == 0) {
        windData1.push(0);
    }
    dataCalc.push(["Lowest wind speed", Math.min.apply(Math, windData1) + " kph"]);
    dataCalc.push(["Highest wind speed", Math.max.apply(Math, windData1) + " kph"]);
    dataCalc.push(["Average wind speed", Info.mean(windData1) + " kph"]);
    dataCalc.push(["Median wind speed", Info.median(windData1) + " kph"]);
    dataCalc.push(["Range of wind speeds", Info.range(windData1) + " kph"]);
    dataCalc.push(["Most common wind speed", Info.mode(windData1) + " kph"]);
    
    // Return the calculated data.
    return dataCalc;
};
