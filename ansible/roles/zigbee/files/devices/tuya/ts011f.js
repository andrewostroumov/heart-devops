const fz = require('./converters/fromZigbee');
const tz = require('./converters/toZigbee');

const device = {
  zigbeeModel: ['TS011F'],
  model: 'TS011F',
  vendor: 'TuYa',
  description: 'Socket module',
  supports: 'on/off',
  fromZigbee: [fz.on_off, fz.ignore_basic_report],
  toZigbee: [tz.on_off],
  whiteLabel: [{
    vendor: 'LoraTap', model: 'RR400ZB'
  }]
};

module.exports = device;
