var fs = require('fs');
var ejs = require('ejs');
var express = require('express');
var path = require('path');

var home = express.Router();

//
var path =  path.join(__dirname , '/../views/home/');

// 라우트를 수행합니다.
home.get('/hello', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'hello.htm', 'utf8', function (error, data) {

        if (error) {
            throw error;
        }

        console.log(data);

        // 응답합니다.
        response.send( ejs.render(data, { msg: 'Hello, Node world!!!', title: 'Express' }) );
    });
});

module.exports = home;

