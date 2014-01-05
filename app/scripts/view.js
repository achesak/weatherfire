/* This file defines the function for displaying all the data.
 * Depends: jQuery, jQuery Mobile, storage.js
 * Used on: main screen */

var viewData = function() {
    /* Displays the data. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the current data as JSON, or create a new set of data if it doesn't already exist.
    if (!dataStorage.has("weatherData")) {
        var data = [];
    } else {
        var data = dataStorage.getJSON("weatherData");
    }        
    
    // Clear any existing data. (Is this step necessary?)
    $("#listview").empty();
        
    // Loop through all the data items and add them.
    for (var i = 0; i < data.length; i++ ) {
        
        // Create the new item.
        var item = $("<li/>").append($("<h3/>", {text: data[i][0]}));
        var para = $("<p/>");
        
        // Create the data string.
        var dataStr = "Temperature (°C): " + (Math.round(parseFloat(data[i][1]) * 100) / 100) + "<br />";
        if (data[i][2] == "None") {
            dataStr += "Precipitation (cm): None<br />";
        } else {
            split2 = data[i][2].split(" ");
            dataStr += "Precipitation (cm): " + (Math.round(parseFloat(split2[0]) * 100) / 100) + " " + split2[1] + "<br />";
        }
        if (data[i][3] == "None") {
            dataStr += "Wind (kph): None<br />";
        } else {
            split3 = data[i][3].split(" ");
            dataStr += "Wind (kph): " + (Math.round(parseFloat(split3[0]) * 100) / 100) + " " + split3[1] + "<br />";
        }
        dataStr += "Humidity (%): " + data[i][4] + "<br />";
        split5 = data[i][5].split(" ");
        dataStr += "Air pressure (hPa): " + (Math.round(parseFloat(split5[0]) * 100) / 100) + " " + split5[1] + "<br />";
        dataStr += "Cloud cover: " + data[i][6];
        
        // Add the data string.
        para.html(dataStr);
        // Append the data.
        item.append(para);
        // Insert the data.
        $("#listview").append(item);
        $("#listview").listview("refresh");
    }
        
};
