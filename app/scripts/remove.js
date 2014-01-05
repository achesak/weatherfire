/* This file defines the functions for removing an item.
 * Depends: jQuery, jQuery Mobile, storage.js
 * Used on: Remove screen */


var displayDates = function() {
    /* Displays the dates. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the current data as JSON, or create a new set of data if it doesn't already exist.
    if (!dataStorage.has("weatherData")) {
        var data = [];
    } else {
        var data = dataStorage.getJSON("weatherData");
    }
    
    // Loop through the list and add the date.
    for (var i = 0; i < data.length; i++ ) {
        
        // Create and add the date.
        var opt = $("<option/>", {text: data[i][0], value: data[i][0]});
        $("#date").append(opt);
    }
};


var removeRow = function() {
    /* Removes a row of data. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the current data as JSON, or create a new set of data if it doesn't already exist.
    if (!dataStorage.has("weatherData")) {
        var data = [];
    } else {
        var data = dataStorage.getJSON("weatherData");
    }
    
    // Get the date.
    var date = $("#date").val();
    
    // If the date is an empty string, show the error dialog.
    if (!date) {
        
        // Show the error dialog.
        $("#errorDialog").popup().trigger("create").popup("open");
        return;
        
    }
    
    // Find the index.
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        
        if (data[i][0] == date) {
            index = i;
            break;
        }
    }
    
    // Remove that element.
    data.splice(index, 1);
    
    // Store the data.
    dataStorage.setJSON("weatherData", data);
    
    // Show the success dialog.
    $("#successContent").html("The data for " + date + " has been removed!");
    $("#successDialog").popup().trigger("create").popup("open");
    
};
