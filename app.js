var Nexmo, body, nexmo;

Nexmo = require('nexmo');

nexmo = new Nexmo({
  apiKey: "ii",
  apiSecret: "hh"
}, {
  debug: true
});

body = "";

body = body.replace(/’/g, "'");

console.log("ok");