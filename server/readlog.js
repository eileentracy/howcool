var http = require('http'),
    express = require('express'),
    fs = require('fs');
 
var app = express();
app.set('port', process.env.PORT || 3000); 
 
app.get('/', function (req, res) {

    res.send(app.getFile());
});
 
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    console.log(app.getFile());
});

app.getFile = function() {
    fs.readFile('home/pi/temp.log', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        return data;
    });
}

