var senderTemperatureReadings = fetchReadings();
var senderSOCReadings = fetchReadings();




function fetchReadings(){
    var readings = [];
    while(readings.length < 50){
        var r = Math.floor(Math.random() * 100) + 1;
        if(readings.indexOf(r) === -1) readings.push(r);
    }
  
    return readings;
}

module.exports = {senderTemperatureReadings, senderSOCReadings}