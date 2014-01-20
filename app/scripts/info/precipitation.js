/* This file defines the function for getting the precipitation info data.
 * Depends: info.js, utility.js
 * Used on: precipitation info */

var infoPrec = function(data) {
    /* Calculate the precipitation info. */
    
    // Create the info array.
    var dataCalc = [];
    
    // Get the precipitation data.
    var precData = Utility.splitList(Utility.getColumn(data, 2));
    var precSplit = Utility.splitList2(Utility.getColumn(data, 2));
    var precData1 = Utility.convertFloat(Utility.noneToZero(precData[0]));
    if (precData1.length == 0) {
        precData1.push(0);
    }
    dataCalc.push(["Lowest precipitation", Math.min.apply(Math, precData1) + " cm"]);
    dataCalc.push(["Highest precipitation", Math.max.apply(Math, precData1) + " cm"]);
    dataCalc.push(["Average precipitation", Info.mean(precData1) + " cm"]);
    dataCalc.push(["Median precipitation", Info.median(precData1) + " cm"]);
    dataCalc.push(["Range of precipitation", Info.range(precData1) + " cm"]);
    
    var total = 0;
    var rain = 0;
    var snow = 0;
    var hail = 0;
    var sleet = 0;
    var dNone = 0;
    var dRain = 0;
    var dSnow = 0;
    var dSleet = 0;
    var dHail = 0;
    for (var i = 0; i < precSplit.length; i++) {
        var j = precSplit[i];
        if (j[1] != "None") {
            total += parseFloat(j[0]);
        }
        if (j[1] == "None") {
            dNone += 1;
        } else if (j[1] == "Rain") {
            dRain += 1;
            rain += parseFloat(j[0]);
        } else if (j[1] == "Snow") {
            dSnow += 1;
            snow += parseFloat(j[0]);
        } else if (j[1] == "Sleet") {
            dSleet += 1;
            sleet += parseFloat(j[0]);
        } else if (j[1] == "Hail") {
            dHail += 1;
            hail += parseFloat(j[0]);
        }
    }
    
    dataCalc.push(["Total precipitation", total + " cm"]);
    dataCalc.push(["Total amount of rain", rain + " cm"]);
    dataCalc.push(["Total amount of snow", snow + " cm"]);
    dataCalc.push(["Total amount of hail", hail + " cm"]);
    dataCalc.push(["Total amount of sleet", sleet + " cm"]);
    dataCalc.push(["Days with no precipitation", dNone + " days"]);
    dataCalc.push(["Days with rain", dRain + " days"]);
    dataCalc.push(["Days with snow", dSnow + " days"]);
    dataCalc.push(["Days with hail", dHail + " days"]);
    dataCalc.push(["Days with sleet", dSleet + " days"]);
    
    // Return the calculated data.
    return dataCalc;
};
