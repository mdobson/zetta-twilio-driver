var zetta = require('zetta');
var Twilio = require('../');
var SonosDriver = require('zetta-sonos-driver');
var app = require('./app');

var twilioOpts = {
  phoneNumber:'+17342452497'
};


zetta()
  .name('matt.dobson')
  .use(Twilio, twilioOpts)
  .use(SonosDriver)
  .use(app)
  .listen(1337);

