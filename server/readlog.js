var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    path = require('path');
 
var app = express();
app.set('port', process.env.PORT || 3000); 
app.use(express.static(path.join(__dirname, 'public')));

// var getFile = function() {
//     fs.readFile('public/temp.log', 'utf8', function (err,data) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(data);
//         return data;
//     });
// }
 
// app.get('/', function (req, res) {
//     console.log(getFile());
//     res.send({data: getFile()});
// });
 
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



