const sensorReadings = require('./sensorReadings');



function getSenderReadings() {
    return(JSON.stringify(sensorReadings));
}

module.exports = { getSenderReadings }
