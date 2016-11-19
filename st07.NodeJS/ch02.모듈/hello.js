'use strict';

/*
 * 프로퍼티로 모듈을 선언하는 경우
 * */


// export에 메서드 추가
module.exports.hello = function () {
    console.log('called a hello method');
};

// export에  메서드 추가
exports.goodBye = function () {
    console.log('called a goodBye method');
};

// export의 프로퍼티에 객체 할당
exports.person = {
    name : 'kim',
    age  : 15   ,
    sayName : function() {
        console.log('My name is ' + this.name );
    }
};



