/* This file defines the function for getting the wind info data.
 * Depends: info.js, utility.js
 * Used on: wind info */

var infoWind = function(data) {
    /* Calculate the wind info. */
    
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
    
    // Get the wind data.
    var windData = Utility.splitList(Utility.getColumn(data, 3));
    var windData1 = Utility.convertFloat(Utility.noneToZero(windData[0]));
    if (windData1.length == 0) {
        windData1.push(0);
    }
    dataCalc.push(["Lowest wind speed", Utility.round(Math.min.apply(Math, windData1)) + " " + units["wind"]]);
    dataCalc.push(["Highest wind speed", Utility.round(Math.max.apply(Math, windData1)) + " " + units["wind"]]);
    dataCalc.push(["Average wind speed", Utility.round(Info.mean(windData1)) + " " + units["wind"]]);
    dataCalc.push(["Median wind speed", Utility.round(Info.median(windData1)) + " " + units["wind"]]);
    dataCalc.push(["Range of wind speeds", Utility.round(Info.range(windData1)) + " " + units["wind"]]);
    dataCalc.push(["Most common wind speed", Utility.round(Info.mode(windData1)) + " " + units["wind"]]);
    
    // Return the calculated data.
    return dataCalc;
};
