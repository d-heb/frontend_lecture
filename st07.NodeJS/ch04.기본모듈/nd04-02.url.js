'use strict';

var $url = require('url'); // 기본 모듈

// http://domain/a/b/c/search/?q=node&page=2&year=2016 에서
var parseObject = null;
var urlstring = 'http://domain:80/a/b/c/search/?q=node&page=2&year=2016';

parseObject = $url.parse( urlstring );
console.log( parseObject );
console.log( parseObject.query );

parseObject = $url.parse( urlstring, true );
console.log( parseObject );
console.log( parseObject.query );
console.log( parseObject.query.q );
console.log( parseObject.query.page );
console.log( parseObject.query.year );

parseObject.port = 8080;
console.log( '포트 수정: ' + parseObject.href ); // 안됨. 확인 필요.



var str = $url.format( parseObject );
console.log( str ); // http://domain:80/a/b/c/search/?q=node&page=2&year=2016

var str = url.resolve('/one/two/three', 'four');
console.log( str );  // '/one/two/four'

var getUrlPath = function ( fullurl){
    var pathname = $url.parse( fullurl ).pathname;
    var arr  = pathname.split("/"); // res
    arr.pop();

    return arr.join('/')
};

// path 알아내기
var str = getUrlPath(urlstring);
console.log( str ); //  /a/b/c/search 추출


// path 수정하기
var newpath = $url.resolve( $url.parse( urlstring ).pathname, '/list' );
console.log( newpath ); //  /a/b/c/search 를 /list 로 교체
