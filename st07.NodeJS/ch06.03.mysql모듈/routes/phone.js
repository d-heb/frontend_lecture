var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var $url = require('url');

var phone = express.Router();

//
var path =  path.join(__dirname , '/../views/phone/');


// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'book_db'
});


phone.get('/writeone', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'writeOneForm.htm', 'utf8', function (error, data) {

        console.log(data);

        // 응답합니다.
        response.send(data);
    });
});
phone.post('/writeone', function (request, response) {
    // 변수를 선언합니다.
    var body = request.body;
    body.use_yn = body.use_yn ? 1:0;

    // 파일을 읽습니다.
    fs.readFile(path + 'writeOneList.htm', 'utf8', function (error, data) {

        console.log(data);

        // 응답합니다.
        response.send(data);
    });
});


phone.get('/writelist', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'writeListForm.htm', 'utf8', function (error, data) {

        console.log(data);

        // 응답합니다.
        response.send(data);
    });
});
phone.post('/writelist', function (request, response) {

    // 변수를 선언합니다.
    var phoneItems = request.body.phoneItems; //Array.prototype.slice.call(request.body.phoneItems);
    var items = [];
    for(var i =0; i<phoneItems.length; i++) {
        var item = {};
        item.name           = phoneItems[i].name;
        item.manufacturer   = phoneItems[i].manufacturer;
        item.price          = phoneItems[i].price;
        items.push( item );
    }

    // 파일을 읽습니다.
    fs.readFile(path + 'writeListResult.htm', 'utf8', function (error, data) {

        data = ejs.render(data, { items : items });

        console.log(data);

        // 응답합니다.
        response.send(data);
    });
});

module.exports = phone;

