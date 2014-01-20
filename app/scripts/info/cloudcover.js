/* This file defines the function for getting the cloud cover info data.
 * Depends: info.js, utility.js
 * Used on: cloud cover info */

var infoClou = function(data) {
    /* Calculate the cloud cover info. */
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the cloud cover data.
    var clouData = Utility.getColumn(data, 6);
    dataCalc.push(["Most common cloud cover", Info.mode(clouData)]);
    var clouDays = Info.occur(clouData);
    dataCalc.push(["Sunny days", (clouDays.hasOwnProperty("Sunny") ? clouDays["Sunny"] : 0) + " days"]);
    dataCalc.push(["Mostly sunny days", (clouDays.hasOwnProperty("Mostly Sunny") ? clouDays["Mostly Sunny"] : 0) + " days"]);
    dataCalc.push(["Parly cloudy days", (clouDays.hasOwnProperty("Partly Cloudy") ? clouDays["Partly Cloudy"] : 0) + " days"]);
    dataCalc.push(["Mostly cloudy days", (clouDays.hasOwnProperty("Mostly Cloudy") ? clouDays["Mostly Cloudy"] : 0) + " days"]);
    dataCalc.push(["Cloudy days", (clouDays.hasOwnProperty("Cloudy") ? clouDays["Cloudy"] : 0) + " days"]);
    
    // Return the calculated data.
    return dataCalc;
};
