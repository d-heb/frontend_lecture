/**
 * Created by 1class-08 on 2016-11-19.
 */

var _object01 = function(){

    var name = 'foo';
    var age = 30;
    var run = function(){};

    trace(typeof name, name);
    trace(typeof age, age);
    trace(typeof run, run);

    var foo = {name :'foo', age: 30, run:function(){}};

    trace(typeof foo, foo);
}

var _object02 = function(){
    var Dog = {name:'foo', weight:40, breed:'Mixed', loves:['walks','fetching balls']};
    trace('Dog : ', Dog);

    //crud
    Dog.name ="aa";
    Dog.age = 50;

    Dog.gender = 'man';
    Dog.nickname = 'babo';

    delete Dog.age;

    for(var i in Dog){
        console.log('---------------------------------------------------');
        trace('property  > (' + typeof i +') : ' + i ,' <br> value >  (' +typeof Dog[i] + ') : ' +  Dog[i] );
        console.log('---------------------------------------------------');
    }

    // trace(typeof Dog, Dog);
    trace('Dog.name : ', Dog.name);
    trace('Dog.weight : ', Dog.weight);
    trace('Dog.breed : ', Dog.breed);
    for (var love in Dog.loves){
        trace('Dog.loves ' + love + ' : ' , Dog.loves[love]);
    }
    trace('Dog.gender : ', Dog.gender);
    trace('Dog.nickname : ', Dog.nickname);
    trace('Dog.age : ', Dog.age);
    trace('Dog : ', Dog);



}
var _object03 = function(){
    var Dog = {name:'foo', weight:40, breed:'Mixed', loves:['walks','fetching balls']};
    trace('Dog : ', Dog);

    //crud
    Dog.name ="aa";
    Dog.age = 50;

    Dog.gender = 'man';
    Dog.nickname = 'babo';

    delete Dog.age;

    for(var i in Dog){
        console.log('---------------------------------------------------');
        trace('property  > (' + typeof i +') : ' + i ,' <br> value >  (' +typeof Dog[i] + ') : ' +  Dog[i] );
        console.log('---------------------------------------------------');
    }

    // trace(typeof Dog, Dog);
    trace('Dog.name : ', Dog.name);
    trace('Dog.weight : ', Dog.weight);
    trace('Dog.breed : ', Dog.breed);
    for (var love in Dog.loves){
        trace('Dog.loves ' + love + ' : ' , Dog.loves[love]);
    }
    trace('Dog.gender : ', Dog.gender);
    trace('Dog.nickname : ', Dog.nickname);
    trace('Dog.age : ', Dog.age);
    trace('Dog : ', Dog);



}

var _object04_string = function(){
    var str = 'wings프로젝트';   trace('default : ', str);
    var str2 = str.substr(5, 3); trace('substr : ', str2);
    var str3 = str.substring(5, str.length); trace('substring :', str3);
    var str4 = str.split('s');  trace('split :', str4);
    var str5 = str.replace('프로젝트', 'project'); trace('replace : ', str5);

    var str6 = str+'test';  trace('+ : ', str6);
}

var _object21_prototype = function(){
    //객체 리터럴

    //생성자함수
}


