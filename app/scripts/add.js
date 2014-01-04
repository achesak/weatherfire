/* This file defines the function for adding more data. 
 * Depends: jQuery, jQuery Mobile, storage.js, isnumber.js
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
    
    // Strip any excess whitespace.
    temp = temp.toString().trim();
    prec = prec.toString().trim();
    wind = wind.toString().trim();
    airPressure = airPressure.toString().trim();
    
    // Change any values, if needed.
    if (prec == "" || parseFloat(prec) == 0) {
        precType = "None";
    }
    if (wind == "" || parseFloat(wind) == 0) {
        windDir = "None";
    }
    if (!isNumber(humidity)) {
        humidity = "0";
    }
    
    // Validate the data.
    var errors = "";
    if (temp == "") {
        errors += "Temperature is not specified.<br />";
    } else if (temp != "" && !isNumber(temp)) {
        errors += "Temperature is not a number.<br />";
    }
    if (prec != "" && !isNumber(prec)) {
        errors += "Precipitation is not a number.<br />";
    } else if (prec != "" && parseFloat(prec) < 0) {
        errors += "Precipitation is negative.<br />";
    }
    if (wind != "" && !isNumber(wind)) {
        errors += "Wind speed is not a number.<br />";
    } else if (wind != "" && parseFloat(wind) < 0) {
        errors += "Wind speed is negative.<br />";
    }
    if (airPressure == "") {
        errors += "Air pressure is not specified.<br />";
    } else if (airPressure != "" && !isNumber(airPressure)) {
        errors += "Air pressure is not a number.<br />";
    } else if (airPressure != "" && parseFloat(airPressure) < 0) {
        errors += "Air pressure is negative.<br />";
    }
    
    // Show the error dialog if anything is wrong.
    if (errors != "") {
        
        // Finish the error text.
        errors = "It appears there are some problems with the data that you entered:<br /><br />" + errors;
        
        // Show the error dialog.
        $("#errorContent").html(errors);
        $("#errorDialog").popup().trigger("create").popup("open");
        return;
    }
    
    // TODO: show a dialog if anything is wrong, and don't continue BUT stay on the current screen.
    
    // Parse the date into the desired format. Weatherfox uses "dd/mm/yyyy", but Firefox OS inputs date as "yyyy-mm-dd".
    // TODO: parse the date for iOS devices as well. The format used is "Month Number, Year". Ex: "Jan 1, 2014".
    var dateSplit = date.split("-");
    date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
    
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
    row[1] = temp;
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
    row[4] = humidity;
    row[5] = airPressure + " " + airPressureChange;
    row[6] = cloudCover;
    
    // Add the row to the data and save the data.
    data.push(row);
    dataStorage.setJSON(data);
    
    // Show the success dialog.
    $("#successContent").html("The data for " + date + " has been added!");
    $("#successDialog").popup().trigger("create").popup("open");

};
    
