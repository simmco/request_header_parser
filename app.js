var express = require("express");

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res) {

  var ip = req.connection.remoteAddress;
  var useragent = req.headers['user-agent'];
  var lang = req.headers['accept-language'];

  //get the operating system out of useragent
  var software = "";
  for(i=0; i < useragent.length; i++) {
      var placeholder = useragent.indexOf(")");
      if (useragent[i] === "(" ) {
          for(j = i+1; j < placeholder; j++) {
              software += useragent[j];
          }
      }
  }
  //get the language
  var language = lang.split(",")[0];

  var api = {
    "ipaddress": ip,
    "lanugage": language,
    "software": software
  }
  res.send(api);
})
var port = process.env.PORT || 3000;

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'))
});
