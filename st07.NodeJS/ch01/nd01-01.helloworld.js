console.log('hellow, world!!!');

var ozit_timer_test = function (){
    console.log("오즈의 순위왕 블로그로 이동합니다.");
};

// 3000ms(3초)가 경과하면 ozit_timer_test() 함수를 실행합니다.
setTimeout(ozit_timer_test(), 20000);

setTimeout(function (){
    console.log("오즈의 순위왕 블로그로 이동합니다.");
}, 20000);
