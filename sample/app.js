module.exports = function(server) {
  var sonosQuery = server.where({type: 'sonos'});
  var twilioQuery = server.where({type: 'phone'});

  server.observe([sonosQuery, twilioQuery], function(sonos, twilio) {
    sonos.streams.state.on('data', function(message) {
      if(message.data !== '') {
        var sms = 'Sonos playing - ' + message.data;
        console.log(sms);
        twilio.call('send-sms', '+17346345472', sms, function(err) {
          if(err) {
            server.log(err);
          } else {
            server.log('Sent your phone an update!');
          }
        });
      }
    });
  });
};
