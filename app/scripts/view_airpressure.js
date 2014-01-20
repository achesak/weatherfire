/* This file defines the function for displaying the air pressure info.
 * Depends: jQuery, jQuery Mobile, storage.js, utility.js, info.js, airpressure.js
 * Used on: humidity info */

var viewAirp = function() {
    /* Displays the info. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the current data as JSON, or create a new set of data if it doesn't already exist.
    if (!dataStorage.has("weatherData")) {
        var data = [];
    } else {
        var data = dataStorage.getJSON("weatherData");
    }
    
    // If there is no data, don't continue.
    if (data.length == 0) {
        
        // Make sure the no data message is shown.
        $("#nodataAirp").show();
    
        // Clear any existing data. (Is this step necessary?)
        $("#airpInfo").empty();
        
        return;
    }
    
    // Get the info.
    var dataCalc = infoAirp(data);
    
    // Make sure the no data message is shown by default (I hate this shit).
    $("#nodataAirp").show();
    
    // Clear any existing data. (Is this step necessary?)
    $("#airpInfo").empty();
    
    // Loop through all the data items and add them.
    for (var i = 0; i < dataCalc.length; i++) {
        
        // Hide the no data message.
        $("#nodataAirp").hide();
        
        // Create the new item.
        var item = $("<li/>").append($("<h3/>", {text: dataCalc[i][0]}));
        var para = $("<p/>").append(dataCalc[i][1]).css("padding-left", "30px");
        
        // Append the data.
        item.append(para);
        // Insert the data.
        $("#airpInfo").append(item);
        $("#airpInfo").listview("refresh");
    }
        
};
