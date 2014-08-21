var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    _ = require('underscore'),
    path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,      Accept");
  next();
};
app.use(allowCrossDomain);

app.get('/temp-info', function (req, res) {
    fs.readFile('public/temp.log', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        } else {
            var parsedResponse = data.split('\n');
            var responseArray = []
            _.each(parsedResponse, function(item){
                if (item !== "") {
                    var tempInfo = {
                        datetimestamp: "",
                        humidity: "",
                        temperature: ""
                    }
                    item = item.split(',');

                    tempInfo.datetimestamp = item[0];
                    var parseDateTime = '';
                    parseDateTime  += tempInfo.datetimestamp.substring(0, 4);
                    parseDateTime += "/";
                    parseDateTime  += tempInfo.datetimestamp.substring(4, 6);
                    parseDateTime += "/";
                    parseDateTime  += tempInfo.datetimestamp.substring(6, 8);
                    parseDateTime += " ";
                    parseDateTime  += tempInfo.datetimestamp.substring(8, 10);
                    parseDateTime += ":";
                    parseDateTime  += tempInfo.datetimestamp.substring(10, 12);
                    parseDateTime += ":";
                    parseDateTime  += tempInfo.datetimestamp.substring(12, 14);

                    tempInfo.datetimestamp = parseDateTime;

                    tempInfo.datetimestamp = new Date(tempInfo.datetimestamp);
                    tempInfo.humidity = item[1];
                    tempInfo.temperature = item[2];
                    responseArray.push(tempInfo);
                }
            })

            res.send({data: responseArray});
        }

    });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



