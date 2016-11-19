'use strict';

var $hello   = require('./hello');   // import 할 때 경로는 상대 경로로 설정 필요: ./
var $manager = require('./manager'); // import 할 때 경로는 상대 경로로 설정 필요: ./

// $hello의 메서드 호출하기
$hello.hello();
$hello.goodBye();

// person 객체의 메서드 호출
$hello.person.sayName();
console.log( $hello.person.age );
console.log( $hello.person.name );


var mgr = $manager.start();
mgr.manager.sayName();
console.log( mgr.manager.age );
console.log( mgr.manager.name );


