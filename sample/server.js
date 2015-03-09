var zetta = require('zetta');
var Twilio = require('../');
var SonosDriver = require('zetta-sonos-driver');
var app = require('./app');

/* Get phoneNumber, accountSid & authToken from your account in twilio */

var twilioOpts = {
  phoneNumber:'+XXXXXXXXXX',
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
};


zetta()
  .name('matt.dobson')
  .use(Twilio, twilioOpts)
  .use(SonosDriver)
  .use(app)
  .listen(1337);
