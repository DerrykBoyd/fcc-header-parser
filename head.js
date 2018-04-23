var moment = require('moment');

exports.parse = function(req, res) {
  // object to return results in
  var headers = {};
  // get ip addresses from the header and split to get the first entry
  var ip = req.get('x-forwarded-for').split(',', 1);
  headers.ip = ip[0];
  // get lang from the header and split to get the first entry
  var lang = req.acceptsLanguages();
  headers.lang = lang[0];
  // get the operating system
  var rx = /\(|\)/;
  var os = req.get('user-agent').split(rx, 2);
  headers.user = os[1];
  console.log(headers);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(headers));
  res.end();
}