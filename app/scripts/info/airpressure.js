/* This file defines the function for getting the air pressure info data.
 * Depends: info.js, utility.js
 * Used on: air pressure info */

var infoAirp = function(data) {
    /* Calculate the air pressure info. */
    
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
    
    // Get the humidity data.
    var airpData = Utility.splitList(Utility.getColumn(data, 5));
    var airpData1 = Utility.convertFloat(airpData[0]);
    dataCalc.push(["Lowest air pressure", Utility.round(Math.min.apply(Math, airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Highest air pressure", Utility.round(Math.max.apply(Math, airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Average air pressure", Utility.round(Info.mean(airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Median air pressure", Utility.round(Info.median(airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Range of air pressures", Utility.round(Info.range(airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Most common air pressure", Utility.round(Info.mode(airpData1)) + " " + units["airp"]]);
    var airpTypes = Info.occur(airpData[1]);
    dataCalc.push(["Days of steady air pressure", (airpTypes.hasOwnProperty("Steady") ? airpTypes["Steady"] : 0) + " days"]);
    dataCalc.push(["Days of rising air pressure", (airpTypes.hasOwnProperty("Rising") ? airpTypes["Rising"] : 0) + " days"]);
    dataCalc.push(["Days of falling air pressure", (airpTypes.hasOwnProperty("Falling") ? airpTypes["Falling"] : 0) + " days"]);
    
    // Return the calculated data.
    return dataCalc;
};
