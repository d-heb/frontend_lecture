'use strict';

var $qs = require('querystring'); // 기본 모듈

var obj = {
    q : 'node',
    page : '2',
    year : 2016
};

// http://domain/a/b/c/search/?q=node&page=2&year=2016 에서
// q=node&page=2&year=2016  만드는 방법
var str = $qs.stringify(obj);
console.log( str );

var str = $qs.stringify(obj, ';');
console.log( str );

var str = $qs.stringify(obj, ';', ':');
console.log( str );

