var $path = require('path');

var data  = $path.normalize('/a/.///b/d/../c/');
console.log('normalize : ' + data ); // 출력: \a\b\c 출력

var data = $path.join('/a/.', './//b/', 'd/../c/');
console.log('join : ' + data ); // 출력: \a\b\c 출력

var url = '/example1.html';
var data = $path.join( process.cwd(), 'static', url);
console.log('join : ' + data );

var a = '/a/b/c.html';
console.log('basename : ' + $path.basename(a) );
console.log('extname  : ' + $path.extname(a)  );
console.log('dirname  : ' + $path.dirname(a)  );

// 파일 이름 만들기
console.log('dirname  : ' + $path.basename(a, $path.extname(a)) );



