const { expect } = require('chai');


const sensorReadings = require('./../src/sender/sensorReadings');
const senderFetchReadings = require('./../src/sender/sender');

describe('Test sensor readings random generator', () => {
  let readings = []
  readings.push(sensorReadings.fetchReadings);

  it('should exist sensor value', () => {

      expect(readings).to.exist;
  });
});

describe(' sensor temperature should exists', () => {
  it('should exists', () => {
      expect(sensorReadings.jsonObject.senderTemperatureReadings).to.exist;
  });

});

describe('sensor SOC should exists', () => {
  it('should exists', () => {
      expect(sensorReadings.jsonObject.senderSOCReadings).to.exist;
  });

});

describe('Sender data should exists', () => {
  it('should exists', () => {
      expect(senderFetchReadings.getSenderReadings).to.exist;
  });

});
