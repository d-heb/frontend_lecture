var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var $url = require('url');

var book = express.Router();

//
var path =  path.join(__dirname , '/../views/book/');


// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'book_db'
});


// 라우트를 수행합니다.
book.get('/', function (request, response) {
    response.redirect( '/book/list' );
});
book.get('/list', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'list.htm', 'utf8', function (error, data) {

        if (error) {
            throw error;
        }

        // 데이터베이스 쿼리를 실행합니다.
        client.query('SELECT * FROM book', function (error, results) {

            if (error) {
                throw error;
            }

            // 응답합니다.
            response.send(ejs.render(data, {
                data: results
            }))
        });
    });
});

book.get('/insert', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'insert.htm', 'utf8', function (error, data) {

        if (error) {
            throw error;
        }

        console.log(data);

        // 응답합니다.
        response.send(data);
    });
});
book.post('/insert', function (request, response) {
    // 변수를 선언합니다.
    var body = request.body;
    body.use_yn = body.use_yn ? 1:0;

    // 데이터베이스 쿼리를 실행합니다.
    client.query('INSERT INTO book (title, publisher, year, price, authid, use_yn, dtm) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ body.title, body.publisher, body.year, body.price, body.authid, body.use_yn, body.dtm ],
        function (error) {

            if (error) {
                throw error;
            }

            // 응답합니다.
            response.redirect('/book/list' );
    });
});

book.get('/edit/:id', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile(path + 'edit.htm', 'utf8', function (error, data) {

        if (error) {
            throw error;
        }

        // 데이터베이스 쿼리를 실행합니다.
        client.query('SELECT * FROM book WHERE book_id = ?', [request.params.id], function (error, result) {

            if (error) {
                throw error;
            }

            // 응답합니다.
            response.send(ejs.render(data, { data: result[0] }));
        });
    });
});
book.post('/edit/:id', function (request, response) {
    // 변수를 선언합니다.
    var body = request.body;
    body.use_yn = body.use_yn ? 1:0;

    // 데이터베이스 쿼리를 실행합니다.
    client.query('UPDATE book SET title=?, publisher=?, year=?, price=?, authid=?, use_yn=?, dtm=? WHERE book_id=?',
        [ body.title, body.publisher, body.year, body.price, body.authid, body.use_yn, body.dtm, request.params.id ],
        function (error) {

            if (error) {
                throw error;
            }

            // 응답합니다.
            response.redirect( '/book/list' );
    });
});


book.get('/delete/:id', function (request, response) {
    // 데이터베이스 쿼리를 실행합니다.
    client.query('DELETE FROM book WHERE book_id=?', [request.params.id], function (error) {

        if (error) {
            throw error;
        }

        // 응답합니다.
        response.redirect( '/book/list' ) ;
    });
});


module.exports = book;

