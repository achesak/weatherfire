/* This file defines the function for getting the temperature info data.
 * Depends: info.js, utility.js
 * Used on: temperature info */

var infoTemp = function(data) {
    /* Calculate the temperature info. */
    
    // Get the options.
    var options = getOptions();
    
    // Set the units.
    if (options.units == "metric") {
        var units = {"temp": "°C",
                     "prec": "cm",
                     "wind": "kph",
                     "airp": "hPa"};
    } else {
        var units = {"temp": "°F",
                     "prec": "in",
                     "wind": "mph",
                     "airp": "mbar"};
    }
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the temperature data.
    var tempData = Utility.convertFloat(Utility.getColumn(data, 1));
    dataCalc.push(["Lowest temperature", Utility.round(Math.min.apply(Math, tempData)) + " " + units["temp"]]);
    dataCalc.push(["Highest temperature", Utility.round(Math.max.apply(Math, tempData)) + " " + units["temp"]]);
    dataCalc.push(["Average temperature", Utility.round(Info.mean(tempData)) + " " + units["temp"]]);
    dataCalc.push(["Median temperature", Utility.round(Info.median(tempData)) + " " + units["temp"]]);
    dataCalc.push(["Range of temperatures", Utility.round(Info.range(tempData)) + " " + units["temp"]]);
    dataCalc.push(["Most common temperature", Utility.round(Info.mode(tempData)) + " " + units["temp"]]);
    
    // Return the calculated data.
    return dataCalc;
};
