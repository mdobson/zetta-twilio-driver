var zetta = require('zetta');
var Device = zetta.Device;
var util = require('util');
var twilio = require('twilio');

var TwilioDriver = module.exports = function(opts) {
  Device.call(this);
  this._twilio = twilio();
  this.phoneNumber = opts.phoneNumber;
};
util.inherits(TwilioDriver, Device);

TwilioDriver.prototype.init = function(config) {
  config
    .state('ready')
    .name('Twilio Phone')
    .type('phone')
    .when('ready', { allow: ['send-sms'] })
    .when('sending', { allow: [] })
    .map('send-sms', this.sendSms, [{type:'tel', name:'number'}, {type:'text', name:'message'}]);
};

TwilioDriver.prototype.sendSms = function(number, message, cb) {
  var self = this;
  this.state = 'sending';
  var opts = {
    to: number,
    from: this.phoneNumber,
    body: message
  };
  this._twilio.sendMessage(opts, function(err, response) {
    self.state = 'ready';
    if(cb) {
      if(err) {
        cb(err);
      } else {
        cb();
      }
    }
  });
};
