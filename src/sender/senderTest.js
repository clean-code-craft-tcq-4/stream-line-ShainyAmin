const sensorReadings = require('./sensorReadings');


const {expect} = require('chai');

describe('Test sensor readings random generator', () => {
  let readings = sensorReadings.fetchReadings();
  it('should exists', () => {
      expect(sensorReadings.fetchReadings).to.exist;
  });
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