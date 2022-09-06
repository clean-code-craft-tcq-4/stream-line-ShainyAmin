const sensorReadings = require('./sensorReadings');
const senderOutput = require('./sender');

const {expect} = require('chai');

it('Test sender output in console', () => {
    console.log = jest.fn();
    log(sensorReadings);
    // The first argument of the first call to the function was 'hello'
    expect(console.log.mock.calls[0][0]).toBe(sensorReadings);
  });