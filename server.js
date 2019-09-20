var express = require('express');
var app = express();

app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem dla endpointu \'/store\'');
    next();
});

app.get('/', function(req, res) {
    console.log('To jest homesite -> console');
    res.send('To jest homesite (web browser)');    
});

app.get('/store', function(req, res) {
    console.log('To jest SKLEP -> console');
    res.send('To jest SKLEP (web browser)'); 
});

app.listen(3000);

app.use(function(req, res, next) {
    res.status(404).send('Very Fatal Error (code: ' + res.statusCode + '), everything gone very bad');
    if(res.statusCode === 404) {
        console.log('Very Fatal Error (code: ' + res.statusCode + '), everything gone very bad');
    }
});
