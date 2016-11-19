'use strict';

/*
 * 함수로 모듈을 선언하는 경우
 * */
function start() {

    // 객체 export
    var manager = {
        name : 'manager',
        age  : 15   ,
        sayName : function() {
            console.log('My name is ' + this.name );
        }
    };
}

exports.start = start; // () 생략.
