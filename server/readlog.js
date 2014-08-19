var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    path = require('path');
 
var app = express();
app.set('port', process.env.PORT || 3000); 
app.use(express.static(path.join(__dirname, 'public')));

 
app.get('/', function (req, res) {
    fs.readFile('public/temp.log', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        res.send({data: data});
    });
});
 
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



