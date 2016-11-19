/**
 * Created by 1class-08 on 2016-11-19.
 */

"use strict";

var makeArrSumIndex = function (arr) {
    var arrSum = 0;
    trace(arr);
    // var numberSort = function(a,b){return a-b}; arr.sort(numberSort);
    for (var a in arr) {
        arrSum += Number(arr[a]);
    }
    return arrSum;
}
var makeSumIndex = function (sIndex, eIndex) {
    console.log('start : ' + sIndex);
    console.log('end : ' + eIndex);
    var sum = 0;
    try {
        for (var i = sIndex; i <= eIndex; i++) {
            sum += i;
        }
    }
    catch (e) {
        trace('error');
    }
    return sum;
}
var _function2 = function () {
    // 표현식 함수 정의: 실행시 함수가 정의됨
    var add = function (a, b) {
        return a + b;
    };

    var sum = add(1, 3); // 4
    //  선언식 함수 정의: 파싱시 함수가 정의됨
    function add(a, b) {
        return a + b;
    };

    var sum = add(1, 3); // 4
    //  선언식은 실행 시 표현식으로 변경된다. 함수 정의는 표현식 방식을 사용.
}


var _scope = function () {
    var title = 'scope';
    trace(title, x);        //변수의 호이스팅
    var x = 1;
    trace(title, '------------------\n');
}

var _scope2 = function () {
    var x = 'global';
}

var _functionType = function () {

    var callbackFunction = function () {
        return 'callbackFunction';
    }

    var imediativeFunction = function () {
        return 'callbackFunction';
    }
    var internalFunction = function () {
        return 'callbackFunction';
    }

    var retriveFunction = function () {
        return 'callbackFunction';
    }
    var 생성자 = function () {
        return 'callbackFunction';
    }
}

var clousreFunction = function () {
    //클로저 : return값이 함수인 것을 클로저라한다. 

    // var alarm = function (func) {
    //     trace('alarm_start','');
    //     func();
    //     trace('alarm_end','');
    // }
    //
    // alarm(
    //     function () {
    //         trace('매개변수로 함수사용','');
    //     }
    // );
    //
    // var doWork = function (x) {
    //     return function calculate(y) {return x + y;}
    // }
    // var func = doWork(5);
    // trace(func(6));

    var celebrityID = function(id){

        return {
            getID : function(){
                return id;
            },
            setID : function(newID){
                id = newID + id;
            }
        }
    }

    var myID = celebrityID(999);
    trace('myID : ', myID.getID());
    trace('myID : ', myID.setID(789));
    trace('myID : ', myID.getID());
}

//객체리터럴 : 하나만 만드는 것
//생성자를 이용한 객체함수 : class 비슷하게 만드는 것, 똑같은 것을 여러개 만드는 것
function Person(name){
    //생성자 : 대문자
    this.name = name;
    this.getName = function() {this.name;}
    this.setName = function() {this.name = name;}
}
var foo = new Person('me');
var you = new Person('you');

foo.setName('me');
trace(foo.getName());

//생성자의 메서드 문제점 : 똑같은 메서드를 사용하면 메모리 낭비. 따라서 메소드 하나만 하는 법
function Person2(name){
    //생성자 : 대문자
    this.name = name;
}

//메소드 참조가 가능하다 : 생성자.prototype.function :  메모리를 줄이게 된다. & 편리함!

Person2.prototype.getName = function () {
    this.name;
}

Person2.prototype.setName = function (name) {
    this.name = name;
}

Person2.prototype = {
    getName: function(){trace('aa', aa);}
}

var you2 = new Person('you2');
you2.setName('you2remake')
you2.getName();

//정적 프로퍼티 / 정적 메소드

//상속 : 생성자로 사용한다. 프로토타입
Dog.prototype = new Animal();
Dog.prototype.constructor = dog;
//부모 상속 연결



