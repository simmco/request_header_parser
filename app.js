var express = require("express");

var app = express();

app.use("/api/whoami", function(req, res) {
  let ip = req.connection.remoteAddress;
  let useragent = req.headers['user-agent'];
  let lang = req.headers['accept-language'];

  //get the operating system out of useragent
  let software = "";
  for(i=0; i < useragent.length; i++) {
      let placeholder = useragent.indexOf(")");
      if (useragent[i] === "(" ) {
          for(j = i+1; j < placeholder; j++) {
              software += useragent[j];
          }
      }
  }
  //get the language
  let language = lang.split(",")[0];

  let api = {
    "ipaddress": ip,
    "lanugage": language,
    "software": software
  }
  res.send(api);
})

app.listen(3000);
