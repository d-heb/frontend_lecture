var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var $url = require('url');

var login = express.Router();

//
var path =  path.join(__dirname , '/../views/login/');


// 라우트를 수행합니다.
login.get('/', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'loginget.htm', 'utf8', function (error, data) {

        if (error) {
            throw error;
        }

        // 응답합니다.
        response.send(ejs.render(data, {
            title: 'Login Success',
            header: 'Login Success'
        }));
    });
});
login.post('/', function (request, response) {
    // 변수를 선언합니다.
    var body = request.body;

    // 파일을 읽습니다.
    fs.readFile(path + 'loginpost.htm', 'utf8', function (error, data) {

        if (error) {
            throw error;
        }

        response.send(ejs.render(data, {
            title: 'Login Success',
            header: 'Login Success',
            userid: body.userid,
            password: body.password
        }));
    });
});

module.exports = login;

