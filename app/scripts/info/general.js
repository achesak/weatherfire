/* This file defines the function for getting the info data.
 * Depends: info.js, utility.js
 * Used on: general info */

var infoGeneral = function(data) {
    /* Calculate the general info. */
    
    // Get the options.
    var options = getOptions();
    
    // Set the units.
    if (options.units == "metric") {
        var units = {"temp": "°C",
                     "prec": "cm",
                     "wind": "kph",
                     "airp": "hPa"};
    } else {
        var units = {"temp": "°F",
                     "prec": "in",
                     "wind": "mph",
                     "airp": "mbar"};
    }
    // Create the info array.
    var dataCalc = [];
    
    // Get the date data.
    var dateData = Utility.getColumn(data, 0);
    dataCalc.push(["First day", dateData[dateData.length - 1]]);
    dataCalc.push(["Last day", dateData[0]]);
    dataCalc.push(["Number of days", data.length]);
    var dateSplit1 = dateData[0].split("/");
    var dateSplit2 = dateData[dateData.length - 1].split("/");
    var firstDate = new Date(dateSplit1[2], dateSplit1[1], dateSplit1[0]);
    var secondDate = new Date(dateSplit2[2], dateSplit2[1], dateSplit1[0]);
    // Thanks to MaxVT and Phrogz on StackOverflow: http://stackoverflow.com/a/2627493
    var oneDay = 24*60*60*1000;
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    dataCalc.push(["Range of days", diffDays]);
    
    // Get the temperature data.
    var tempData = Utility.convertFloat(Utility.getColumn(data, 1));
    dataCalc.push(["Lowest temperature", Utility.round(Math.min.apply(Math, tempData)) + " " + units["temp"]]);
    dataCalc.push(["Highest temperature", Utility.round(Math.max.apply(Math, tempData)) + " " + units["temp"]]);
    dataCalc.push(["Average temperature", Utility.round(Info.mean(tempData)) + " " + units["temp"]]);
    
    // Get the precipitation data.
    var precData = Utility.splitList(Utility.getColumn(data, 2));
    var precData1 = Utility.convertFloat(Utility.noneToZero(precData[0]));
    if (precData1.length == 0) {
        precData1.push(0);
    }
    dataCalc.push(["Lowest precipitation", Utility.round(Math.min.apply(Math, precData1)) + " " + units["prec"]]);
    dataCalc.push(["Highest precipitation", Utility.round(Math.max.apply(Math, precData1)) + " " + units["prec"]]);
    dataCalc.push(["Average precipitation", Utility.round(Info.mean(precData1)) + " " + units["prec"]]);
    
    // Get the wind data.
    var windData = Utility.splitList(Utility.getColumn(data, 3));
    var windData1 = Utility.convertFloat(Utility.noneToZero(windData[0]));
    if (windData1.length == 0) {
        windData1.push(0);
    }
    dataCalc.push(["Lowest wind speed", Utility.round(Math.min.apply(Math, windData1)) + " " + units["wind"]]);
    dataCalc.push(["Highest wind speed", Utility.round(Math.max.apply(Math, windData1)) + " " + units["wind"]]);
    dataCalc.push(["Average wind speed", Utility.round(Info.mean(windData1)) + " " + units["wind"]]);
    
    // Get the humidity data.
    var humiData = Utility.convertFloat(Utility.getColumn(data, 4));
    dataCalc.push(["Lowest humidity", Utility.round(Math.min.apply(Math, humiData)) + "%"]);
    dataCalc.push(["Highest humidity", Utility.round(Math.max.apply(Math, humiData)) + "%"]);
    dataCalc.push(["Average humidity", Utility.round(Info.mean(humiData)) + "%"]);
    
    // Get the air pressure data
    var airpData = Utility.splitList(Utility.getColumn(data, 5));
    var airpData1 = Utility.convertFloat(airpData[0]);
    dataCalc.push(["Lowest air pressure", Utility.round(Math.min.apply(Math, airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Highest air pressure", Utility.round(Math.max.apply(Math, airpData1)) + " " + units["airp"]]);
    dataCalc.push(["Average air pressure", Utility.round(Info.mean(airpData1)) + " " + units["airp"]]);
    
    // Get the cloud cover data.
    var clouData = Utility.getColumn(data, 6);
    dataCalc.push(["Most common cloud cover", Info.mode(clouData)]);
    
    // Return the calculated data.
    return dataCalc;
};
