/* This file defines the function for getting the air pressure info data.
 * Depends: info.js, utility.js
 * Used on: air pressure info */

var infoAirp = function(data) {
    /* Calculate the air pressure info. */
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the humidity data.
    var airpData = Utility.splitList(Utility.getColumn(data, 5));
    var airpData1 = Utility.convertFloat(airpData[0]);
    dataCalc.push(["Lowest air pressure", Math.min.apply(Math, airpData1) + " hPa"]);
    dataCalc.push(["Highest air pressure", Math.max.apply(Math, airpData1) + " hPa"]);
    dataCalc.push(["Average air pressure", Info.mean(airpData1) + " hPa"]);
    dataCalc.push(["Median air pressure", Info.median(airpData1) + " hPa"]);
    dataCalc.push(["Range of air pressures", Info.range(airpData1) + " hPa"]);
    dataCalc.push(["Most common air pressure", Info.mode(airpData1) + " hPa"]);
    var airpTypes = Info.occur(airpData[1]);
    dataCalc.push(["Days of steady air pressure", (airpTypes.hasOwnProperty("Steady") ? airpTypes["Steady"] : 0) + " days"]);
    dataCalc.push(["Days of rising air pressure", (airpTypes.hasOwnProperty("Rising") ? airpTypes["Rising"] : 0) + " days"]);
    dataCalc.push(["Days of falling air pressure", (airpTypes.hasOwnProperty("Falling") ? airpTypes["Falling"] : 0) + " days"]);
    
    // Return the calculated data.
    return dataCalc;
};
