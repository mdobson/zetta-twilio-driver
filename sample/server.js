var zetta = require('zetta');
var TwilioDriver = require('../');
var AutoScout = require('zetta-auto-scout');
var SonosDriver = require('zetta-sonos-driver');
var app = require('./app');

var twilioOpts = {
  phoneNumber:'+17342452497'
};

var Twilio = new AutoScout('phone', TwilioDriver, twilioOpts);

zetta()
  .name('matt.dobson')
  .use(Twilio)
  .use(SonosDriver)
  .load(app)
  .listen(1337);

