const { expect } = require('chai');


const sensorReadings = require('./../src/sender/sensorReadings');
const senderFetchReadings = require('./../src/sender/sender');

describe('Test sensor readings random generator', () => {
  let readings = []
  readings.push(sensorReadings.fetchReadings);
 
  it('should return sensor value', () => {

      expect(readings.length).to.deep.equals(50);
  });
});

describe(' sensor temperature should exists', () => {
  it('should exists', () => {
      expect(sensorReadings.senderTemperatureReadings).to.exist;
  });

});

describe('sensor SOC should exists', () => {
  it('should exists', () => {
      expect(sensorReadings.senderSOCReadings).to.exist;
  });

});

describe('Sender data should exists', () => {
  it('should exists', () => {
      expect(senderFetchReadings.getSenderReadings).to.exist;
  });

});
