var zetta = require('zetta');
var TwilioDriver = require('../');
var AutoScout = require('zetta-auto-scout');

var twilioOpts = {
  phoneNumber:'+17342452497'
};

var Twilio = new AutoScout('phone', TwilioDriver, twilioOpts);

zetta()
  .name('matt.dobson')
  .use(Twilio)
  .listen(1337);

