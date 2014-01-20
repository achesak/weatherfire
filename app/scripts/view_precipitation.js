/* This file defines the function for displaying the precipitation info.
 * Depends: jQuery, jQuery Mobile, storage.js, utility.js, info.js, precipitation.js
 * Used on: precipitation info */

var viewPrec = function() {
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
        $("#nodataPrec").show();
    
        // Clear any existing data. (Is this step necessary?)
        $("#precInfo").empty();
        
        return;
    }
    
    // Get the info.
    var dataCalc = infoPrec(data);
    
    // Make sure the no data message is shown by default (I hate this shit).
    $("#nodataPrec").show();
    
    // Clear any existing data. (Is this step necessary?)
    $("#precInfo").empty();
    
    // Loop through all the data items and add them.
    for (var i = 0; i < dataCalc.length; i++) {
        
        // Hide the no data message.
        $("#nodataPrec").hide();
        
        // Create the new item.
        var item = $("<li/>").append($("<h3/>", {text: dataCalc[i][0]}));
        var para = $("<p/>").append(dataCalc[i][1]).css("padding-left", "30px");
        
        // Append the data.
        item.append(para);
        // Insert the data.
        $("#precInfo").append(item);
        $("#precInfo").listview("refresh");
    }
        
};
