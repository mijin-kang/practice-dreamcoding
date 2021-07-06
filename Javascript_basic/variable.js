'use strict';

//변경될 수 있는 값

//let(added in ES6) es6이전의 문법은 이제 사용되지 않는다

let name='may';
console.log(name);

name='hello';
console.log(name);

//var는 사용 금지!
//var hoisting : 어디 선언했는가 상관업이 항상 제일 위로 끌어올려준다
//var는 block sope를 무시한다

const daysInWeek=7;


const count=17; //integer
const size=17.1; //decimal number

console.log('value:${count},type:${typeof coount}');
console.log('value:${size},type:${typeof size}');


const infinity=1/0; //positive 숫자를 0으로 나눌때
const negativeInfinity=-1/0; 
const nAn='not a number'/2; //숫자가 아닌 값을 나누려했을 때

console.log(infinity);
console.log(negativeInfinity);
console.log(NaN);

//bigInt (fairly new, don't use it yet)
//크롬이랑 파이어폭스만 지원됨
const bigInt=123456243564567275527n; //n만 뒤에 붙여주면 됨


//String 
const may="may";
const hi= 'hello'+may;
console.log(`value:${hi},type:${typeof hi}`);
const bob=`hi ${may}!`; //template literals(string)


//symbol
const symbol1=Symbol('id');
const symbol2=Symbol('id');

console.log(symbol1===symbol2);

//똑같게 만들고 싶을 때
const wsymbol1=Symbol.for('id');
const wsymbol2=Symbol.for('id');

console.log(wsymbol1===wsymbol2);
//.description을 이용해서 변환해서 출력해야함
console.log(`value:${symbol1.description},type:${typeof symbol1}`);

//그냥 변수 선언한다면 한번 할당된 오브젝트는 다른것으로 변경 불가
//하지만 이렇게 객체를 만들고
const ellie={name:'ellie',age:20};
//오브젝트안에 있는 값을 불러와서 바꿔줄 순 있다
ellie.age=21;