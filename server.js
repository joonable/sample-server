var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.use(function(req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });

app.use(bodyParser.urlencoded({extended : false }));


app.get('/', function(req, res){
   res.send('Hello World!')
});

app.post('/user', function (req, res) {
    console.log('데이터 확인', req.body);
    res.send({state: 'OK', data: req.body});
});


// app.get('/hello', function(req, res){
//     res.send('just hello!')
// });



// app.post('/user', function (req, res) {
//     res.send('POST (Create)');
// });
//
// app.get('/user/:userId', function (req, res) {
//     res.send('GET (Read)');
// });
//
// app.put('/user/:userId', function (req, res) {
//     res.send('PUT (Update) ');
// });
//
// app.delete('/user/:userId', function (req, res) {
//     res.send('DELETE (Delete) ');
// });

// app.use(express.static('public'));

// app.get('/user/:userId', function (req, res) {
//    console.log(req.params.userId + '의 정보를 가져옵니다');
//
//    var user = {
//        userId: req.params.userId,
//        name: 'Joon',
//        email : 'joonable2@gmail.com',
//        company: 'KossLAB'
//    };
//
//    res.send(user);
// });


app.get('/user/search', function (req, res) {
   console.log('데이터 확인', req.query.name);

   var users = [{
       userId : req.query.name,
       name : 'John',
       email: 'yohany_AT_gmail.com',
       company: 'KossLAB'
   }];

   res.send({result: users})
});

app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
});

