// let num = 1278;
// let count = 0;

// while( num != 0){
//     num=(( num - num % 10 ) / 10)
//     count++;
// }


// console.log( count );


// let n;
// for( n = 1 ; n <= 60 ; n++ ){
//     if( n % 3 == 0 && n % 5 == 0 ) {
//         console.log( "FizzBuzz" );
//     }else if( n % 3 == 0) {
//         console.log( "Fizz" );
//     }else if( n % 5 == 0 ) {
//         console.log( "Buzz" );
//     }
// }

// let n = 8;
// let i;
// let j;

// for( i = 1 ; i <= n ; i++ ){
//     let message = " ";
//   for( j = 1 ; j <= i ; j++ ){

//     message += ` ${j} `;

//   }
//   console.log(message);
// }



// let i = 1;
// let n = 20;
// let count = 0;
// for( i = 1 ; i <= n ; i++ ) {
//     count += i ;
// }
// console.log(count);




// let num = 5679;
// let n = 6;
// let message = " Yes ";
// let count = " No ";
// while( num  != 0 ) {
//     num = (( num - num % 10 ) / 10 );
//     if( num % 10 == n ) {

//         console.log(message);
// break;
// }
// }if (num % 10 != n){
//     console.log(count);
// }



// let n = 0;
// for( n = 0 ; n <= 15 ; n++ ) {
//     if( n % 2 == 0 ) {
//         console.log(` ${n} ` + 'is even' );
//     }else{
//         console.log(` ${n} ` + 'is odd');
//     }
// }




// let arr = [ 5 , 7 , 8 , 13 , 0 , 30 , 17 ];
// const arr2 = [];
// for( let i = 0; i < arr.length ; i++ ){
//    arr2.push(2*arr[i]);

// }
// console.log(arr2);


// let arr = [ 0 , 2 , 5 , 7 , 3 , 8 , 32 , 24 , 13];
// let n = 6;
// let arr2 = [];
// for(i = 0 ; i < arr.length ; i++){
//     if(arr[i] > n){
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2);


// const arr = [3 , 5 , 7 , 8 , 14 , 17];
// const n = 7;
// console.log(arr.indexOf(n));




// const str = "barev";
// // let str2 = str.replaceAll("a", "g");

// let str3 = "";
// for (let i = 0; i < str.length; i++) {
//   str[i] === "a" ? str3 += "g" : str3 += str[i];
// }

// console.log(str3);


// 



// let str = '_, we have a _.';
// let arr = [ "Houtson" , "problem"];
// for( let i = 0 ; i < str.length ; i++ ){
//  str = str.replace('_',arr[i])

// }
// console.log(str);



// const arr = [1, 5, null, "string", 32, 26, "value"];
// let Numbers = 0;
// let Strings = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === "string") {
//         Strings++;
//     } else {
//         Numbers++;
//     }


// }
// console.log(Numbers);
// console.log(Strings);






// 1.
// let sum = (x, y) => console.log(x + y);

// sum(20, 30);


//  let getanswer = (x, y , operation) => {
// if(true){
//     operation === "/"
// }

// return x / y

// }

//  console.log(getanswer(10, 5, '/'));



// function sayHi() {
//     let phrase;
//     console.log(phrase);

//      phrase = "Привет";
//   }

//   sayHi();


// let arr = [1 , 3, 5, 6 ]



// console.log(arr.slice(0, 3));

// function pow(x, n){
//     if(x>1 && n>1){
//         return x ** n;
//     } {
//         return "используйте натуральное число"
//     }
// }

// console.log(pow(3,2));



// let obj = {
//     "0": 10,
//     0: 9
//    };

//    console.log( obj[5] + obj[0] );


// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
//   };
//   console.log(age);

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//   };
//   console.log(user);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   let sum = 0;
//       for(let key in salaries){
//            sum  += salaries[key];

//       } 


//   console.log(sum);



// let obj = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof(obj[key]) == 'number'){
//             ( obj[key] *= 2)
//         }{
//             return obj;
//         }
//     }

//   }

//   console.log(multiplyNumeric(obj));

// let arr1 = [];
// function evenNum(num1, num2){
//     let arr = [num1,num1++,num2--, num2];
//     for(i = 0;i < arr.length;i++){
//         if(arr[i]>num1 && arr[i]%10 == 0 && (arr[i]-(arr[i]%10))%10 == 0){
//             arr1.push(arr[i])
//         }else{
//             arr1
//         }


// }
// return arr1;
// }
// console.log(evenNum(21, 25));
// console.log(arr1);

// 1.
// let count = 0;
// function charCount(str1, str2) {
//     for (let i = 0; i < str2.length; i++) {
//         if (str1 === str2[i]) {
//             count++
//         }
//     }

//     return count;
// }


// console.log(charCount("a","edabit"));
// console.log(charCount("b", "big fat bubble"));


// 2.
// let num;
// function highestDigit(number){
//     number = number.toString();
//     num = number[0];
//     for (let i = 1; i < number.length; i++) {
//         if(num < number[i] ){
//             num = number[i]

//         }

//     }
//     return num;
// }

// console.log(highestDigit(37784));


// 3.
// let count;
// function findPerimeter(length, width){
//    count = 2*(length + width);
//    return count;
// }
// console.log(findPerimeter(3, 9));



// 4.
// let count = 0;
// function stringLength(str){
//     for(let i = 0;i < str.length;i++){
//         count++
//     }
//     return count;
// }
// console.log(stringLength("Hello World"));

// 7.
// function isPlural(str){
//     if(str[str.length-1] === "s"){
//     console.log(true);
//     }else{
//         console.log(false);
//     }

// }
// isPlural("dudes");



// 5.
// let str = '';
// function booleanToString(bool){
//     bool = bool.toString();
//     for(let i = 0;i < bool.length;i++){
//         str += bool[i];
//     }
//     return str;
// }
// console.log(booleanToString(true));


// let str = '';
// let booleanToString = (bool) => {
//         bool = bool.toString();
//     for(let i = 0;i < bool.length;i++){
//         str += bool[i];
//     }
//     return str;
// }

// console.log(booleanToString(true));











// 6.
// function lessThanOrEqualZero(num) {
//     if (num <= 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// lessThanOrEqualZero(-5);




// let arr = [1, 2, 5];
// let arr1 = arr.map(function (item) {
//     return item * 2;
//     });

// console.log(arr1);



// console.log(true == 1); true
// console.log(true == 0); false
// console.log(true == '12'); false
// console.log(true == '1'); true
// console.log(false == '0'); true
// console.log(10 && 4); 4
// console.log(0 && 4);  0

// console.log(10 || 0);  10
// console.log(0 || 43); 43

// console.log(true && false); false
// console.log(false && NaN); false
// console.log(true || false); true
// console.log(false || true); true

// console.log('me' && 'maybe I?'); maybe
// console.log('' && 'maybe I?');  
// console.log('wow' && ''); 
// console.log('me' || 'maybe I?'); 
// console.log('' || 'maybe I?'); 
// console.log('wow' || ''); 

// console.log(null && 'star wars');
// console.log(undefined && 'avengers');
// console.log('game of thrones' && null);
// console.log(null || 'star wars');
// console.log(undefined || 'avengers');
// console.log('game of thrones' || null);



// console.log(null == undefined)
// console.log(undefined == null)
// console.log(undefined == '')
// console.log(void 0 == null)


// 6.
// function lessThanOrEqualZero(num) {
//     return num <= 0 ? true : false
// }
// console.log(lessThanOrEqualZero(-5));


// 7.
// function isPlural(str) {
//     return str[str.length - 1] === "s" ? true : false
// }
// console.log(isPlural("dudes"));

// 1.
// const arr = [1, 2, "a", "b"];

// const arr1 = arr.filter((arr) => typeof arr === 'number');

// console.log(arr1);


// 2.
// const arr = ["may", "april", "september", "august"];

// const sortByLength = arr.sort((a,b) => a.length - b.length);

// console.log(sortByLength);


// 4.
// const arr1 = [];
// const charIndex = ((arr,el) => arr1.push(arr.indexOf(el), arr.lastIndexOf(el)));

// charIndex('hello', 'l');
// console.log(arr1);


// 6.
// const array = ["x", "y"];
// const clone = ((arr) => [...arr,[...arr]]);
// console.log(clone(array));


// 7.
// const array = [ 1, 2, 3, 4, 5];
// let count = 0;
// const indexMultiplier = array.forEach((item,i,arr) => arr.indexOf(0) ? count += arr[i]*i : 0);
// console.log(count);


// 5.
// function Spelling(array){
//     let arr = [];
//     for(let i = 1;i <= array.length;i++){
//    arr.push(array.slice(0,0 + i));
//     }
//     return arr;
// }
// console.log(Spelling("hello"));



// 3.
// function set(arr) {
//     const arr1 = [];
//     arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             arr1.push(arr[i])
//         }
//     }
//     return arr1;
// }

// console.log(set([1, 3, 3, 5, 5, 3, 5, 7, 5, 7]));

// 3.
// const items = [1, 3, 3, 5, 5,];
// const items = [1, 3, 3, 5, 5, 3, 5, 7, 5, 7];
// const set = items.sort().filter((item, i, array) => item !== array[i + 1]);

// console.log(set);


// let a = 8;
// let b = 12;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(b);
// console.log(a);



// let C = -40;
// let F = `${C}`*1.8 + 32;
// console.log(F);




// 3.
// function sumMakesTen(a, b){
//    return a + b === 10 ? true : false;

// }
// console.log(sumMakesTen(1,8));


// 1.
// function getOddNumbers(arr){
// return arr.filter((val,i,array) => array[i] % 2 == 1).reduce((a,b) => a + b,0);
// }
// console.log(getOddNumbers([22,1,3]));


// 2.
// function swapTheElements(arr){
//     let Max = arr[0];
//     let Min = arr[0];
//     let maxIndex = 0;
//     let minIndex = 0;

//     for(let i = 0;i < arr.length;i++){

// if(arr[i]>Max){
//     Max = arr[i]
//     maxIndex = i
// }else if(arr[i]<Min){
//     Min = arr[i]
//     minIndex = i
// }

//     }
//    arr[maxIndex] = Min;
//    arr[minIndex] = Max;
// return arr;
// }

// console.log(swapTheElements([7,2,3,4,5,6]));


// 4.
// function getBoxVolume(width, length, height){
//     return width * length * height;
// }
// console.log(getBoxVolume(2,2,2));


// 5.
// function arrayOfMultiples(num, length) {
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//        num != 0 ? arr.push((num * i) + num) : arr.push(0); break;
//     }

//     return arr;
// }
// console.log(arrayOfMultiples(2,5));

// 6.
// function numberOfStrings(arr,pref){
//     let sum = 0;
//     arr.forEach((val,i,array) => array[i].substring(0,pref.length) === pref ? sum++ : sum)
//     return sum;
// }
// console.log(numberOfStrings(["attention","please","attend"],"at"));


// 7.
// function winnerOfRps(p1,p2){

//     if(p1 == "Rock" && p2 == "Scissors" || p1 == "Scissors" && p2 == "Paper" || p1 == "Paper" && p2 == "Rock"){
//         console.log("The winner is p1");
//     }else if(p2 == "Rock" && p1 == "Scissors" || p2 == "Scissors" && p1 == "Paper" || p2 == "Paper" && p1 == "Rock"){
//        console.log("The winner is p2");
// }else if(p1 == p2){
//     console.log("It's a draw");
// }

// }
// winnerOfRps("Rock", "Paper");


// const payments = [
//     {
//     studentId: 1, 
//     studentName: "John Doe", 
//     payedAmount: 1600, 
//     year: 2020, 
//     },
//     {
//     studentId: 1,
//     studentName: "John Doe",
//     payedAmount: 1500,
//     year: 2021
//     },
//     {
//     studentId: 1, 
//     studentName: "John Doe",
//     payedAmount: 1400,
//     year: 2022
//     },
//     {
//     studentId: 1, 
//     studentName: "John Doe",
//     payedAmount: 1300,
//     year: 2023
//     },
//     {
//     studentId: 2, 
//     studentName: "Lu Kang",
//     payedAmount: 1500,
//     year: 2020
//     },
//     {
//     studentId: 2,
//     studentName: "Lu Kang",
//     payedAmount: 1400,
//     year: 2021
//     },
//     {
//     studentId: 2, 
//     studentName: "Lu Kang",
//     payedAmount: 1300,
//     year: 2023
//     },
//     {
//     studentId: 2, 
//     studentName: "Lu Kang",
//     payedAmount: 1200,
//     year: 2023
//     }
//     ];

// 1.
// function maxPayedAmount(arr){
//     let max = arr[0].payedAmount
//     for(let i = 0;i <arr.length;i++){
//         if(max < arr[i].payedAmount){
//             max =  arr[i].payedAmount
//         }
//     }
//     return max;
// }
// console.log(maxPayedAmount(payments));

// 2.
// function sumOfPayments(arr){
//   return  arr.reduce((acc,currentVal,array) => acc + currentVal.payedAmount,0)

// }
// console.log(sumOfPayments(payments));

// 3.
// function countOfPayments(arr){
//     let count = 0;
//     for(let i = 0;i < arr.length;i++){
//         arr[i].payedAmount > 1500 ? count++ : 0;
//     }
//     return count;
// }
// console.log(countOfPayments(payments));

// // 4.
// function averageOfAllPayments(arr){
//     let sum = 0;
//      for(let i = 0;i < arr.length;i++){
//         sum += arr[i].payedAmount / arr.length

//      }
// return sum;
// }
// console.log(averageOfAllPayments(payments));

// const arr = [
//     {
//         name: 'Jack',
//         surName: 'Smith',
//         age: 10
//     },
//     {
//         name: 'John',
//         surName: 'Veitch',
//         age: 20,
//     },
//     {
//         name: 'Andrew',
//         surName: 'Muir',
//         age: 30
//     }
// ]
// function GetSumOfAge(arr){
//      return arr.reduce((acc,currentVal) => acc + currentVal.age, 0);
// }
// console.log(GetSumOfAge(arr)); 



// function foo(a){
//     let b = a * 2
//      function zoo(c){
//        return console.log(a,b,c); 
//     }
//     return zoo(b * 3)
// };

// console.log(foo(2));
// let obj = {
//     "0": 1,
//     0: 2
//    };
//   console.log( obj[0]);



// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];


//   let someUsers = users.filter(item => item.id < 3);

//   console.log(someUsers);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   }

// function count(salaries){
//   return Object.values(salaries).reduce((acc,currentVal) => acc + currentVal,0)
// }
// console.log(count(salaries));



// console.log(true == 1); // т
// console.log(true == 0); //ф
// console.log(true == '12'); //ф
// console.log(true == '1');//т
// console.log(false == '0');//т
// console.log(10 && 4); //4
// console.log(0 && 4); //0

// console.log(10 || 0); //10
// console.log(0 || 43); //43

// console.log(true && false); //ф
// console.log(false && NaN); //ф
// console.log(true || false); // т 
// console.log(false || true); // т

// console.log('me' && 'maybe I?'); // ma
// console.log('' && 'maybe I?'); //""
// console.log('wow' && ''); //""
// console.log('me' || 'maybe I?'); //me
// console.log('' || 'maybe I?'); // ma
// console.log('wow' || ''); // wo

// console.log(null && 'star wars'); // n
// console.log(undefined && 'avengers'); // u
// console.log('game of thrones' && null); //n
// console.log(null || 'star wars'); // s
// console.log(undefined || 'avengers'); //a
// console.log('game of thrones' || null); //g



// console.log(null == undefined) // t
// console.log(undefined == null) //t
// console.log(undefined == '') //f
// console.log(void 0 === null) //t


// function Sort(arr){
//   let twoOldestAges = [];
//   arr.sort((a,b) => b - a);
//   for(let i = 0;i < arr.length;i++){
//     twoOldestAges.push(arr[i+1],arr[i])
//     break;
//   }
//   return twoOldestAges;
// }
// console.log(Sort([1,3,17,5,8,14]));


// var time = 0;
// for(var i = 0,j = 0;i < 5 && j < 4;i++,j++){
//   time++
// }
// console.log(time);


// function adds(n){

//   addsNum(k) => n + k



// }



// 1.

// function adds(number){
//   return function (n){ 
//     return  number + n
//   }
// }
// let addsNum = adds(10);
// console.log(addsNum(44));


// 2.
// function add(suffix){
//     return function (word){
//         return word + suffix
//     }
// }
// let add_suffix = add("ly")
// console.log(add_suffix("hopeless"));


// 3.
//   function multiply(array){
//     return  function(integer){ 
//         let array1 = [];
//         for(let i = 0;i < array.length;i++){
//            array1.push(array[i] * integer)
//         }
//  return array1;
//     }

//   }
//   console.log(multiply([1, 2, 3,])(2));


// 4.
// function group(array) {
//     return function (length) {
//         let array1 = [];
//         for (let i = 0; i < array.length; i += length) {
//             array1.push(array.slice(i, i + length))
//         }
//         return array1;
//     }
// }

// console.log(group([1, 2, 3, 4, 5, 6])(2));


// 5.
// function product(n,m){
//     return function (a,b){
//         return function(x,y){
//             return a * x * n + b * m * y
//         }
//     }
// }
// console.log(product(10,2)(5,0)(2,3));


// 6.

// function reverse(string){
//      let array = string.split(" ").reverse().join(" ")
//     return array;
// }
// console.log(reverse("Hello world!"));




// 7.
// function mostExpensiveItem(object){
//     let array = [...Object.values(object)];
//     let array1 = [...Object.keys(object)];
//     let index = 0;
//     let max = [array[0]];
//     for(let i = 0;i < array.length;i++){
//         if(max < array[i]){
//             max = array[i]
//             index = i;

//         }
//     }


//     return array1[index];

// }
// console.log(mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }));


// 8.
// function countAll(string) {
//     let digits = 0;
//     let letters = 0;
//     for(let i = 0;i < string.length;i++){
//         if(string[i] == Number(string[i]) && string[i] != " "){
//             digits++
//         }else if(string[i] == String(string[i]) && string[i] != " "){
//             letters++
//         }
//     }
//     let object = ({
//         "Letters" : letters,
//         "Digits" : digits
//     })

//     return object;
// }
// console.log(countAll("H3ll0 Wor1d"));


// function CreateAuthor(name, surname, book){
//     this.name = name;
//     this.surname = surname;
//     this.book = book;
// }

// const kyle = new CreateAuthor("Kyle", "Simpson", "You don't know js yet");
// console.log(kyle);

// const john = new CreateAuthor("John", "Doe", "Perfect book");
// console.log(john);


// 1.
// function Book(author, title){
//     this.author = author;
//     this.title = title;
//     this.getTitle = function() {
//         return "Title: " +this.title
//     }
//     this.getAuthor = function() {
//         return "Author: " +this.author
//     }

// }
// const HP = new Book( "Harry Potter", "J.K. Rowling")

// console.log(HP.getAuthor());



// 2.
// function Calculator(num, num1){
//     this.add = function() {
//         return num + num1
//     }
//     this.divide = function() {
//         return num / num1
//     }
//     this.subtract = function() {
//         return num - num1
//     }
//     this.multiply = function() {
//         return num * num1
//     }
// }

// const calculator = new Calculator(10,5);
// console.log(calculator.multiply());





// 4.
// const obj = {
//     age: 24,
//     foo: function () {
//         let self = this;
//         ((num) => {       // stexcvel e arrow function num parametrov
//             this.age = num // this.age in trvum e num parametry
//         })(17);  // function y anmijapes kanchvum e 17 argumentov
//         console.log(this.age); //log e arvum arden 17 arjeqov
//     }
// }
// obj.foo() // ktpi 17


// 5.
// const obj = {
//     age: 22,
//     showAge() {
//         console.log(this.age) // hxvum e obj i age in
//         const arrowAge = () => {
//             console.log(this.age)
//         }
//         arrowAge() // 22
//     },
//     showArrowAge: () => {
//         console.log(this.age)
//     }
//  }
//  obj.showAge()// 22
//  obj.showArrowAge() // ktpi undefined qani vor arrow function constructor i depqum chi ashxatum


// 3.
// function User(name){
//     this.name = name,
//     User.userCount++
// }
// User.userCount = 0;
// const u1 = new User("johnsmith10")
// console.log(User.userCount);
// const u2 = new User("marysue1989")
// console.log(User.userCount);
// const u3 = new User("milan_rodrick")
// console.log(User.userCount);


// 7.

// const foo = function () {
//     this.x = 5;
//     (function () {
//         this.x = 3;
//     })();
//     console.log(this.x);
//  };
//  const obj = {
//     x: 4,
//     logger: function () {
//  This = {}
//         console.log(this.x);
//     }
//  };
//  foo();
//  new foo();
//  obj.logger();
//  new obj.logger();



// // 6.
// const obj = {
//    a: 777,
//    foo 
// }
// foo(); // undefined qani vor kanchvum e  
// function foo() {
//    console.log(this.a)
// }
// obj.foo() // 777 



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     p1 = new constructor(this.name, this.age);
//     p2 = new constructor(this.name, this.age);
//     p3 = new constructor(this.name, this.age);
//     compareAge(p1, p2, p3) {
//         if (p1.age > p2.age) {
//             console.log(`${p1.name} is older than me.`);
//         } else if (p1.age < p2.age) {
//             console.log(`${p1.name} is younger than me.`);
//         } else if (p1.age == p2.age) {
//             console.log(`${p1.name} is the same age as me.`);
//         } else if (p2.age > p1.age) {
//             console.log(`${p2.name} is older than me.`);
//         } else if (p2.age < p1.age) {
//             console.log(`${p2.name} is younger than me.`);
//         } else if (p2.age == p1.age) {
//             console.log(`${p2.name} is the same age as me.`);
//         } else if (p1.age > p3.age) {
//             console.log(`${p1.name} is older than me.`);
//         } else if (p1.age < p3.age) {
//             console.log(`${p1.name} is younger than me.`);
//         } else if (p1.age == p3.age) {
//             console.log(`${p1.name} is the same age as me.`);
//         } else if (p3.age > p1.age) {
//             console.log(`${p3.name} is older than me.`);
//         } else if (p3.age < p1.age) {
//             console.log(`${p3.name} is younger than me.`);
//         } else if (p3.age == p1.age) {
//             console.log(`${p3.name} is the same age as me.`);
//         } else if (p2.age > p3.age) {
//             console.log(`${p2.name} is older than me.`);
//         } else if (p2.age < p3.age) {
//             console.log(`${p2.name} is younger than me.`);
//         } else if (p2.age == p3.age) {
//             console.log(`${p2.name} is the same age as me.`);
//         } else if (p3.age > p2.age) {
//             console.log(`${p3.name} is older than me.`);
//         } else if (p3.age < p2.age) {
//             console.log(`${p3.name} is younger than me.`);
//         } else if (p3.age == p2.age) {
//             console.log(`${p3.name} is the same age as me.`);
//         }
//     }
// }
// p1 = new Person("Samuel", 24);
// p2 = new Person("Joel", 36);
// p3 = new Person("Lily", 24);
// p1.compareAge(p2, p1, p3);


// 2.
// class UniversityMember {
//     constructor(name, age, role, energy) {
//         this.name = name;
//         this.age = age;
//         this.role = role;
//         this.energy = 24;
//     }

// }

// class Teacher extends UniversityMember {
//     constructor(name, age, role, energy) {
//         super(name, age, role, energy);

//     }
// }

// class Student extends UniversityMember {
//     constructor(name, age, role, energy) {
//         super(name, age, role, energy);

//     }
// }

// class University {
//     constructor(students, teachers) {
//         this.students = students;
//         this.teachers = teachers;
//     }
//     addMember(member) {
//         if (member.role === 'student') {
//             this.students.push(member)
//         } else if (member.role = 'teacher') {
//             this.teachers.push(member)
//         }
//     }
//     removeMember(member) {

//         let index;
//         for (let i = 0; i < this.students.length; i++) {
//             if (this.teachers[i].name === member.name) {

//                 index = i;
//                 break;
//             }
//         }
//         this.teachers.splice(index, index + 1)

//         for (let i = 0; i < this.students.length; i++) {
//             if (this.students[i].name === member.name) {

//                 index = i;
//                 break;
//             }
//         } 
//         this.students.splice(index, index + 1);
//     }
//     startLesson() {
//         for(let i = 0; i < this.students.length; i++){
//             this.students[i].energy =  this.students[i].energy-2;
//          }

//          for(let i = 0; i < this.teachers.length; i++){
//             this.teachers[i].energy = this.teachers[i].energy - 5;
//          }
//     }
// }




// const universityMember = new UniversityMember("Aram", 21, "student");
// const teacher = new Teacher("John", 30, "teacher");
// const student = new Student("Gor", 18, 'student');
// const student1 = new Student("Felix", 19, 'student');
// const university = new University([student], [teacher]);
// university.addMember(student);
// console.log(university.students);
// console.log(university.teachers);
// university.removeMember(teacher);
// university.startLesson()
// console.log(university.students);
// console.log(university.teachers);
// console.log(student1);




// 1.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     compareAge(person) {
//         if (person.age < this.age) {
//             console.log(`${person.name} is younger than me.`);
//         } else if (person.age > this.age) {
//             console.log(`${person.name} is older than me.`);
//         } else if (person.age === this.age) {
//             console.log(`${person.name} is the same age as me.`);
//         }
//     }
// }
// p1 = new Person("Samuel", 24);
// p2 = new Person("Joel", 36);
// p3 = new Person("Lily", 24);
// p1.compareAge(p2);


// class CoffeeShop {
//     constructor(name, menu, orders) {
//         this.name = "Coffee Shop";
//         this.menu = menu;
//         this.orders = [];
//     }
//     addOrder(item) {
//         let text;
//         for (let key in this.menu) {
//             if (item === this.menu[key].name) {
//                 return this.orders.push(this.menu[key]);

//             }

//         }for(let key in this.orders){
//         if(item === this.orders[key].name){
//            return "Order added";

//         }else{
//           return "This item is currently unavailable";
//         }
//     //     return text;
//     }

//     }

//     fulFilledOrder(item) {

// for(let key in this.orders){
//         if (this.orders.length === 0) {
//             return "All orders have been fulfilled"
//         } else if(this.orders[key].name === item){
//             return `The ${item} is ready.`
//         }
//     }


//     }
//     listOrders() {
//         let item = [];
//         for (let key in this.orders) {
//             item.push(this.orders[key].name)
//         }
//         return item;
//     }
//     dueAmount() {
//         let amount = 0;
//         for (let key in this.orders) {
//             amount += this.orders[key].price
//         }
//         return amount;

//     }
//     cheapestAmount() {
//         let order;
//         let name;
//         for (let key in this.menu) {
//             order = this.menu[0].price
//             if (order > this.menu[key].price) {
//                 order = this.menu[key].price
//                 name = this.menu[key].name
//             }
//         }
//         return name;
//     }
//     drinksOnly() {
//         let item = [];

//         for (let key in this.menu) {
//             if (this.menu[key].type === 'drink')
//                 item.push(this.menu[key].name)
//         }
//         return item;
//     }
//     foodOnly() {
//         let item = [];

//         for (let key in this.menu) {
//             if (this.menu[key].type === 'food')
//                 item.push(this.menu[key].name)
//         }
//         return item;
//     }

// }

// const coffeeShop = new CoffeeShop(this.name, [{
//     name: "hot cocoa",
//     type: "drink",
//     price: 500,
// },
// {
//     name: "iced tea",
//     type: "drink",
//     price: 700,
// },
// {
//     name: "cappuccino",
//     type: "drink",
//     price: 1000,
// },
// {
//     name: "ice-cream",
//     type: "food",
//     price: 400,
// },
// {
//     name: "americano",
//     type: "drink",
//     price: 600,
// },

// ], this.orders);
// console.log(coffeeShop.addOrder("dolce"));
// console.log(coffeeShop.addOrder("americano"));
// console.log(coffeeShop.addOrder("ice-cream"));

// console.log(coffeeShop.fulFilledOrder('dolce'));
// console.log(coffeeShop.fulFilledOrder('americano'));
// console.log(coffeeShop.listOrders());
// console.log(coffeeShop.dueAmount());
// console.log(coffeeShop.cheapestAmount());
// console.log(coffeeShop.drinksOnly());
// console.log(coffeeShop.foodOnly());
// console.log(coffeeShop);
// fulfilled y nayel
//anunery poxel


// function f(a, b) {
//     return Promise.resolve(a + b);
// }
// f(3,4).then(res => {console.log(res)});

// async function f(a, b){

// }



// let user = {
//     name : 'john',
//     age : 4
// };
// user.isAdmin = 'garik';
// delete user.age;
// console.log(user);

// const fruit = ['A','B',"A","C"]
// function NumberOfFruits(arr){
//     let obj = {};
//     for(let i = 0;i < arr.length;i++){
//         if(obj[arr[i]]){
//         obj[arr[i]] += 1
//     }else{
//         obj[arr[i]] = 1
//     }
//     return obj
// }
// }
// console.log(NumberOfFruits(fruit));

// var x = 5;
// function first(){
//     x = 8;
// }
// function second(x){
//     x = 7;
//     return x;
// }
// function third(){
//     first();
//     second();
//     console.log(x);
// }
// third();


// function MissingNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] - arr[i] !== 1) {
//             return arr[i] + 1
//         }
//     }
// }

// console.log(MissingNumber([1, 2, 3, 5, 6, 7, 8, 9]));

// function bubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-1; j++) {
//             if (arr[j].length > arr[j + 1].length) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }

//     }
//     return arr;
// }

//   console.log(bubbleSort(['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']));


// 1.
// function checkOddNumber(num) {
//     if(num % 2 === 0){
//         return false
//     }
//     if(num >= 1){
//        return checkOddNumber((num - num % 10) / 10);
//     }else{
//         return true
//     }
// }
// console.log(checkOddNumber(7791));


// 2.
function find(arr) {
    let el;
 for(let i = 0;i< arr.length;i++) {
  el = arr[0]
     if(arr[i] < 0){
      return -1
    }   
     if(el < arr[i]){
return el = arr[i]
     }
    // return find(arr.shift())
  }
    return el;
}
console.log(find([56, -9, 87, -23, -105, -55, -1]));

console.log('barev');
