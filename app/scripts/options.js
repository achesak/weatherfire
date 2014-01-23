/* This file defines the functions for getting and saving the options.
 * Depends: jQuery, jQuery Mobile, storage.js
 * Used on: main screen, info screens, option screen */

var getOptions = function() {
    /* Gets the options. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the options as JSON, or get the default options if none have been set.
    if (!dataStorage.has("optionsData")) {
        var options = {"units": "metric"};
    } else {
        var options = dataStorage.getJSON("optionsData");
    }
    
    // Return the options.
    return options;
};

var displayOptions = function() {
    /* Display the current options values. */
    
    // Get the current options.
    var options = getOptions();
    
    // Set the UI for the units.
    if (options.units == "metric") {
        $("#unitMetric").attr("checked", "checked");
    } else {
        $("#unitImperial").attr("checked", "checked");
    }
};

var saveOptions = function() {
    /* Saves the options. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Get the options as JSON, or get the default options if none have been set.
    if (!dataStorage.has("optionsData")) {
        var options = {"units": "metric"};
    } else {
        var options = dataStorage.getJSON("optionsData");
    }
    
    // Get the new options.
    var units = $("input[type=radio]:checked").val();
    
    // Set the new options.
    options.units = units;
    
    // Save the new options.
    dataStorage.setJSON("optionsData", options);
    
    // Show the success dialog.
    $("#successDialogOptions").popup().trigger("create").popup("open");
};
