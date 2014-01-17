/* This file defines the function for displaying the general info.
 * Depends: jQuery, jQuery Mobile, storage.js, utility.js, info.js
 * Used on: general info */

var viewGeneral = function() {
    /* Displays the info. */
    
    
    // ----------------------------------------
    // VERY VERY INCOMPLETE!!
    // ----------------------------------------
    
    var data = [
        ["First day", "???"],
        ["Last day", "???"],
        ["Number of days", "???"],
        ["Range of days", "???"],
        ["Lowest temperature", "???"],
        ["Highest temperature", "???"],
        ["Average temperature", "???"],
        ["Lowest precipitation", "???"],
        ["Highest precipitation", "???"],
        ["Average precipitation", "???"],
        ["Lowest wind speed", "???"],
        ["Highest wind speed", "???"],
        ["Average wind speed", "???"],
        ["Lowest air pressure", "???"],
        ["Highest air pressure", "???"],
        ["Average air pressure", "???"],
        ["Most common cloud cover", "???"]
    ];
    
    // Make sure the no data message is shown by default (I hate this shit).
    $("#nodataGeneral").show();
    
    // Clear any existing data. (Is this step necessary?)
    $("#generalInfo").empty();
    
    // Loop through all the data items and add them.
    for (var i = 0; i < data.length; i++) {
        
        // Hide the no data message.
        $("#nodataGeneral").hide();
        
        // Create the new item.
        var item = $("<li/>").append($("<h3/>", {text: data[i][0]}));
        var para = $("<p/>").append(data[i][1]).css("padding-left", "20px");
        
        // Append the data.
        item.append(para);
        // Insert the data.
        $("#generalInfo").append(item);
        $("#generalInfo").listview("refresh");
    }
        
};
