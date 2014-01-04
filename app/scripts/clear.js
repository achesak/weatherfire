/* This file defines the function for clearing data.
 * Depends: jQuery, jQuery Mobile, storage.js
 * Used on: Clear Data screen */

var clearData = function() {
    /* Clears all the data. */
    
    // Create the storage object.
    var dataStorage = new Storage2(window.localStorage);
    
    // Only delete the data if there is any.
    if (dataStorage.has("weatherData")) {
        
        // Delete the data.
        dataStorage.remove("weatherData");
        
    }
    
    // Show the success dialog.
    $("#successDialog").popup().trigger("create").popup("open");
    
};
