/* This file defines the function for adding more data. 
 * Depends: jQuery, jQuery Mobile, storage.js
 * Used on: Add */

var addRow = function() {
    /* Add a row of data. */
    
    // Get all the values.
    var date = $("#date").val();
    var temp = $("#temp").val();
    var prec = $("#prec").val();
    var precType = $("#precType").val();
    var wind = $("#wind").val();
    var windDir = $("#windDir").val().toUpperCase();;
    var humidity = $("#humidity").val();
    var airPressure = $("#airPressure").val();
    var airPressureChange = $("#airPressureChange").val();
    var cloudCover = $("#cloudCover").val();
    
    // TODO: validate the data:
    // prec should be only digits and at most one period, and not negative. 0 as prec should set the type to None
    // wind should be only digits and at most one period, and not negative. 0 as wind should set the direction to None
    // airPressure should be only digits and at most one period, and not negative
    
    // TODO: show a dialog if anything is wrong, and don't continue BUT stay on the current screen.
    
    // Parse the date into the desired format. Weatherfox uses "dd/mm/yyyy", but Firefox OS inputs date as "yyyy-mm-dd".
    // TODO: parse the date for iOS devices as well. The format used is "Month Number, Year". Ex: "Jan 1, 2014".
    var dateSplit = date.split("-");
    date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
    /*
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the current data as JSON, or create a new set of data if it doesn't already exist.
    if (!dataStorage.has("weatherData")) {
        var data = [];
    } else {
        var data = dataStorage.getJSON("weatherData");
    }
    
    // Create the new array.
    var row = [];
    
    // Add the data to the row, formatting and grouping as needed.
    row[0] = date;
    row[1] = temp.toString;;
    if (precType == "None") {
        row[2] = precType;
    } else {
        row[2] = prec + " " + precType;
    }
    if (windDir == "None") {
        row[3] = windDir;
    } else {
        row[3] = wind + " " + windDir;
    }
    row[4] = humidity.toString();
    row[5] = airPressure + " " + airPressureChange;
    row[6] = cloudCover;
    
    // Add the row to the data and save the data.
    data.push(row);
    dataStorage.setJSON(data);
    */
    
    // Show the success dialog.
    $("#successContent").html("The data for " + date + " has been added!");
    $("#successDialog").popup().trigger("create").popup("open");
    
    
    // TODO: should display dialog saying the the new data has been added, then take the user to the main screen.
};
    
