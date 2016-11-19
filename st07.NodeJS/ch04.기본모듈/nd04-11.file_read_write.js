'use strict';

var $fs = require('fs'); // 기본 모듈 : fs

var filename = './text.txt';

// 동기식으로 파일 존재 여부 확인
try{
    var exists = $fs.existsSync(filename);
    console.log('Sync exists: ' + exists + '\n');
}
catch (err) {
    console.log('Sync not exists: ' + err.toString() + '\n');

}

// 비동기식으로 파일 존재 여부 확인
$fs.exists(filename, function(exists) {
    console.log('Async exists: ' + exists + '\n');
});


// 동기식으로 파일 읽기
try{
    var data = $fs.readFileSync(filename, 'utf8');
    console.log( '동기식 파일 읽기 : ' +  data );
}
catch( err ) {
    console.log( err );
}

// 비동기식으로 파일 읽기
$fs.readFile(filename, 'utf8', function(err, data){
    if( err ) {
        throw err;
    }

    console.log( '비동기식 파일 읽기 : ' + data );
} );



var data = 'Hello, fileSystem';

// 동기식으로 파일 쓰기
try {
    $fs.writeFileSync('outsync.txt', data, 'utf8');
    console.log( 'Sync write file: \n' + data + '\n' );
}
catch( err ) {
    console.log( err );
}

// 비동기식으로 파일 쓰기
$fs.writeFile('outAsync.txt', data, 'utf8', function(err, data){
    if( err ) {
        throw err;
    }

    console.log( 'Async write file: \n' + arguments + '\n' );
} );

